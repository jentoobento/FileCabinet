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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    width: '50%',
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addListNameBorder: {
    borderRadius: 10,
    width: '80%',
    marginVertical: 20,
    overflow: 'hidden',
  },
  addListName: {
    backgroundColor: COLORS.white,
    color: COLORS.lightBlue,
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: COLORS.lightGrey,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    width: '30%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
});

export default styles;
