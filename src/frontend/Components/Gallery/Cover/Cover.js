import React from 'react';
import { Link } from 'react-router-dom';

export default function Cover(brexit) {
    return (
    <Link to={`/${brexit.id}`} className="show">
        <img src={require(`../../../images/${brexit.id}.jpg`)} alt={`${brexit.name} logo`} />
        <div className="Overlay">
            <h1>{brexit.name}</h1>
        </div>
    </Link>
    );
}