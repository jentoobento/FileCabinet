import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../resources/colors';

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 40,
    width: '80%',
    borderRadius: 10,
  },
});

const Input = ({
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
}) => {
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

Input.propTypes = {
  style: PropTypes.shape({}),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  style: {},
  value: '',
  placeholder: '',
  placeholderTextColor: '',
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  multiline: false,
  numberOfLines: 1,
  maxLength: 20,
};

export default Input;
