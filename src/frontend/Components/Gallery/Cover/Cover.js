import React from 'react';
import { Link } from 'react-router-dom';

export default function Cover(show) {
    return (
    <Link to={`/${show.id}`} className="show">
        <img src={require(`../../../images/${show.id}.jpg`)} alt={`${show.name} logo`} />
        <div className="Overlay">
            <h1>{show.name}</h1>
        </div>
    </Link>
    );
}