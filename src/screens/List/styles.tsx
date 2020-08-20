import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  addFile: {
    width: '100%',
    borderColor: COLORS.pink,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  addText: {
    color: COLORS.grey,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});

export default styles;
