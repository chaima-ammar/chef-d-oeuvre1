import React, { Component } from "react";
import SignIn from "./login/signin";
import "../index.css";
import SignUp from "./Sign-up/sign-up";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logout } from "../actions/authenification";

class Navbar extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log("mooo", this.props.profil);
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light navbar">
          <a className="navbar-brand" href="#!">
            <img
              className="logo"
              src="logotrans.png"
              width="150px"
              height="100px"
              alt="antique logo"
            ></img>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav1"
            aria-controls="basicExampleNav1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="breadcrumb">
            <li className="breadcrumb-item active">
              <a className=" item" href="#!">
                <Link to="/" className="waves-effect  item active">
                  Acceuil
                </Link>
              </a>
            </li>

            <li className="breadcrumb-item active">
              <a className=" item" href="#!">
                <Link to="/Home" className="waves-effect  item active">
                Qui Sommes Nous
                </Link>
              </a>
            </li>








            {this.props.profil.role==="vendeur"?
            <li className="breadcrumb-item ">
              <a className="item" href="#!">
                <Link to="/vendeur" className="waves-effect  item ">
                  profile
                </Link>
              </a>
            </li>:""
  }
            {this.props.profil.role==="Admin"?
            <>
            <li className="breadcrumb-item ">
              <a className="item" href="#!">
                <Link to="/Admin" className="waves-effect  item ">
                  Page admin
                </Link>
              </a>
            </li>
            <li className="breadcrumb-item ">
              <a className="item" href="#!">
                <Link to="/Allpublication" className="waves-effect  item ">
                  Tous les publications
                </Link>
              </a>
            </li> </>: ""}
          </ul>

          <div className="collapse navbar-collapse" id="basicExampleNav1">
            <ul className="navbar-nav ml-auto">
              {this.props.profil.role ? (
                <button  type='button' className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light" onClick={this.props.logout}>deconnexion</button>
              ) : (
                <li className="nav-item pl-2 mb-2 mb-md-0">
                  <SignIn />

                  <SignUp />
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapstateToprops = (state) => ({
  profil: state.auth,
});
export default connect(mapstateToprops, { getUser, logout })(Navbar);
