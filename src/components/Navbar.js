import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";



export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/time">Set time</Link>
            </li>
          </ul>
         
          <div className="d-flex">
            <div className="bg-primary mx-2" onClick={()=>props.toggleMode('rgb(5, 5, 63)')} type="checkbox" style={{height:'20px', width:'25px', borderRadius:400/2}}/>
            <div className="bg-light mx-2" onClick={()=>props.toggleMode('light')} type="checkbox" style={{height:'20px', width:'25px', borderRadius:400/2}}/>
            <div className="bg-success mx-2" onClick={()=>props.toggleMode('success')} type="checkbox" style={{height:'20px', width:'25px', borderRadius:400/2}}/>
            <div className="bg-danger mx-2" onClick={()=>props.toggleMode('danger')} type="checkbox" style={{height:'20px', width:'25px', borderRadius:400/2}}/>
            <div className="bg-warning mx-2" onClick={()=>props.toggleMode('warning')} type="checkbox" style={{height:'20px', width:'25px', borderRadius:400/2}}/>
          </div>

          <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

// Navbar.defaultProps = {
//   title: "set title here",
//   text1: "Home text here",
//   text2: "about text here",
// };
