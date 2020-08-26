import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './component/navbar'
import Footer from './component/footer'
import Accueil from './component/accueil'
import CardVendeur from "./component/pagevendeur"
// import SignIn from './component/signin'
import  PageAdmin  from "./component/ADMIN/dashbordAdmin"
import Publication from "./component/Publication"
import Home from "./component/HEADER/home"
import { getUser } from "./actions/authenification"
import "./index.css";
import { connect } from "react-redux";

class App extends Component {
 
  componentDidMount(){
   
    this.props.getuser ()
   }
  render() {

    return (
      <div>
      
        <Router>
        <Navbar user={this.props.user}/>
    <Switch>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/" component={Accueil}/>
      <Route exact path="/vendeur" component={CardVendeur}/>
      <Route exact path="/Admin" component={PageAdmin}/>
      <Route exact path="/Allpublication" component={Publication}/>
    </Switch>
 
         
        {/* <CardVendeur/>  */}
     
      
      </Router>
      <Footer/>
      </div>


    );
  }
}

const mapStateToProps = (state)=>({
 
  user:state.auth
})
const mapDispatchToProps =(dispatch)=>({

getuser :()=>dispatch(getUser())
})
export default connect(mapStateToProps,mapDispatchToProps) (App);
