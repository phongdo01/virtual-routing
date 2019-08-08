import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VerticalMenu extends Component {
    render() {
        var x = false
        var scroll = x === true ? "scroll" : " "
        
        return (
            <div style={{ overflow: scroll, height: "100%" }} className="overflow-auto">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-action">Japan</li>
                    <li className="list-group-item list-group-item-action">French</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                    <li className="list-group-item list-group-item-action">Japan</li>
                    <li className="list-group-item list-group-item-action">French</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                    <li className="list-group-item list-group-item-action">Japan</li>
                    <li className="list-group-item list-group-item-action">French</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                    <li className="list-group-item list-group-item-action">Germany</li>
                </ul>
            </div>
        );
    }
}

export default VerticalMenu;