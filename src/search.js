import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag} from '@fortawesome/free-regular-svg-icons';
import {withRouter } from 'react-router-dom';

import Select from 'react-select';



export class SearchCountry extends Component {
  state = {
    countries: null,
    country:null,
    disabled: false,
  };
  componentDidMount() {
      console.log(this.props)
    axios
      .get("https://api.covid19api.com/countries")
      .then((res) => this.setState({ countries: res.data }))
      .catch((err) => console.log(err.message));
  }
  componentDidUpdate(){
      if(this.state.country){
          this.props.history.push("/"+this.state.country.trim());
      }
  }
  

  updateCountry = (value) => {this.setState({ country: value.value });console.log("Country: ",this.state.country) };
 
  render() {

    return (
      <div  id="search" style={{marginTop:"50px"}}>
       
          <h4><FontAwesomeIcon icon={faFlag} />  Country Wise</h4>
         <p>
             Get detailed Statistics of Corona in each countries .
         </p>
          {this.state.countries?
          <div>

          <Select options={this.state.countries.map(obj => {

              return{
                  label:obj.Country,
                  value:obj.Slug
              }
          })}   onChange={this.updateCountry} placeholder="  Search Your Country" />
         </div>  :null}
      </div>
    );
  }
}

export default withRouter(SearchCountry);
