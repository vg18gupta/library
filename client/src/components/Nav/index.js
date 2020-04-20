import React from "react";
var icon_img = require('../image/rsz_1icon.png');

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark " style={{display:'flex', textAlign:'center'}}>
      <a className="navbar-brand"  href="/"><img src={icon_img}/></a>
      
      <div className="spacer" style={{flex: '1'}}></div>
      
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="/">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
      </ul>

    </nav>

  )
};

export default Nav;

