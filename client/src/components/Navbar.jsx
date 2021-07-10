import React from 'react'
// import {
//     Link,
// } from "react-router-dom";
import logo from '../assets/pmii.png'

export default function Navbar() {
    //admin login
    if (localStorage.token) {
        return (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation" style={{ position: 'sticky', top: 0 }}>
                <div className="navbar-brand">
                    <img src={logo} alt="PMII" width="46" height="20" style={{ marginLeft: "20px" }} />
                </div>

                {/* <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item"><p>Home</p></Link>
                    </div>
                </div> */}

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons" onClick={(e) => {
                            e.preventDefault()
                            localStorage.clear()
                            window.location.reload();
                        }}>
                            <p className="button is-link"><strong>Logout</strong></p>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    //logout
    else {
        return (
            <nav className="navbar is-info" role="navigation" aria-label="main navigation" style={{ position: 'sticky', top: 0 }}>
                <div className="navbar-brand">
                    <img src={logo} alt="PMII" width="46" height="20" style={{ marginLeft: "20px" }} />
                </div>
            </nav>
        );
    }
}
