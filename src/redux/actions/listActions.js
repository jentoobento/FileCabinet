import * as LIST_TYPES from '../types/listTypes';

const addListSuccess = (payload) => ({
  type: LIST_TYPES.ADD_LIST,
  payload,
});

/**
 * Adds an empty list to the store.
 * @param {Object} list The list object
 */
export const addList = (list) => async (dispatch) => {
  try {
    dispatch(addListSuccess(list));
  } catch (error) {
    console.log('Add List Error:', error);
  }
};
