import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './about.css';
function About() {
  return (
    <Fragment>
        <div className="container">
      <h1>About</h1>
      <p>
          Version 1.0.0<br/>
          Powered by COVID-19 API
      </p>
      <hr/>
      <h5 className="m-4">Made by Arun</h5>
      <div style={{fontSize:'30px'}}>
          <a href="https://github.com/ArunMurugan78" className="git" style={{margin:'20px'}}><FontAwesomeIcon icon={faGithub}/></a>
     
        <a href="https://www.linkedin.com/in/arun-murugan-50885717a/"><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>
      </div>
    </Fragment>
  );
}

export default About;
