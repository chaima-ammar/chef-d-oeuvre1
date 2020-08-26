import React, { Component } from 'react';
import { MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import {  MDBInput } from 'mdbreact';
import "../../index.css";
import "../Sign-up/signup.css"
import {register} from '../../actions/authenification'
import {connect} from 'react-redux'
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
class SignUp extends Component {
state = {
  modal14: false,
  name:'',
  lastname:'',
  email:'',
  password:'',
  role:''
}
handleChangeName=(e)=>{
  this.setState({name:e.target.value})
}
handleChangeLastName=(e)=>{
  this.setState({lastname:e.target.value})
}


handleChangeEmail=(e)=>{
  this.setState({email:e.target.value})
}

handleChangePassword=(e)=>{
  this.setState({password:e.target.value})
}


handleChangeRole=(e)=>{
  this.setState({role:e.target.value})
}

submitHandler = event => {
  event.preventDefault();
  event.target.className += " was-validated";
};


toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div >
      <MDBContainer className='backgnd-signup'>
        <button  className='btn' type='button' className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light" onClick={this.toggle(14)}>SignUp</button>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered className='socol'>
          <MDBModalHeader  toggle={this.toggle(14)} className='title-signup' >INSCRIPTION</MDBModalHeader>
          <MDBModalBody  className='socol'>
          <div className="grey-text inputs">


          <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Nom
              </label>
              <input
                value={this.state.name}
                name="name"
                onChange={this.handleChangeName}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder=" Nom"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Prenom
              </label>
              <input
                value={this.state.lname}
                name="lname"
                onChange={this.handleChangeLastName}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Prenom"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Email
              </label>
              <input
                value={this.state.email}
                onChange={this.handleChangeEmail}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <small id="emailHelp" className="form-text text-muted">
            Nous ne partagerons jamais votre e-mail avec qui que ce soit.
              </small>
            </MDBCol>
            </MDBRow>

              <MDBRow>
            
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                mot de passe
              </label>
              <input
                value={this.state.password}
                onChange={this.handleChangePassword}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="password"
                placeholder=" mot de passe"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid password.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Role
              </label>
              <input
                value={this.state.role}
                onChange={this.handleChangeRole}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="role"
                placeholder="role"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid role.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
           </MDBRow>
           <MDBCol>
           <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
         <div className="text-center">
          
         <MDBBtn color="dark" className='button-signup'
           onClick={()=>this.props.register(
            {name:this.state.name,
            email:this.state.email,
           password:this.state.password,
           role:this.state.role})} type='submit'>enregister</MDBBtn>
        </div>

</form>
        </div>
       
          </MDBModalBody>
          <MDBModalFooter className="mx-5 pt-3 mb-1">
     
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign In
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
 register: (e)=> dispatch(register(e))
  
  })
  
  export default connect(null,mapDispatchToProps)(SignUp);







