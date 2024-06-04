import React, { Component } from 'react';
const NavBar = ({totalNavBar}) => {
    return (
        <nav
        class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="www.ur.ac.rw">Navbar 
        <span className="badge badge-pill badge-secondary m-2">{totalNavBar}</span>

        </a>
      </nav>   );
}
export default NavBar;