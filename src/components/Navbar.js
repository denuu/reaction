import React, { Component } from 'react';
import NavButton from './NavButton';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                [icon => 'A', url => 'A'],
                [icon => 'B', url => 'B'],
                [icon => 'C', url => 'C'],
            ]
        };
    }

    NavButtons(menus) {
        return (
            menus.map((menu, key) =>
                <NavButton key={key} url={menu['url']} icon={menu['icon']} />
            )
        )
    }

    render() {
        return (
            <div className="navbar">
                {this.NavButtons(this.state.menus)}
            </div>
        )
    }
}

export default Navbar;
