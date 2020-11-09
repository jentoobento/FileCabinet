import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

const Button = ({disabled, onPress, style, color, text,}) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    style={[styles.button, disabled ? styles.disabled : styles[color], style]}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

export default Button;
