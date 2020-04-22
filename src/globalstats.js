import React, { Component, Fragment } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import AnimatedNumber from "animated-number-react";
import './index.css';
import {withRouter} from 'react-router-dom';
import  { SearchCountry } from './search';
export class GlobalStats extends Component {
  state = {
    results: null,
    errMsg: null,
    isLoading:false
  };
 
  componentDidMount() {
  
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => this.setState({ results: res.data ,isLoading:false}))
      .catch((err) => this.setState({ errMsg: err,isLoading:false }));
      this.setState({isLoading:true});
  }
  formatValue = (value) => value.toFixed(0);
  render() {
    console.log(this.state.results)
    return (
      <Fragment>
       <div>
       { (this.state.isLoading) ? <div  style={{display:'flex',justifyContent:'center'}}><div className="lds-facebook col s12 m"><div></div><div></div><div></div></div></div>:null}
       </div>
          {  this.state.results ?
          <div className="section">
          <h4 id="global" className="section scrollspy"><FontAwesomeIcon icon={faGlobeAmericas} />  Global</h4>
        <div className="row">
          
          <div className="col s12 m6 l4">
            <h5>Total Confirmed Cases</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["TotalConfirmed"]}
                  duration={2000}
                  formatValue={this.formatValue}
                 
                  easing="linear"
                />
              </b>
            </h6>
          </div>
          <div className="col s12 m6 l4">
            <h5>Total Deaths</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["TotalDeaths"]}
                  duration={1500}
                  formatValue={this.formatValue}
                 
                  easing="linear"
                />
              </b>
            </h6>
          </div>
          <div className="col s12 m6 l4">
            <h5>Total Recovered</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["TotalRecovered"]}
                  duration={1500}
                  formatValue={this.formatValue}
                 
                  easing="linear"
                />
              </b>
            </h6>
          </div>
          </div>
          <hr />
          <div className="row">
          <div className="col s12 m6 l4">
            <h5>New Confirmed Cases</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["NewConfirmed"]}
                  formatValue={this.formatValue}
                  duration={1000}
                  easing="linear"
                />
              </b>
            </h6>
          </div>
          <div className="col s12 m6 l4">
            <h5>New Deaths</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["NewDeaths"]}
                  duration={1000}
                  formatValue={this.formatValue}
                 
                  easing="linear"
                />
              </b>
            </h6>
          </div>
         
          <div className="col s12 m6 l4">
            <h5>New Recovered</h5>
            <h6>
              {" "}
              <b>
                <AnimatedNumber
                  value={this.state.results["Global"]["NewRecovered"]}
                  duration={1000}
                  formatValue={this.formatValue}
                 
                  easing="linear"
                />
              </b>
            </h6>
          </div>
         
          </div> 
          <SearchCountry {...this.props} />   
        </div>:<div/>
  }
     
     
      </Fragment>
    );
  }
}

export default withRouter(GlobalStats);
