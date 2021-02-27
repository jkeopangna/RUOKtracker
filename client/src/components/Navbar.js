import React, {useState, useEffect} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Button} from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);


    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    {/* <img src=""></img> */}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
                    <li className="nav-item">
                        <Link to="/clinics" className="nav-link-clinic" onClick={closeMobileMenu}>
                            Find a Clinic
                        </Link>
                    </li>
            </div>
        </nav>

        </>
    )



}

export default Navbar;