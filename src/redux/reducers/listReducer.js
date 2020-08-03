import * as LIST_TYPES from '../types/listTypes';

const initial = {
  lists: {},
};

const listReducer = (state = initial, action) => {
  switch (action.type) {
    case LIST_TYPES.ADD_LIST:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default listReducer;
