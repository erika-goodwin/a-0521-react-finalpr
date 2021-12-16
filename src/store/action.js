//Action type
export const ADD_LINE = "ADD_LINE";
export const DELETE_LINE = "DELETE_LINE";
export const EDIT_LINE = "EDIT_LINE";

//Action Creator
export const addToLine = (content) => ({
  type: ADD_LINE,
  payload: content,
});

export const deleteFromLine = (payload) => ({
  type: DELETE_LINE,
  payload: payload,
});

export const editLine = (id) => ({
  type: EDIT_LINE,
  payload: id,
});
