import React, { Component } from 'react';

class NavButton extends Component {
    render() {
        return (
            <button className="nav-button" onClick={this.props.url}>
                {this.props.icon}
            </button>
        )
    }
}

export default NavButton;
