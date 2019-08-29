import React from 'react';
import Cards from '../components/Cards.js'

export default function Login(props) {

    const childrenComponent = <div>
        <div style={{ width: '100%', height: '50px' }}>
            <span className="material-icons popup-close-icon">clear</span>
        </div>
        <div className="login-input">
            <input type="text" placeholder="Mobile Number" className="input" />
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
        </div>
    </div>;
    
    return (
        <div className="login-div" >
            <Cards children={childrenComponent}/>
        </div>
    );

}