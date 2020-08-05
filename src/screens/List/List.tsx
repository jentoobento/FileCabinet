import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';
import strings from '../../resources/strings';
import COLORS from '../../resources/colors';

const List = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addFile}>
        <Icon name="plus" type="entypo" color={COLORS.grey} />
        <Text style={styles.addText}>{strings.add_file}</Text>
      </Pressable>
    </View>
  );
};

export default List;
