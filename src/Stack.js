import React from 'react';
export default function Stack(props) {
    return (
    <div className="show">
        <img src={props.logo} alt={`${props.name} logo`} />
        <div className="Overlay">
            <h1>{props.name}</h1>
        </div>
    </div>
    );
}