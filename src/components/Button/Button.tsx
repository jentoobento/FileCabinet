import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Button = (props) => (
  <Pressable
    disabled={props.disabled}
    onPress={props.onPress}
    style={[
      styles.button,
      props.disabled ? styles.disabled : styles[props.color],
      props.styles,
    ]}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </Pressable>
);

export default Button;
