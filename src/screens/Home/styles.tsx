import {StyleSheet} from 'react-native';
import {COLORS} from '../../resources/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '5%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.white,
    aspectRatio: 1,
    maxWidth: '30%',
    minWidth: 150,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.grey,
    margin: '2%',
  },
  listFillers: {
    height: 0,
    maxWidth: '30%',
    minWidth: 150,
    marginHorizontal: '2%',
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
  },
  textStyle: {
    color: COLORS.aqua,
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
  addColor: {
    borderRadius: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  addColorButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    width: '20%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2.5,
    borderWidth: 1,
    borderColor: COLORS.grey,
  },
  currentColor: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default styles;
