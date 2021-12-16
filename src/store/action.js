//Action type
export const ADD_LINE = "ADD_LINE";
export const DELETE_LINE = "DELETE_LINE";

//Action Creator
export const addToLine = (content) => ({
  type: ADD_LINE,
  payload: content,
});

export const deleteFromLine = (payload) => ({
  type: DELETE_LINE,
  payload: payload,
});
