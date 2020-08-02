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
} from 'react-native';
import {Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import {iconList} from '../../resources/iconList';
import strings from '../../resources/strings';
import COLORS from '../../resources/colors';
import styles from './styles';

const {height: deviceHeight} = Dimensions.get('screen');

const Home = () => {
  LogBox.ignoreLogs([/\useNativeDriver\b/]);
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
              <Pressable style={styles.createButton} disabled={true}>
                <Text style={[styles.textStyle, {color: COLORS.grey}]}>
                  {strings.create}
                </Text>
              </Pressable>
            </Animated.View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => setModalShow(true)} style={styles.button}>
          <Icon name="plus" type="entypo" color={COLORS.grey} size={36} />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
