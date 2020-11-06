import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    borderWidth: 5,
    paddingVertical: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 320,
    width: '80%',
    backgroundColor: `${COLORS.pink}70`,
    borderColor: COLORS.pink,
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
  addDescription: {
    height: '50%',
    textAlign: 'left',
    padding: 10,
  },
  textStyle: {
    color: COLORS.aqua,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
