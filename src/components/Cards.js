import React from 'react';

export default function Cards(props) {

    return (
        <div id={props.id} style={props.style} className={`cards ${props.className}`}>
            {props.children}
        </div>
    );

}