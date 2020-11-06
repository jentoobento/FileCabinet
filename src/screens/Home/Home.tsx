import React, {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  Animated,
  Dimensions,
  LogBox,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Modal,
} from 'react-native';
import {Button, Input} from '../../components/index';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {addList} from '../../redux/actions/listActions';
import {iconList} from '../../resources/iconList';
import strings from '../../resources/strings';
import {COLORS, LIST_COLORS} from '../../resources/colors';
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
  const [animColorHeightVal, setAnimColorHeightVal] = useState(
    new Animated.Value(0),
  );
  const [modalShow, setModalShow] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [listIcon, setListIcon] = useState({name: '', type: ''});
  const [showColors, setShowColors] = useState(false);
  const listColorKeys = Object.keys(LIST_COLORS);
  const randomListColor =
    LIST_COLORS[listColorKeys[parseInt(listColorKeys.length * Math.random())]];
  const [listColor, setListColor] = useState(randomListColor);
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
    setShowColors(false);
    setListColor(randomListColor);
    setAnimButtonHeightVal(new Animated.Value(0));
    setAnimButtonWidthVal(new Animated.Value(0));
    setAnimColorHeightVal(new Animated.Value(0));
    setAnimModalHeightVal(new Animated.Value(0));
  };

  const interpolateButtonHeight = animButtonHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: [deviceHeight * 0.15, deviceHeight * 0.35],
  });

  const interpolateButtonWidth = animButtonWidthVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['40%', '80%'],
  });

  const interpolateColorHeight = animColorHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: [deviceHeight * 0.05, deviceHeight * 0.3],
  });

  const interpolateModalHeight = animModalHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['50%', '80%'],
  });

  /**
   * Drives the icon button animation. useNativeDriver does not
   * work with width/height properties. Generates a useNativeDriver
   * yellowbox warning. Closes keyboard.
   */
  const onIconExpand = () => {
    collapseAll();
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

  const renderLists = ({iconName, iconType, id, name, color}) => (
    <Pressable
      key={id}
      style={[styles.button, {backgroundColor: color}]}
      onPress={() =>
        navigation.navigate('List', {
          id,
          name,
          iconName,
          iconType,
          color,
        })
      }>
      <Icon name={iconName} type={iconType} color={COLORS.grey} size={36} />
    </Pressable>
  );

  const onColorExpand = () => {
    collapseAll();
    Keyboard.dismiss();
    setShowColors(true);
    Animated.spring(animColorHeightVal, {toValue: 1}).start();
    Animated.spring(animModalHeightVal, {toValue: 1}).start();
  };

  const colorPress = (color) => {
    setListColor(LIST_COLORS[color]);
    setShowColors(false);
    Animated.spring(animColorHeightVal, {toValue: 0}).start();
    Animated.spring(animModalHeightVal, {toValue: 0}).start();
  };

  const collapseAll = () => {
    setListIcon(listIcon);
    setShowIcons(false);
    setListColor(listColor);
    setShowColors(false);
    Animated.spring(animButtonHeightVal, {toValue: 0}).start();
    Animated.spring(animButtonWidthVal, {toValue: 0}).start();
    Animated.spring(animColorHeightVal, {toValue: 0}).start();
    Animated.spring(animModalHeightVal, {toValue: 0}).start();
  };

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
              style={[
                styles.modalView,
                {
                  height: interpolateModalHeight,
                  backgroundColor: `${listColor}70`,
                  borderColor: listColor,
                },
              ]}>
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
                      <Text style={[styles.textStyle, {color: listColor}]}>
                        {strings.add_icon}
                      </Text>
                    ) : (
                      <Icon
                        name={listIcon.name}
                        type={listIcon.type || 'font-awesome'}
                        size={80}
                      />
                    ))}
                </Pressable>
              </Animated.View>
              <Animated.View
                style={[
                  styles.addColor,
                  {
                    height: interpolateColorHeight,
                  },
                ]}>
                <Pressable
                  onPress={onColorExpand}
                  style={styles.addColorButton}>
                  {showColors ? (
                    <Animated.ScrollView
                      style={styles.scroll}
                      contentContainerStyle={styles.scrollContent}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}>
                      {Object.keys(LIST_COLORS).map((color, index) => (
                        <Pressable
                          key={`${color}_${index}`}
                          style={styles.color}
                          onPress={() => colorPress(color)}>
                          <View
                            style={[
                              styles.currentColor,
                              {
                                backgroundColor: LIST_COLORS[color],
                                borderColor: LIST_COLORS[color],
                              },
                            ]}
                          />
                        </Pressable>
                      ))}
                    </Animated.ScrollView>
                  ) : (
                    <Text style={[styles.textStyle, {color: listColor}]}>
                      {strings.change_list_color}
                    </Text>
                  )}
                </Pressable>
              </Animated.View>
              <Input
                onChangeText={(text) => setListName(text)}
                placeholder={strings.add_list_name}
                onFocus={() => collapseAll()}
                onBlur={() => Keyboard.dismiss()}
                placeholderTextColor={listColor}
                value={listName}
              />
              <Button
                disabled={listName === '' || listIcon.name === ''}
                onPress={() => {
                  dispatch(
                    addList({
                      id: Date.now(),
                      iconName: listIcon.name,
                      iconType: listIcon.type,
                      name: listName,
                      color: listColor,
                    }),
                  );
                  listModalDismiss();
                }}
                color="green"
                text={strings.create}
              />
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
