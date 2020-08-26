import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {  MDBInput } from 'mdbreact';
import "../../index.css";
import "../login/sigin.css"
import {login} from '../../actions/authenification'
import {connect} from 'react-redux'





class SignIn extends Component {
state = {
  modal14: false,
  email:'',
  password:'',
}

handleChangeEmail=(e)=>{
  this.setState({email:e.target.value})
}

handleChangePassword=(e)=>{
  this.setState({password:e.target.value})
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div >
      <MDBContainer >
        <button  className='btn' type='button' className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light" onClick={this.toggle(14)}>SignIn</button>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered className='body-sigin'>
          <MDBModalHeader  toggle={this.toggle(14)}  className='titre' >sigin-in</MDBModalHeader>
          <MDBModalBody  className='background-sigin'>
          
       
          <div className="grey-text">
     
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  onChange={this.handleChangeEmail}/>
               <MDBInput label="Your password" icon="user" group type="password" validate error="wrong"
            success="right"  onChange={this.handleChangePassword}/>
          
        </div>
        <div className="text-center">
          <MDBBtn color="dark"  className='button-signin'
            onClick={()=>this.props.login({
           email:this.state.email,password:this.state.password
           })} >Se connecter</MDBBtn>
        </div>
     
          </MDBModalBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
      </div>
    );
  }
}

const mapDispatchToProps =(dispatch)=>({
login  : (el)=> dispatch(login(el))
   
   })
   
   export default connect(null,mapDispatchToProps)(SignIn);
 















































  