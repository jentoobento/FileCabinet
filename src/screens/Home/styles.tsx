import {StyleSheet} from 'react-native';
import COLORS from '../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 20,
    paddingVertical: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  textStyle: {
    color: COLORS.lightBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addIcon: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIconButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    padding: 10,
  },
  scrollContent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
  },
  icon: {
    width: '20%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2.5,
    borderWidth: 2,
    borderColor: COLORS.grey,
  },
  addListName: {
    backgroundColor: COLORS.white,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 40,
    width: '80%',
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    height: 40,
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  createText: {
    color: COLORS.grey,
    textTransform: 'uppercase',
  },
});

export default styles;
