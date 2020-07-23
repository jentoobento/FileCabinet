import {StyleSheet} from 'react-native';
import COLORS from '../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    aspectRatio: 1,
    width: '30%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.grey,
    margin: '5%',
  },
});

export default styles;
