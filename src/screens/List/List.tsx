import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Button, Input} from '../../components/index';
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
              <Input
                onBlur={() => Keyboard.dismiss()}
                value={fileDate}
                onChangeText={(text) => setFileDate(text)}
              />
              <Input
                placeholder={strings.add_file_title}
                onBlur={() => Keyboard.dismiss()}
                onChangeText={(text) => setFileName(text)}
                value={fileName}
              />
              <Input
                multiline
                numberOfLines={8}
                maxLength={1000}
                style={styles.addDescription}
                placeholder={strings.add_description}
                onBlur={() => Keyboard.dismiss()}
                onChangeText={(text) => setFileDescription(text)}
                value={fileDescription}
              />
              <Button
                disabled={!(fileName && fileDate)}
                color="green"
                text={strings.create}
              />
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
