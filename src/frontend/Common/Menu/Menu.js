import React, { Component } from 'react';
import MenuIcon from './Menu.svg';
import './Menu.css';
import MenuLink from './MenuLink/MenuLink';

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
                        <MenuLink to="/" text="Home" icon="Home" onClick={() => this.toggleMenu()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;