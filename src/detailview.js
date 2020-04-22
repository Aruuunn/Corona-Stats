import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import M from 'materialize-css';
import './index.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export class DetailView extends Component {
  state = {
    confirmed: null,
    deaths:null,
    recovered:null,
    isCL:false,
    isDL:false,
    isRL:false,
    totalRecovered:0,
    totalConfirmed:0,
    totalDeaths:0
  };
  componentDidMount(){
    this.setState({});
  }
  shouldComponentUpdate(){

    if(!this.state.confirmed||!this.state.deaths||!this.state.recovered){
      return true;
    }
    return false;
  }


  componentDidUpdate() {
    M.Tabs.init(document.querySelector('.tabs'),{});
   if(!this.state.isCL&&!this.state.isDL&!this.state.isRL){
    this.setState({isCL:true,isDL:true,isRL:true});
    console.log("hello")
    axios
      .get(
        "https://api.covid19api.com/total/country/" +
          this.props.match.params.country.trim()+"/status/confirmed"
      )
      .then((res) => this.setState({ confirmed: res.data ,isCL:false}))
      .catch((err) => console.log(err.message));
      axios
      .get(
        "https://api.covid19api.com/total/country/" +
          this.props.match.params.country.trim()+"/status/deaths"
      )
      .then((res) => this.setState({ deaths: res.data ,isDL:false}))
      .catch((err) => console.log(err.message));
      axios
      .get(
        "https://api.covid19api.com/total/country/" +
          this.props.match.params.country.trim()+"/status/recovered"
      )
      .then((res) => this.setState({ recovered: res.data ,isRL:false}))
      .catch((err) => console.log(err.message));
     
   }
  }

  render() {
    console.log(this.state.results);
    let totalConfirmed = 0,totalDeaths = 0,totalRecovered = 0;
    return (
      <div>
        { (this.state.isCL||this.state.isDL||this.state.isRL) ? <div  style={{display:'flex',justifyContent:'center'}}><div className="lds-facebook col s12 m"><div></div><div></div><div></div></div></div>:
        (<div className="row">
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

          <div id="ConfirmedCases" className="col s12">
            <div>
              <h5>Confirmed Cases  </h5>
              {this.state.confirmed ? (
                  <div>
                <ResponsiveContainer width="95%" height={400}>
                  <BarChart
                    data={this.state.confirmed.map((obj) => {
                      totalConfirmed = obj.Cases;
                        return ({
                      Date: obj.Date.slice(0, 10),
                      Confirmed: obj.Cases,
                    })})}
                    margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                  >
                    <XAxis dataKey="Date" stroke="#8884d8" />
                    <YAxis dataKey="Confirmed" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Confirmed" fill="#8884d8" barSize={30} />
                  </BarChart>
                 
                </ResponsiveContainer>
                <h5>Total Confirmed Cases <b> {totalConfirmed}</b> </h5>
                </div>
              ) : null}

            </div>
          </div>
          <div id="DeathCases" className="col s12">
            <div>
              <h5>Death Cases</h5>
              {this.state.deaths ? (
                  <div>
                <ResponsiveContainer width="95%" height={400}>
                  <BarChart
                    data={this.state.deaths.map((obj) => {
                        totalDeaths = obj.Cases;
                        return ({
                      Date: obj.Date.slice(0, 10),
                      "Death Cases": obj.Cases,
                    })})}
                    margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                  >
                    <XAxis dataKey="Date" stroke="#8884d8" />
                    <YAxis dataKey="Death Cases" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="Death Cases" fill="#8884d8" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
                <h5>Total Deaths Cases <b>{totalDeaths}</b></h5>
                </div>
              ) : null}
            </div>
          </div>
          <div id="RecoveredCases" className="col s12">
            <div>
              <h5>Recovered Cases</h5>
              {this.state.recovered ? (
                  <div>
                <ResponsiveContainer width="95%" height={400}>
                  <BarChart
                    data={this.state.recovered.map((obj) => {
                        totalRecovered=obj.Cases;
                        return({
                      Date: obj.Date.slice(0, 10),
                      "Recovered Cases": obj.Cases,
                    })})}
                    margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
                  >
                    <XAxis dataKey="Date" stroke="#8884d8" />
                    <YAxis dataKey="Recovered Cases" />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar
                      dataKey="Recovered Cases"
                      fill="#8884d8"
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
                <h5>
                    Total Recovered Cases <b>{totalRecovered}</b>
                </h5>
                </div>
              ) : null}
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

export default withRouter(DetailView);
