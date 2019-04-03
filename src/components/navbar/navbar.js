/* eslint-disable jsx-a11y/anchor-is-valid */
import 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand"><Link to="/">React Boilerplate</Link></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
