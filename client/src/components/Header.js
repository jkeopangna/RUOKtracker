import React from 'react';
import {ButtonComponent} from './Button';
import './Header.css';
import '../App.css';



function Header() {
    return (
        <div className='header-container'>
            <h1>Welcome!</h1>
            <video src="./videos/ruok.mp4" autoPlay muted />
         
            <div className="header-btns">
                <ButtonComponent className="btns"></ButtonComponent>
            </div>
        </div>
    )
}

export default Header;
