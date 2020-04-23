import React, { Component, Fragment } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import AnimatedNumber from "animated-number-react";
import M from 'materialize-css';
import Footer from "./layout/footer";
import "./index.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { withRouter } from "react-router-dom";
import { SearchCountry } from "./search";
export class GlobalStats extends Component {
  state = {
    results: null,
    errMsg: null,
    isLoading: false,
  };

  componentDidMount() {

    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => this.setState({ results: res.data, isLoading: false }))
      .catch((err) => this.setState({ errMsg: err.message, isLoading: false }));
    this.setState({ isLoading: true });
  }
  componentDidUpdate(){
    M.Tabs.init(document.querySelector('.tabs'),{});
    if(this.props.location){
      if(this.props.location.hash==="#search"){
        if(this.state.isLoading===false){
          if(document.getElementById('search'))
          document.getElementById('search').scrollIntoView()
          // document.getElementById('search').className = 'shake animated '+document.getElementById('search').className ;
        }
      }
    }
  }
  formatValue = (value) => value.toFixed(0);
  render() {
    console.log(this.state.results);
    return (
      <Fragment>
        <div>
          <div class="container">
   {this.state.errMsg==="Network Error"?<h3 className="red-text center-align">No Internet</h3>:null}
   </div>
          {this.state.isLoading ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="lds-facebook col s12 m">
              <div></div><div></div><div></div>
              </div>
            </div>
          ) : null}
        </div>
        {this.state.results ? (
          <div>
          <div className="section container">
            <h4 id="global">
              <FontAwesomeIcon icon={faGlobeAmericas} /> Global
            </h4>
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
           
              {/*  graph for global stats */}
            
              <div>
                <div className="row" style={{marginTop:"50px"}}>
                  <div className="col s12">
                    <ul className="tabs">
                      <li className="tab col s3">
                        <a href="#ConfirmedCases" className="active">
                          Confirmed Cases
                        </a>
                      </li>
                      <li className="tab col s3">
                        <a href="#DeathCases">Death Cases</a>
                      </li>

                      <li className="tab col s3">
                        <a href="#RecoveredCases">Recovered Cases</a>
                      </li>
                    </ul>
                  </div>

                  <div id="ConfirmedCases" className="col s12"  style={{marginTop:'20px'}}>
                    <div>
                

                      <div>
                        <ResponsiveContainer width="95%" height={400}>
                          <BarChart
                            data={this.state.results["Countries"].map((obj) => {
                            
                              
                              return {
                                Country: obj.Country,
                                Confirmed: obj.TotalConfirmed,
                              };
                            })}
                            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                          >
                            <XAxis dataKey="Country" stroke="#8884d8" />
                            <YAxis dataKey="Confirmed" />
                            <Tooltip />
                            <CartesianGrid
                              stroke="#ccc"
                              strokeDasharray="5 5"
                            />
                            <Bar
                              dataKey="Confirmed"
                              fill="#8884d8"
                              barSize={30}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  <div id="DeathCases" className="col s12"  style={{marginTop:'20px'}}>
                    <div>
                    

                      <div>
                        <ResponsiveContainer width="95%" height={400}>
                          <BarChart
                            data={this.state.results["Countries"].map((obj) => {
                              return {
                                Country: obj.Country,
                                Deaths: obj.TotalDeaths,
                              };
                            })}
                            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                          >
                            <XAxis dataKey="Country" stroke="#8884d8" />
                            <YAxis dataKey="Deaths" />
                            <Tooltip />
                            <CartesianGrid
                              stroke="#ccc"
                              strokeDasharray="5 5"
                            />
                            <Bar
                              dataKey="Deaths"
                              fill="#8884d8"
                              barSize={30}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  <div id="RecoveredCases" className="col s12"  style={{marginTop:'20px'}}>
                    <div>
                   

                      <div>
                        <ResponsiveContainer width="95%" height={400}>
                          <BarChart
                            data={this.state.results["Countries"].map((obj) => {
                              return {
                                Country: obj.Country,
                                Recovered: obj.TotalRecovered,
                              };
                            })}
                            margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                          >
                            <XAxis dataKey="Country" stroke="#8884d8" />
                            <YAxis dataKey="Recovered" />
                            <Tooltip />
                            <CartesianGrid
                              stroke="#ccc"
                              strokeDasharray="5 5"
                            />
                            <Bar
                              dataKey="Recovered"
                              fill="#8884d8"
                              barSize={30}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  end of graph for global stats */}
        
            <SearchCountry {...this.props} />
          
            </div>
           
          </div>
        ) : (
          <div />
        )}
        {!this.state.isLoading?<div style={{marginTop:"300px"}}><Footer/></div>:null}
      </Fragment>
    );
  }
}

export default withRouter(GlobalStats);
