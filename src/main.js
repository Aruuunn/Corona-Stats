import React, { Component, Fragment } from "react";
import GlobalStats from "./globalstats";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import {withRouter} from 'react-router-dom';
export class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="container" style={{marginTop:'20px'}}>
          <h3>Get Exact Corona Stats Now   <FontAwesomeIcon icon={faChartBar}/></h3>
          <div className="row">
            <div className="col">
              <p>
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus. Most people who fall sick
                with COVID-19 will experience mild to moderate symptoms and
                recover without special treatment.With Coronavirus spreading
                rapidly , Its safe to be at your Home .<b>Stay Home , Stay safe !</b> 
              </p>
            </div>
            <div>
              <GlobalStats {...this.props}/>
              
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Main);
