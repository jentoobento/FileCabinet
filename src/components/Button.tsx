import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../resources/colors';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 40,
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  disabled: {
    backgroundColor: COLORS.silver,
  },
  green: {
    backgroundColor: COLORS.green,
  },
});

const Button = ({disabled, onPress, style, color, text}) => (
  <Pressable
    disabled={disabled}
    onPress={onPress}
    style={[styles.button, disabled ? styles.disabled : styles[color], style]}>
    <Text style={styles.buttonText}>{text}</Text>
  </Pressable>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.shape({}),
  color: PropTypes.string,
  text: PropTypes.string,
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: () => {},
  style: {},
  color: '',
  text: '',
};

export default Button;
