import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody,MDBIcon  ,MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCard, MDBCardTitle,  MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import "../index.css";
import {getProduct} from '../actions/produitAction'
import {connect} from 'react-redux'


class Detail extends Component {



  componentDidMount(){
    this.props.getProduct();
}
  





state={
  modal2: false,
 
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  console.log("haw commentaire",this.props. productReducer)

  return (
    <MDBContainer>
       <a href='#!' className='black-text d-flex justify-content-end'>
              <div>
                plus de detail
                <MDBIcon  icon='angle-double-right' className='ml-2' onClick={this.toggle(2)}>   </MDBIcon> 
              </div>
            </a>
    
      <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)} className='title-header'>pour plus d'information merci de contacter le vendeur</MDBModalHeader>
          <div className='right'><MDBModalBody>
      <MDBCard >
      {
           
              <div className='comp-detail'>

        <MDBCardImage src={"http://localhost:8080/"+this.props.el.image} alt="MDBCard image cap" top hover
          overlay="white-slight" className='image-detail' /> 
        <MDBCardBody>
         
          <MDBCardTitle tag="h6" className='title-detail'>PLUS DE DETAIL</MDBCardTitle>
          <MDBCardText>
          <div className='attribu'>
                    <MDBCardText className="style"><label className='font'>Titre:
                    <span className="styel-texts">{this.props.el.title}</span></label></MDBCardText>
                    </div>
                    <div className='attribu'>
                    <MDBCardText className="style"><label className='font'> Prix:
                    <span className="styel-texts">{this.props.el.price}</span></label></MDBCardText>
                    </div>

                    <div className='attribu'>
                    <MDBCardText className="style"><label className='font'> Categorie:
                    <span className="styel-texts">{this.props.el.categorie}</span></label></MDBCardText>
                    </div>
                    <div className='attribu'>
                      <p className='fonts'> Contacter par :</p>
                    <MDBCardText className="style"><label className='font'> telephone:
                    <span className="styel-texts">{this.props.el.telephone}</span></label></MDBCardText>
                    </div>
                    <div className='attribu'>
                    <MDBCardText className="style"><label className='font'> Email:
                    <span className="styel-texts">{this.props.el.email}</span></label></MDBCardText>
                    </div>
                    <div className='attribu'>

                    <MDBCardText className="style"><label className='font'> nom de la boutique:
                    <span className="styel-texts">{this.props.el.nomboutique}</span></label></MDBCardText>
                    </div>
                    <div className='attribu'>
                    <MDBCardText className="style"><label className='font'> Commentaire:</label>
    {this.props.el.commentaire.map(el => 
      <span className="styel-texts">{el.text}</span>
      )}  
      
      </MDBCardText>
                    </div>
          
                 

          </MDBCardText>

        </MDBCardBody>
        
        </div>   }
            
          
      </MDBCard>
             
        </MDBModalBody>
        </div>
      </MDBModal>
         
    </MDBContainer>
    );
  }
}
const mapStateToProps = (state)=>({
  productReducer : state.product
})
const mapDispatchToProps =(dispatch)=>({
getProduct: (e)=> dispatch(getProduct(e))

})
export default connect(mapStateToProps,mapDispatchToProps)(Detail);