import React from 'react'
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to="/mentor">Become a mentor</Link>
                </li>
                <li>
                    <button className="bttn"> <Link to="/login">Log in</Link></button>
                </li>
                <li>
                    <button className="bttn"> <Link to="/signup">Sign up</Link></button>
                </li>
            </ul>
        </div>
    )
}
Navbar.propTypes = {
    title: propTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "mente"
}
export default Navbar
