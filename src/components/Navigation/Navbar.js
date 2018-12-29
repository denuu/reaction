import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import About from './components/About/About';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// )

const Code = () => (
    <div>
        <h2>Code</h2>
    </div>
)

const Photo = () => (
    <div>
        <h2>Photo</h2>
    </div>
)

const Design = () => (
    <div>
        <h2>Design</h2>
    </div>
)

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
                    <ul className="nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/code">Code</Link></li>
                        <li><Link to="/photo">Photo</Link></li>
                        <li><Link to="/design">Design</Link></li>
                    </ul>
                </nav>
                <Route exact title="About" path="/" component={Home} />
                <Route exact title="About" path="/about" component={About} />
                <Route exact title="Code" path="/code" component={Code} />
                <Route exact title="Photo" path="/photo" component={Photo} />
                <Route exact title="Design" path="/design" component={Design} />
            </div>
        )
    }
}

export default Navbar;
