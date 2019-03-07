import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import Home from '../../components/Home/index';
import About from '../../components/About/index';
import Code from '../../components/Code/index';
import Photo from '../../components/Photo/index';
import Design from '../../components/Design/index';
import '../../styles/components/navbar.scss';
import logo from '../../logo.svg';

class Navbar extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            menus: [
                [icon => 'A', url => 'A'],
                [icon => 'B', url => 'B'],
                [icon => 'C', url => 'C'],
            ]
        };
    }*/

    // NavButtons(menus) {
    //     return (
    //         menus.map((menu, key) =>
    //             <NavButton key={key} url={menu['url']} icon={menu['icon']} />
    //         )
    //     )
    // }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="header">
                        <img src={logo} className="breadcrumb" alt="logo" />
                    </div>
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/code">Code</Link></li>
                        <li><Link to="/photo">Photo</Link></li>
                        <li><Link to="/design">Design</Link></li>
                    </ul>
                </nav>
                <Route exact title="Home" path="/" component={Home} />
                <Route exact title="About" path="/about" component={About} />
                <Route exact title="Code" path="/code" component={Code} />
                <Route exact title="Photo" path="/photo" component={Photo} />
                <Route exact title="Design" path="/design" component={Design} />
            </div>
        )
    }
}

export default Navbar;
