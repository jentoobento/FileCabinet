import * as PEOPLE_TYPES from '../types/peopleTypes';

const initial = {
  person: 'John Doe',
};

const peopleReducer = (state = initial, action) => {
  switch (action.type) {
    case PEOPLE_TYPES.ADD_PERSON:
      return {
        ...state,
        person: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
