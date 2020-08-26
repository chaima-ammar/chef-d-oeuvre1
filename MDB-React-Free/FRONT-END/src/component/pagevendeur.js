import React, { Component } from "react";
import "../index.css";
import { connect } from "react-redux";
//import {getProduct} from '../actions/vendeur-action'
import { deleteProduct } from "../actions/vendeur-action";
import { editProduct } from "../actions/vendeur-action";
import { editReservation } from "../actions/vendeur-action";
import { getUser } from "../actions/authenification";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import ModalEDit from "../component/modaledit";
import AddCard from "../component/AddCard";
import Axios from "axios";
import { editButtonRESERVATION } from "../actions/type";

class CardVendeur extends Component {
  state = {
    produit: [],
  };

  componentDidMount() {
    //  this.props.getProduct()
    Axios.get("http://localhost:8080/Antica/vendeur/getProduct").then((res) => {
      console.log(res);
      this.setState({ produit: res.data });
      this.props.getuser();

    });
  }












  render() {




   
    return (
      <>
        <AddCard />

        <div className="cards">
          {this.state.produit.filter((el)=>el.vendeurId===this.props.user._id).map((el) => (
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard className="style">
                <div className="button-top">
                  <button
                    className="button-reserve"
                    onClick={() => this.props.editReservation(el)}
                  >
                    reserver
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => this.props.deleteProduct(el._id)}
                  >
                    x
                  </button>
                </div>
                <MDBCardImage
                  className="imgcard-vendeur"
                  src={"http://localhost:8080/" + el.image}
                  waves
                />
                <MDBCardBody>
                  <div className="title">{el.title}</div>
                  <div className="prix">{el.price}</div>
                  <div className="title">categorie: {el.categorie}</div>
                  <div className="title"> Telephone: {el.telephone} </div>
                  <div className="title"> Email: {el.email} </div>
                  <div className="title">
                    {" "}
                    nom de la boutique: {el.nomboutique}{" "}
                  </div>
                </MDBCardBody>

                <div className="button">
                  <ModalEDit el={el} />
                </div>
              </MDBCard>
            </MDBCol>
          ))}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  vendeurReducer: state.card,


    user: state.auth,
  

});
const mapDispatchToProps = (dispatch) => ({
  //getProduct: ()=> dispatch(getProduct()),
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  editProduct: (id) => dispatch(editProduct(id)),
  editReservation: (id) => dispatch(editReservation(id)),
  getuser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardVendeur);
