import * as types from '../actions/type'
const ListeUsers = [];

const userReducer = (state = ListeUsers, action) => {
  console.log(action.paload)
  if (action.type === types.get_AllUser) {
    return action.paload
  }
  else if (action.type === types.delete_User) {
    return state.filter((el) => el.id !== action. paload); }

    if (action.type === types.getAll_pub) {
      return action.paload

    }


    else if (action.type === types.deleteAll_pub) {
      return state.filter((el) => el.id !== action. paload); }








 return state
}
export default userReducer