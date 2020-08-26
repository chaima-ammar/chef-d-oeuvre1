import * as types from './type'
import {URL} from './baseurl'
import Axios from 'axios'



export function getAllUser(){
return (dispatch)=>{
    Axios.get(URL+"Antica/admin/getAllUser").then((res)=>{
        console.log(res.data)
        dispatch(getListeusers(res.data));
    })
}

}

export function getListeusers(paload){
    return{
      type:types.get_AllUser,
      paload
    }}






    export function deleteListeuser(paload){
        return{
          type:types.delete_User,
          paload,
        }}
      
      export function deleteUser(id){
       
       return(dispatch)=>{
           Axios.delete(URL+`Antica/admin/deleteAllUser/${id}`).then(res=>{
              console.log(res.data)
              dispatch(( deleteListeuser));
              window.location.reload(false);
           })
          }
      
      }





export function getAllPub(){
  return (dispatch)=>{
      Axios.get(URL+"Antica/admin/getProductAcceuil").then((res)=>{
          console.log("ok" ,res)
          dispatch(getListepub(res.data));
      })
  }
  
  }
  
  export function getListepub(paload){
      return{
        type:types.getAll_pub,
        paload
      }}
  


      export function deleteListepub(paload){
        return{
          type:types.deleteAll_pub,
          paload,
        }}
      
      export function deleteAllpub(id){
       
       return(dispatch)=>{
           Axios.delete(URL+`Antica/admin/deleteAllpub/${id}`).then(res=>{
              console.log(res.data)
              dispatch(( deleteListepub));
              window.location.reload(false);
           })
          }
      
      }