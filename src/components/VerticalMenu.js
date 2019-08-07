import React, { Component } from 'react';
import {  Link } from 'react-router-dom'

class VerticalMenu extends Component {
    render() {
        return (
            <div>
                <ul className="list-group list-group-flush">
                    <Link className="list-group-item" to="Japan">Japan</Link>
                    <Link className="list-group-item" to="French">French</Link>
                    <Link className="list-group-item" to="Vietnam">Vietnam</Link>
                    <Link className="list-group-item" to="Germany">Germany</Link>
                   
                </ul>

            </div>
        );
    }
}

export default VerticalMenu;