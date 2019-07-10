import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './Menu.svg';
import './Menu.css';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    toggleMenu() {
        this.setState({ visible: !this.state.visible });
    }

    render() {
        return (
            <div className={"menu" + (this.state.visible ? " is-visible" : "")}>
                <button className="menu-button" onClick={() => this.toggleMenu()}>
                    <img src={MenuIcon} alt="Menu" />
                </button>
                <div className="menu-panel">
                    <div className="menu-options">
                        <Link to='/'><h1>Home</h1></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;