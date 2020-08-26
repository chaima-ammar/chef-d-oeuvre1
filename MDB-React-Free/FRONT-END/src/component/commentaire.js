import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBInput } from "mdbreact";
import {postcommentaire} from '../actions/commentaireAction'
import { connect } from 'react-redux'


class Commentaire extends Component {
state={
 commentaire:'',
  modal2: false,

}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}
commentaire=(e)=>{
this.setState({commentaire:e.target.value})
}
render() {
  return (
   <div>
      <button onClick={this.toggle(2)}><i class="far fa-comment-dots"></i></button>

      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)}>Commentaire</MDBModalHeader>
        <MDBModalBody>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
      
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            onChange={this.commentaire}
            />
        </div>
        </MDBModalBody>
        <MDBModalFooter>
          <button  onClick={this.toggle(2)}>Annuler</button>
          <button onClick={()=>this.props.postcommentaire(this.props.el,this.state.commentaire)}>ajouter commentaire</button>
        </MDBModalFooter>
      </MDBModal>

      </div>
     
    );
  }
}
const mapDispatchToPorps = (dispatch)=>{
    return {
        postcommentaire: (el,commentaire)=> dispatch(postcommentaire(el,commentaire))
      };
}
export default connect(null,mapDispatchToPorps)(Commentaire);