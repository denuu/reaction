import React, { Component } from 'react';
import NavButton from 'NavButton';

function NavButtons(menus) {
    menus.forEach((menu, index) => {
        <NavButton url={menu['url']} icon={menu['icon']} />
    });
}

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
    render() {
        return (
            <div className="navbar">
                {NavButtons(this.state.menus)}
            </div>
        )
    }
}
