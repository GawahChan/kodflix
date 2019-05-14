import React from 'react';
import { Link } from 'react-router-dom';

export default function Cover(stack) {
    return (
    <Link to={`/${stack.id}`} className="show">
        <img src={require(`../../../images/${stack.id}.jpg`)} alt={`${stack.name} logo`} />
        <div className="Overlay">
            <h1>{stack.name}</h1>
        </div>
    </Link>
    );
}