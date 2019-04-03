import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
    <Link to="./Details" className="show">
        <img src={props.logo} alt={`${props.name} logo`} />
        <div className="Overlay">
            <h1>{props.name}</h1>
        </div>
    </Link>
    );
}