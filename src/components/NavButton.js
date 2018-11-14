import React, { Component } from 'react';

class NavButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button className="nav-button" onClick={this.props.url}>
                {this.props.icon}
            </button>
        )
    }
}
