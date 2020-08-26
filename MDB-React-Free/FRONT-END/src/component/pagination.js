import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './pagination.css'
import "../index.css";
import { MDBSelect } from "mdbreact";
import {URL} from '../actions/baseurl'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import Commentaire from '../component/commentaire'
import Detail from '../component/detail';



let tab = []


 class Pagination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 4,
            currentPage: 0,
            categorie:[]
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(URL+"Antica/vendeur/getProduct")
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({categorie : data.map(el => el.categorie)})
                
                const postData = slice.map(el => <React.Fragment>
                    <div className='cards'>
        <MDBCol style={{ maxWidth: "22rem" }}>
        <MDBCard className='body-card'>
       
        <button className='button-reserve'>reserver</button>
  
          <MDBCardImage className="img-fluid image" src={"http://localhost:8080/"+el.image}
            waves />
          <MDBCardBody >
            
       
         <div className='title'>{el.title}</div> 
             
          <div className='prix'>{el.price}</div>
         <div className='title'> categorie: {el.categorie}</div>
 
          </MDBCardBody>

          <div className='button'>
          <Commentaire el={el}/> 
              
              <Detail el={el}/> 
        
            </div>
        </MDBCard>
      </MDBCol>
      </div>
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
      
     let valeur = new Set([...this.state.categorie])
      tab = [...valeur]
     console.log("BAA3",valeur , tab)
        return (





            <div>

<div >
<select type='select' className="selects">categories 
{ tab.map(el=>  
<option>{el}</option>) }
    
</select> 
  
  
</div>

{this.state.postData}
                <ReactPaginate 
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}

export default Pagination;