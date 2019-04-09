import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <div>
            <h1>This page is not found :(</h1>
            <Link to='/'><h3>Back to home page</h3></Link>
        </div>
    )
}