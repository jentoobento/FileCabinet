import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addPerson} from '../../redux/actions/peopleActions';
import styles from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.people.person);

  const buttonClick = () => {
    dispatch(addPerson('Mr. Fuzzywuzzy Dinklebooth'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={buttonClick} style={styles.button}>
          <Text>Add Person to the Store</Text>
        </Pressable>
        <Text>{person} is in the store.</Text>
      </View>
    </View>
  );
};

export default Profile;
