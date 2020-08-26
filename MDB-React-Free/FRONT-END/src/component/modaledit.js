
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {editProduct}from '../actions/vendeur-action';
import { connect } from 'react-redux';
import "../index.css";
class ModalEDit extends Component {
state = {
 

id:this.props.el._id,
title:this.props.el.title,
image:this.props.el.image,
price:this.props.el.price,
contact:this.props.el.contact,
telephone:this.props.el.telephone,
email:this.props.el.email,
nomboutique:this.props.el.nomboutique,



modal: false,
}


handelchangeTitle=(e)=>{ this.setState({title:e.target.value})}
handelchangePrice=(e)=>{this.setState({price:e.target.value})}
handelchangeImage=(e)=>{this.setState({image:e.target.value})}
handelchangeTelephone=(e)=>{this.setState({telephone:e.target.value})}
handelchangeEmail=(e)=>{this.setState({email:e.target.value})}
handelchangeNomboutique=(e)=>{this.setState({nomboutique:e.target.value})}


toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer> 
    <button onClick={this.toggle} className='btn-edit'> <i class="far fa-edit">EDIT</i> </button>
     
      <MDBModal isOpen={this.state.modal} toggle={this.toggle} className='body-edit'>
        <MDBModalHeader toggle={this.props.editProduct(this.props.el.id)}  className='titre-addcarte'>Modifer carte</MDBModalHeader>
        <MDBModalBody>
        <MDBInput label="title"  valueDefault={this.props.el.title} onChange={(e)=> this.handelchangeTitle(e)}/>
        <MDBInput label="prix" valueDefault={this.props.el.price} onChange={(e)=> this.handelchangePrice(e)}/>
        <MDBInput label="telephone" valueDefault={this.props.el.telephone} onChange={(e)=> this.handelchangeTelephone(e)}/> 
        <MDBInput label="email" valueDefault={this.props.el.email} onChange={(e)=> this.handelchangeEmail(e)}/> 
        <MDBInput label="nom de la boutique" valueDefault={this.props.el.nomboutique} onChange={(e)=> this.handelchangeNomboutique(e)}/>
        <MDBInput label="image" valueDefault={this.props.el.image} onChange={(e)=> this.handelchangeImage(e)}/> 
 
      

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="black" className='btn-telecharger' onClick={this.toggle}  >fermer</MDBBtn>
          <MDBBtn color="black"  className='btn-telecharger'  onClick={() =>

                this.props.editProduct(
                this.state
                
                )}> enregistrer</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}
const mapStateToProps = (state)=>({
  vendeurReducer : state.card
})
const mapDispatchToProps =(dispatch)=>({

  editProduct :(id)=> dispatch(editProduct(id))
})

export default connect(null,mapDispatchToProps) (ModalEDit);