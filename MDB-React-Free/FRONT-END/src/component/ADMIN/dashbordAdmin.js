import React, { Component } from 'react';
import '../ADMIN/dshbord.css';
import {getAllUser} from '../../actions/userAction'
import {connect} from 'react-redux'
import { deleteUser} from '../../actions/userAction'
import { MDBDataTable } from 'mdbreact';




class PageAdmin extends Component {


state={
    role:"",
    roles:"ALL"
     
}



    componentDidMount(){
        this.props.getAllUser();
    }
      

render(){

const users=this.props.userReducer.filter(el=>el.role !=="admin")
console.log(users)
return(



<div className='tbb'>

<div>
        <select 
         onChange={(e) => this.setState({role: e.target.value })}    className="select">
       <option>{this.state.roles}</option>
        {users.map(el=><option>{el.role}</option> )}
          
       
        </select>
      </div>





  <div className='table' >

  
<table className='tb'>
  <thead   className='attribut'>
    <tr>
      <th scope="col" >N°</th>
      <th scope="col">NOM</th>
      <th scope="col">PRENOM</th>
      <th scope="col">ROLE</th>
      <th scope="col">ACTION</th>
    </tr>
  </thead>
  <tbody>
      {
        users.filter((elrole)=>this.state.role===this.state.roles?elrole:elrole.role.includes(this.state.role)).map(el=>  
    <tr>
      <th scope="row">{el.id-1}</th>
        <td>{el.nom}</td>
        <td>{el.prenom}</td>
        <td>{el.role}</td>
        <td><button className='del-b' onClick={()=>this.props.deleteUsers(el._id)}><i class="far fa-trash-alt"></i></button></td>
    </tr>)}
    
  </tbody>
      
</table>



</div>





</div>
)}


        }

const mapStateToProps = (state)=>({
    userReducer : state.users
})
const mapDispatchToProps =(dispatch)=>({
    getAllUser: ()=> dispatch(getAllUser()),
    deleteUsers :(id)=> dispatch(deleteUser(id)),

})


export default connect(mapStateToProps,mapDispatchToProps)(PageAdmin);
