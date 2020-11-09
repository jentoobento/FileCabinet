import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/colors';

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

export default styles;
