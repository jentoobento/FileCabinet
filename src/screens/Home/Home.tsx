import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';

const Home = ({ navigation }) => {
  const person = useSelector((state) => state.people.person);

  const buttonClick = () => {
    navigation.navigate('Profile');
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={buttonClick} style={styles.button}>
          <Text>Go to the Profile Screen</Text>
        </Pressable>
        <Text>{person} is in the store.</Text>
      </View>
    </View>
  );
}

export default Home;
