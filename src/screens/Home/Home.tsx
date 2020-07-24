import React, {useState} from 'react';
import {View, Pressable, Text, TextInput} from 'react-native';
import {Modal} from 'react-native';
import {Icon} from 'react-native-elements';
import COLORS from '../../resources/colors';
import styles from './styles';

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [listName, setListName] = useState('');
  const listModalDismiss = () => {
    setModalShow(false);
    setListName('');
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalShow}
        onRequestClose={listModalDismiss}>
        <Pressable style={styles.centeredView} onPress={listModalDismiss}>
          <Pressable>
            <View style={styles.modalView}>
              <Pressable style={styles.addIcon}>
                <Text style={styles.textStyle}>Add Icon</Text>
              </Pressable>
              <View style={styles.addListNameBorder}>
                <TextInput
                  style={styles.addListName}
                  onChangeText={(text) => setListName(text)}
                  placeholder="Add List Name"
                  placeholderTextColor={COLORS.lightBlue}
                  value={listName}
                />
              </View>
              <Pressable style={styles.createButton} disabled={true}>
                <Text style={[styles.textStyle, {color: COLORS.grey}]}>
                  Create
                </Text>
              </Pressable>
            </View>
          </Pressable>
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
