import React from 'react';
import {Button} from './Button';
import './Header.css';
import '../App.css'


function Header() {
    return (
        <div className='header-container'>

            <h1>Welcome!</h1>
         
            <div className="header-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Log in</Button>
            </div>
        </div>
    )
}

export default Header;
