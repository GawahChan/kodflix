import React from 'react';
import { Link } from 'react-router-dom';

export default function Cover(props) {
    return (
    <Link to={`/${props.id}`} className="show">
        <img src={props.logo} alt={`${props.name} logo`} />
        <div className="Overlay">
            <h1>{props.name}</h1>
        </div>
    </Link>
    );
}