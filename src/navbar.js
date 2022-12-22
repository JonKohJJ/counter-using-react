import React from "react";

function Navbar() {
    return (
      <div className="navbar">
        <h1><a href="/home">Home</a></h1>
        <ul>
            <li><a href="/counter">Counter</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/donate">Donate</a></li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;