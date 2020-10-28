import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import strings from '../../resources/strings';
import {COLORS} from '../../resources/colors';

const List = ({route}) => {
  const {color} = route.params;
  const [modalShow, setModalShow] = useState(false);
  const date = new Date();
  const currentDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  const [fileDate, setFileDate] = useState(currentDate);
  const [fileName, setFileName] = useState('');
  const [fileDescription, setFileDescription] = useState('');

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent
        visible={modalShow}
        onRequestClose={() => setModalShow(false)}>
        <TouchableOpacity
          onPress={() => setModalShow(false)}
          style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.modalView,
                {backgroundColor: `${color}70`, borderColor: color},
              ]}>
              <TextInput
                style={styles.modalTextInput}
                onBlur={() => Keyboard.dismiss()}
                value={fileDate}
                onChangeText={(text) => setFileDate(text)}
              />
              <TextInput
                style={styles.modalTextInput}
                placeholder={strings.add_list_title}
                onBlur={() => Keyboard.dismiss()}
                onChangeText={(text) => setFileName(text)}
                value={fileName}
              />
              <TextInput
                multiline
                numberOfLines={8}
                maxLength={1000}
                style={[styles.modalTextInput, styles.addDescription]}
                placeholder={strings.add_description}
                onBlur={() => Keyboard.dismiss()}
                onChangeText={(text) => setFileDescription(text)}
                value={fileDescription}
              />
              <Pressable
                style={[
                  styles.createButton,
                  {
                    backgroundColor:
                      fileName && fileDate ? COLORS.green : COLORS.silver,
                  },
                ]}>
                <Text style={[styles.textStyle, styles.createText]}>
                  {strings.create}
                </Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      <Pressable
        style={[styles.addFile, {borderColor: color}]}
        onPress={() => setModalShow(true)}>
        <Icon name="plus" type="entypo" color={COLORS.grey} />
        <Text style={styles.addText}>{strings.add_file}</Text>
      </Pressable>
    </View>
  );
};

export default List;
