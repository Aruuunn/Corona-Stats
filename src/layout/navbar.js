import React, { Fragment, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
export default function NavBar() {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }, []);
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">
            <i className="material-icons" style={{ fontSize: "50px" }}>
              assessment
            </i>{" "}
            Corona Stats
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/#global">Global</a>
            </li>
            <li>
              <a href="/#search">Country</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/#global">Global</a>
        </li>
        <li>
          <a href="/#search">Country</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </Fragment>
  );
}
