import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {AddProduct, addProduct} from '../actions/vendeur-action';
import { connect } from 'react-redux';
import axios from "axios"
import "../index.css";
import { getUser } from "../actions/authenification";
class AddCard extends Component {
state = {
  modal14: false,
  selectedFile:[]

}
fileSelectedHandler= (e) => {

this.setState({ selectedFile: e.target.files[0]})
}

uploadHandler =() =>{

const fd = new FormData()
fd.append('image', this.state.selectedFile)
axios.post("http://localhost:8080/", fd)
.then(res => console.log(res)
).catch(err => console.log(err))

}




toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}





componentDidMount() {
 
  this.props.getuser();

}




render() {
  console.log(this.state.selectedFile)
  return (
      <MDBContainer>
        <button onClick={this.toggle(14)} className='btn-ajouter'>ajouter produit</button> 
        
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered className='body-add'>
          <MDBModalHeader toggle={this.toggle(14)} className='titre-addcarte' >AJOUTER CARTE</MDBModalHeader>
          <MDBModalBody >
          <MDBInput label="title"       
          onChange={(e) => this.setState({ title: e.target.value })} />
          <MDBInput label="prix"   
               onChange={(e) => this.setState({ price: e.target.value })}/>

              <MDBInput label="categorie"   
               onChange={(e) => this.setState({ categorie: e.target.value })}/>


              <MDBInput label="telephone"   
               onChange={(e) => this.setState({ telephone: e.target.value })}/>
                  <MDBInput label="email"   
               onChange={(e) => this.setState({ email: e.target.value })}/>
                <MDBInput label="nomboutique"   
               onChange={(e) => this.setState({ nomboutique: e.target.value })}/>

       






          <MDBInput type="file"
          onChange={(e) =>this.fileSelectedHandler(e)}outline/>

         <button color="dark" onClick={()=>this.uploadHandler()} className='btn-telecharger' >telecharger l'image</button>
          </MDBModalBody>
          <MDBModalFooter>
          <MDBBtn  color="dark" className='btn-add' onClick={this.toggle(14)}>fermer</MDBBtn>
            <MDBBtn
            color="dark"
            className='btn-add' 
                  onClick={() =>
                this.props.AddProduct({
                  title: this.state.title,
                  image: this.state.selectedFile.name,
                  price: this.state.price,
                  categorie:this.state.categorie,
                  telephone:this.state.telephone,
                  email:this.state.email,
                  nomboutique:this.state.nomboutique,
                  vendeurId:this.props.user._id,
                  
                 
                })
              }>
            ajouter carte
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}


const mapStateToProps = (state) => ({

  user: state.auth,
});

const mapDispatchToProps = (dispatch) => {
    return {
      AddProduct: (el) => dispatch(addProduct(el)),
      getuser: () => dispatch(getUser()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddCard);