import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fee</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default Navbar;