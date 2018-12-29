import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class NavButton extends Component {
    render() {
        return (
            <Link to={this.props.path}>
                <button className="nav-button">
                    {this.props.title}
                </button>
            </Link>
        )
    }
}

export default NavButton;
