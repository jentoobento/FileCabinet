import React, {useState} from 'react';
import {View, Pressable, Text, TextInput, Animated} from 'react-native';
import {Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../resources/colors';
import styles from './styles';

const Home = () => {
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
  const [listName, setListName] = useState('');

  const listModalDismiss = () => {
    setModalShow(false);
    setListName('');
    setAnimButtonHeightVal(new Animated.Value(0));
    setAnimButtonWidthVal(new Animated.Value(0));
    setAnimModalHeightVal(new Animated.Value(0));
  };

  const interpolateButtonHeight = animButtonHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['45%', '80%'],
  });

  const interpolateButtonWidth = animButtonWidthVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['40%', '80%'],
  });

  const interpolateModalHeight = animModalHeightVal.interpolate({
    inputRange: [0, 1],
    outputRange: ['40%', '70%'],
  });

  const onIconExpand = () => {
    Animated.spring(animButtonHeightVal, {toValue: 1}).start();
    Animated.spring(animButtonWidthVal, {toValue: 1}).start();
    Animated.spring(animModalHeightVal, {toValue: 1}).start();
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={modalShow}
        onRequestClose={listModalDismiss}>
        <Pressable style={styles.centeredView} onPress={listModalDismiss}>
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
                <Text style={styles.textStyle}>Add Icon</Text>
              </Pressable>
            </Animated.View>
            <TextInput
              style={styles.addListName}
              onChangeText={(text) => setListName(text)}
              placeholder="Add List Name"
              placeholderTextColor={COLORS.lightBlue}
              value={listName}
            />
            <Pressable style={styles.createButton} disabled={true}>
              <Text style={[styles.textStyle, {color: COLORS.grey}]}>
                Create
              </Text>
            </Pressable>
          </Animated.View>
        </Pressable>
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
