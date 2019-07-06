import React, { Component } from 'react';
import MenuIcon from './Menu.svg';
import './Menu.css';

class Menu extends Component {
    openMenu() {
        console.log('toggled Menu');
    }

    render() {
        return (
            <div className="menu">
                <button className="menu-button" onClick={this.openMenu}>
                    <img src={MenuIcon} alt="Menu" />
                </button>
            </div>
        );
    }
}

export default Menu;