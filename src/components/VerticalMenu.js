import React, { Component } from 'react';
import {  Link } from 'react-router-dom'

class VerticalMenu extends Component {
    render() {
        var x = false
        var scroll = x===true?"scroll":" "
        return (
            <div  style={{overflow: scroll, height: "100%"}}>
                <ul className="list-group list-group-flush">
                    <Link className="list-group-item" to="#/Japan">Japan</Link>
                    <Link className="list-group-item" to="#/French">French</Link>
                    <Link className="list-group-item" to="#/Germany">Germany</Link>
                    <Link className="list-group-item" to="#/Germany">Germany</Link>
                </ul>

            </div>
        );
    }
}

export default VerticalMenu;