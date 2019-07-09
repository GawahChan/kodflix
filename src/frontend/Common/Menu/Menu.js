import React, { Component } from 'react';
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
                        <h1>Hello Menu</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;