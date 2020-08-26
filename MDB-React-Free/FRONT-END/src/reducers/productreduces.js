import * as types from '../actions/type'
const Liste = [];

const productReducer = (state = Liste, action) => {
  console.log(action.payload)
  if (action.type === types.get_product) {
    return action.payload
  }
 

 return state
}
export default productReducer