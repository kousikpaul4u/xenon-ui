import React from 'react';
import Cards from '../components/Cards.js'
import Input from '../components/Input.js';

export default function Login(props) {

    const childrenComponent = <div>
        <div style={{ width: '100%', height: '50px' }}>
            <span className="material-icons popup-close-icon">clear</span>
        </div>
        <div className="login-input">
            <Input type="text" placeholder="Mobile Number" />
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
        </div>
    </div>;
    
    return (
        <div className="container login-div" >
            <Cards children={childrenComponent}/>
        </div>
    );

}