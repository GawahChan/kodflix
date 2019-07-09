import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css';

export default function Cover(TvShow) {
    return (
    <Link to={`/${TvShow.id}`} className="show">
        <img src={require(`../../../Common/images/covers/${TvShow.id}.jpg`)} alt={`${TvShow.name} logo`} />
        <div className="Overlay">
            <h1>{TvShow.name}</h1>
        </div>
    </Link>
    );
}