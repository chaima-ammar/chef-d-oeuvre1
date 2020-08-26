import * as types from '../actions/type'
const init = [];

const commentReducer = (state = init, action) => {

  if (action.type == types.postCommentaire) return [...state, action.payload];
  else return state;
};

export default commentReducer;