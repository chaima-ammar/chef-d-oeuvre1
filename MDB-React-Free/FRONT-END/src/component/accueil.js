import React, { Component } from "react";
// import Navbar from './navbar'
import "../index.css";
import { connect } from "react-redux";
import { getProduct } from "../actions/produitAction";
import { getUser } from "../actions/authenification";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";
import Commentaire from "../component/commentaire";
import Detail from "../component/detail";
import Pagination from "../component/pagination";
import { MDBSelect } from "mdbreact";
import Home from "./HEADER/home";

class Accueil extends Component {
  state = {
    categorie: "",

    categorie: "categories",

    nomboutique: "boutiques",
  };

  componentDidMount() {
    this.props.getProduct();
    this.props.getuser();
    console.log(this.props.getProduct);
  }

  render() {
    const table = ["bazar1", "bazar2", "bazar3"];

    const table2 = ["armoire", "table", "chaise"];

    return (


      <div className="cards">
        
        <div className="button-select">
          <div>
            <select
              type="select"
              className="browser-default custom-select selects"
              onChange={(e) => this.setState({ categorie: e.target.value })}
            >
              <option>categories</option>
              {table2.map((el) => (
                <option>{el}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              type="select"
              className="browser-default custom-select btn-select "
              onChange={(e) => this.setState({ nomboutique: e.target.value })}
            >
              <option>boutiques</option>
              {table.map((el) => (
                <option>{el}</option>
              ))}
            </select>
          </div>
        </div>
        {this.props.productReducer
          .filter((el) =>
            this.state.categorie === "categories"
            
              ? this.props.productReducer
              : el.categorie===this.state.categorie
          )
          .filter((el) =>
            this.state.nomboutique === "boutiques"
              ? this.props.productReducer
              : el.nomboutique === this.state.nomboutique
          )
          .map((el) => (
            <MDBCol style={{ maxWidth: "22rem" }}>
              <MDBCard className="body-card">
                <span className="button-reserve">{el.reservation}</span>

                <MDBCardImage
                  className=" image-cardacceuil"
                  src={"http://localhost:8080/" + el.image}
                  waves
                />
                <MDBCardBody>
                  {/* <div className='prix'> titre: {el.title}</div>  */}

                  <div className="attribu">
                    <MDBCardText className="styel-texts">
                      <label className="title">
                        {" "}
                        title:
                        <span className="styel-texts ">{el.title}</span>
                      </label>
                    </MDBCardText>
                  </div>

                  <div className="attribu">
                    <MDBCardText className="styel-texts">
                      <label className="title">
                        {" "}
                        prix:
                        <span className="styel-texts ">{el.price}</span>
                      </label>
                    </MDBCardText>
                  </div>

                  <div className="attribu">
                    <MDBCardText className="styel-texts">
                      <label className="title">
                        {" "}
                        categorie:
                        <span className="styel-texts ">{el.categorie}</span>
                      </label>
                    </MDBCardText>
                  </div>
                </MDBCardBody>

                {this.props.user.role ? (
                  <div className="button">
                    <Commentaire el={el} />

                    <Detail el={el} />
                  </div>
                ) : (
                  <p>
                    pour plus de détails et pour commenter il faut connecter !
                  </p>
                )}
              </MDBCard>
            </MDBCol>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productReducer: state.product,
  user: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  getProduct: (e) => dispatch(getProduct(e)),
  getuser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
