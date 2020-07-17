import NavigationService from '../../navigation/NavigationService';
import * as PEOPLE_TYPES from '../types/peopleTypes';

const addPersonSuccess = (payload) => ({
  type: PEOPLE_TYPES.ADD_PERSON,
  payload,
});

export const addPerson = (name) => async (dispatch) => {
  try {
    // await an API response below
    // handle a good response below
    dispatch(addPersonSuccess(name));
    NavigationService.navigate('Home');
    // handle a bad response below
  } catch (error) {
    // catch an error
    console.log('An error occurred!', error);
  }
};
