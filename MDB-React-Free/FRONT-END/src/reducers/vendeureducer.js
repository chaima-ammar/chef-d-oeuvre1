import * as types from '../actions/type'

const list_produit = [];

const vendeurReducer = (state = list_produit, action) => {
console.log(action.paload)
  if (action.type === types.getProduct)
   {return action.paload } 


   else if (action.type === types.deleteProduct) {
    return state.filter((el) => el.id !== action. paload); } 


    else if (action.type === types.edit_Product ) {
      return [...state, action.paload ]; }


      else if (action.type === types.editButtonRESERVATION ) {
        return [...state, action.paload ]; }


      else if (action.type === types.addProduct) {
        return [...state, action.payload]; } 



        else {
          return state;
        }
  
};

export default vendeurReducer;