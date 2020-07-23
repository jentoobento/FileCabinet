import React, {useState} from 'react';
import {
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../resources/colors';
import styles from './styles';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [listName, changeListName] = useState('');

  const addListClick = () => {
    setModalShow(true);
  };

  const listModalDismiss = () => {
    setModalShow(false);
    changeListName('');
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShow}
        onRequestClose={() => listModalDismiss()}>
        <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPress={() => {
            listModalDismiss();
          }}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Pressable style={styles.addIcon}>
                <Text style={styles.textStyle}>Add Icon</Text>
              </Pressable>
              <View style={styles.addListNameBorder}>
                <TextInput
                  style={styles.addListName}
                  onChangeText={(text) => changeListName(text)}
                  placeholder="Add List Name"
                  placeholderTextColor={COLORS.lightBlue}
                  value={listName}
                />
              </View>
              <Pressable style={styles.createButton} disabled={true}>
                <Text style={{...styles.textStyle, color: COLORS.grey}}>
                  Create
                </Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <View style={styles.buttonContainer}>
        <Pressable onPress={addListClick} style={styles.button}>
          <Icon name="plus" type="entypo" color={COLORS.grey} size={36} />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
