import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand mx-auto" to="/">
                    <img src={require('../images/STS Logo.png')} width="100" height="100" className="logo d-inline-block" alt="" />
                </Link>
                <h1 >STEAL THE SHOW</h1>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                        <a class="nav-link" href="profile.html">Profile</a>

                        </li>

                        <li className="nav-item">
                            {/* <Link className="navbar-brand mx-auto" to="/plan">Plan</Link> */}
                            <a class="nav-link" href="plan.html">Plan</a>

                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="dress.html">Dress</a>
                                <a className="dropdown-item" href="shoes.html">Shoes</a>
                                <a className="dropdown-item" href="handbag.html">Handbag</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            {/* <Link className="navbar-brand mx-auto" to="/cart">Cart</Link> */}
                            <a class="nav-link" href="cart.html">Cart</a>

                        </li>

                        <li className="nav-item">
                            <li className="nav-item">
                                {/* <Link className="navbar-brand mx-auto" to="/login">Log In</Link> */}
                                <a class="nav-link" href="longin.html">Log In</a>

                            </li>
                        </li>



                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;