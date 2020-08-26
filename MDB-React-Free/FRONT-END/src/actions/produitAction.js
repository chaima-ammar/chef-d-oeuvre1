import * as types from './type'
import Axios from 'axios'
import {URL} from './baseurl'


export function getProduct (){
    return (dispatch)=>{
   
Axios.get(URL+"Antica/vendeur/getProduct").then((res)=> {
dispatch(getListproduct(res.data))
  
}

)
    }}
  export function  getListproduct(payload) {

    return{

        type:types.get_product,
        payload
    }
  }





