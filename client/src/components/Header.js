import React from 'react';
import {ButtonComponent} from './Button';
import './Header.css';
import '../App.css'


function Header() {
    return (
        <div className='header-container'>

            <h1>Welcome!</h1>
         
            <div className="header-btns">
                <ButtonComponent className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Log in</ButtonComponent>
            </div>
        </div>
    )
}

export default Header;
