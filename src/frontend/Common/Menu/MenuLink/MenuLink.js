import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.css';

function MenuLink(props) {
    return (
        <Link className = "MenuLink" to={props.to} onClick={props.onClick}>
            <img src={require(`../MenuLink/${props.icon}.svg`)} alt={`${props.icon} icon`}/>
            <h1>{props.icon}</h1>
        </Link>
    )
}

export default MenuLink;