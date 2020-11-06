import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const Input = (props) => {
  const {
    style,
    value,
    placeholder,
    placeholderTextColor,
    onBlur,
    onChangeText,
    onFocus,
    multiline,
    numberOfLines,
    maxLength,
  } = props;

  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onBlur={onBlur}
      onChangeText={(text) => onChangeText(text)}
      onFocus={onFocus}
      multiline={multiline}
      numberOfLines={numberOfLines}
      maxLength={maxLength}
    />
  );
};

export default Input;
