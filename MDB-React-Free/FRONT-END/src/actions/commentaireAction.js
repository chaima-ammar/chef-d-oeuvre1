import * as types from './type'
import Axios from 'axios'
import {URL} from './baseurl'
import Commentaire from '../component/commentaire';




const commentpost = (payload) => ({
      type:types.postCommentaire,
    payload
  });




  export const postcommentaire = (el,commentaire) => {  
    console.log(el,commentaire)
   return (dispatch) =>{
    el.commentaire[el.commentaire.length] = {content:commentaire,date:new Date()}
 Axios.patch(URL+`Antica/user/postCommentaire/${el.id}`,{
   commentaire:commentaire
 } )
    .then((res) => { console.log(res.data) 
      dispatch(commentpost(commentaire))})
      .catch(err=>console.log(err))
    
 };
    }