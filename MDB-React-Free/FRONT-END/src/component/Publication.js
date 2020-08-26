import React, { Component } from 'react';
import './ADMIN/dshbord.css'
import {getAllPub} from '../actions/userAction'
import {connect} from 'react-redux'
import{deleteAllpub} from '../actions/userAction'




class Publication extends Component {

  componentDidMount(){
    this.props.getAllPub();
}
    
    
    render(){
    console.log("hello",this.props.userReducer)
  
    return(
    <div>


    <div className='table-pub'>

 <table class="table table-striped">
   <thead>
     <tr className='tt'>
       <th scope="col">N°</th>
       <th scope="col">title</th>
       <th scope="col">image</th>
       <th scope="col">price</th>
      <th scope="col">commentaire</th>
       <th scope="col">ACTION</th>
     </tr>
  </thead>
  <tbody>
  {
      this.props.userReducer.map(el=>
     <tr> 
      <th scope="row">{el._id}</th>
      <td>{el.title}</td>
      <td><img src={"http://localhost:8080/"+el.image} style={{height:"60px"}}/></td>
      <td>{el.price}</td>
      <td></td>
      <td><button className='del-b' onClick={()=>this.props.deleteAllpub(el._id)}><i class="far fa-trash-alt"></i></button></td>
     </tr>)}
    
    
   </tbody>
 </table>      
    </div>
      


     </div> 

     ) }

    }












  const mapStateToProps = (state)=>({
     userReducer : state.users
     })
 const mapDispatchToProps =(dispatch)=>({
  getAllPub: ()=> dispatch(getAllPub()),
  deleteAllpub :(id)=> dispatch( deleteAllpub(id)),
   
 })
          
  export default connect(mapStateToProps,mapDispatchToProps)(Publication);