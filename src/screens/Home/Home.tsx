import React, {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  Animated,
  Dimensions,
  LogBox,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {addList} from '../../redux/actions/listActions';
import {iconList} from '../../resources/iconList';
import strings from '../../resources/strings';
import COLORS from '../../resources/colors';
import styles from './styles';

const {height: deviceHeight} = Dimensions.get('screen');

const Home = ({navigation}) => {
  LogBox.ignoreLogs([/\useNativeDriver\b/]);
  const dispatch = useDispatch();
  const [animButtonHeightVal, setAnimButtonHeightVal] = useState(
    new Animated.Value(0),
  );
  const [animButtonWidthVal, setAnimButtonWidthVal] = useState(
    new Animated.Value(0),
  );
  const [animModalHeightVal, setAnimModalHeightVal] = useState(
    new Animated.Value(0),
  );
  const [modalShow, setModalShow] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [listIcon, setListIcon] = useState({name: '', type: ''});
  const [listName, setListName] = useState('');
  const lists = Object.values(useSelector((state) => state.list.lists));

  /**
   * Close the modal, reset all animations to defaults.
   */
  const listModalDismiss = () => {
    setModalShow(false);
    setShowIcons(false);
    setListName('');
    setListIcon({name: '', type: ''});
    setAnimButtonHeightVal(new Animated.Value(0));
    setAnimButtonWidthVal(new Animated.Value(0));
    setAnimModalHeightVal(new Animated.Value(0));
  };

  const interpolateButtonHeight = animButtonHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['45%', '70%'],
  });

  const interpolateButtonWidth = animButtonWidthVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['40%', '80%'],
  });

  const interpolateModalHeight = animModalHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['40%', '70%'],
  });

  /**
   * Drives the icon button animation. useNativeDriver does not
   * work with width/height properties. Generates a useNativeDriver
   * yellowbox warning. Closes keyboard.
   */
  const onIconExpand = () => {
    Keyboard.dismiss();
    setShowIcons(true);
    Animated.spring(animButtonHeightVal, {toValue: 1}).start();
    Animated.spring(animButtonWidthVal, {toValue: 1}).start();
    Animated.spring(animModalHeightVal, {toValue: 1}).start();
  };

  /**
   * Set the icon in state and reverse all the animations.
   * @param {Object} icon The selected icon
   */
  const iconPress = (icon) => {
    setListIcon(icon);
    setShowIcons(false);
    Animated.spring(animButtonHeightVal, {toValue: 0}).start();
    Animated.spring(animButtonWidthVal, {toValue: 0}).start();
    Animated.spring(animModalHeightVal, {toValue: 0}).start();
  };

  const renderLists = ({iconName, iconType, id, name}) => (
    <Pressable
      key={id}
      style={styles.button}
      onPress={() =>
        navigation.navigate('List', {
          id,
          name,
          iconName,
          iconType,
        })
      }>
      <Icon name={iconName} type={iconType} color={COLORS.grey} size={36} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={modalShow}
        onRequestClose={listModalDismiss}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={listModalDismiss}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[styles.modalView, {height: interpolateModalHeight}]}>
              <Animated.View
                style={[
                  styles.addIcon,
                  {
                    height: interpolateButtonHeight,
                    width: interpolateButtonWidth,
                  },
                ]}>
                <Pressable onPress={onIconExpand} style={styles.addIconButton}>
                  {showIcons && (
                    <Animated.ScrollView
                      style={styles.scroll}
                      contentContainerStyle={styles.scrollContent}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}>
                      {iconList.map((icon, index) => (
                        <Pressable
                          key={`${icon.name}_${index}`}
                          style={styles.icon}
                          onPress={() => iconPress(icon)}>
                          <Icon
                            name={icon.name}
                            type={icon.type}
                            size={deviceHeight / 25}
                          />
                        </Pressable>
                      ))}
                    </Animated.ScrollView>
                  )}
                  {!showIcons &&
                    (!listIcon.name ? (
                      <Text style={styles.textStyle}>{strings.add_icon}</Text>
                    ) : (
                      <Icon
                        name={listIcon.name}
                        type={listIcon.type || 'font-awesome'}
                        size={80}
                      />
                    ))}
                </Pressable>
              </Animated.View>
              <TextInput
                style={styles.addListName}
                onChangeText={(text) => setListName(text)}
                placeholder={strings.add_list_name}
                onFocus={() => iconPress(listIcon)}
                onBlur={() => Keyboard.dismiss()}
                placeholderTextColor={COLORS.lightBlue}
                value={listName}
              />
              <Pressable
                disabled={listName === '' || listIcon.name === ''}
                onPress={() => {
                  dispatch(
                    addList({
                      id: Date.now(),
                      iconName: listIcon.name,
                      iconType: listIcon.type,
                      name: listName,
                    }),
                  );
                  listModalDismiss();
                }}
                style={() => [
                  styles.createButton,
                  {
                    backgroundColor:
                      listName && listIcon.name
                        ? COLORS.green
                        : COLORS.lightGrey,
                  },
                ]}>
                <Text style={[styles.textStyle, styles.createText]}>
                  {strings.create}
                </Text>
              </Pressable>
            </Animated.View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <ScrollView contentContainerStyle={styles.buttonContainer}>
        {Object.values(lists).map((list: any) => renderLists(list))}
        <Pressable onPress={() => setModalShow(true)} style={styles.button}>
          <Icon name="plus" type="entypo" color={COLORS.grey} size={36} />
        </Pressable>
        {/* added to make sure all items are left aligned */}
        <View style={styles.listFillers} />
        <View style={styles.listFillers} />
        <View style={styles.listFillers} />
      </ScrollView>
    </View>
  );
};

export default Home;
