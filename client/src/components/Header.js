import React from 'react';
import {ButtonComponent} from './Button';
import './Header.css';
import '../App.css';



function Header() {
    return (
        <>
        <div className='header-container'>
            <h1>Welcome to Your Health Tracker!</h1>
        </div>
        <div className='video-container'>
            <video className="video" src="./videos/ruok.mp4" autoPlay muted />
        </div>
        <div>
            <div className="header-btns">
                <ButtonComponent className="btns"></ButtonComponent>
            </div>
        </div>
        </>
    )
}

export default Header;
