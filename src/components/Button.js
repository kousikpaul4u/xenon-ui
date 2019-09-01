import React, { useEffect, useState } from 'react';

export default function Cards(props) {

    const [className, setClassName] = useState('');

    useEffect(() => {
        if(props.className) {
            setClassName(props.className);
        }
    }, [props.className]);

    return (
        <div id={props.id} style={props.style} className={`cards ${className}`}>
            {props.children}
        </div>
    );

}