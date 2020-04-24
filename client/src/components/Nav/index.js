// import React from "react";
// var icon_img = require('../image/rsz_1icon.png');

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand navbar-dark bg-dark " style={{display:'flex', textAlign:'center'}}>
//       <a className="navbar-brand"  href="/"><img src={icon_img}/></a>
      
//       <div className="spacer" style={{flex: '1'}}></div>
      
//       <ul className="navbar-nav ">
//         <li className="nav-item">
//           <a className="nav-link" href="/">Search</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/saved">Saved</a>
//         </li>
//       </ul>

//     </nav>

//   )
// };

// export default Nav;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
var icon_img = require('../image/rsz_1icon.png');

class Navbar extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">
            Saved
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/api/logout" className="nav-link">
            <img
              className="rounded-circle"
              src={user.photo}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connected to your email to display an image"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        {/*<li className="nav-item">
          <a className="nav-link" href="/">
            Login with Google
          </a>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
    </li>*/}
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img src={icon_img}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  Developers
                </Link>
    </li> */}
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);
