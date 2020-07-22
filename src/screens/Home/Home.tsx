import React from 'react';
import {View, Pressable} from 'react-native';
import {Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../resources/colors';
import styles from './styles';

const Home = () => {

  const buttonClick = () => {
    Alert.alert("I'm clicked broh!")
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={buttonClick} style={styles.button}>
          <Icon name='plus' type='entypo' color={COLORS.grey} size={36} />
        </Pressable>
      </View>
    </View>
  );
}

export default Home;
