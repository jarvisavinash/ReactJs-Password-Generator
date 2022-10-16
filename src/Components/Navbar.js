import React from "react";
import {Link } from "react-router-dom";

function Navbar(){
    return (
    <div>

        <nav className="navbar fixed-top navbar-expand-lg" style={{"background": "#e0e5ec"}}>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <p className="navbar-brand">
                                <Link to="passwordGenerator" style={{ color: "black", textDecoration: 'none' }} >
                                    <small>Password Generator</small>
                                </Link>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    </div>
    );
}

export default Navbar;