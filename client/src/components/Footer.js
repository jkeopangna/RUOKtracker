import React from 'react';
import {Button} from '../components/Button';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {


    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Contact Info
                </p>
                <p className="footer-subscription-text">
                    Subscribe for health newsletters!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">Subscribe!</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link></Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>More Info </h2>
                        {/* <Link to="/clinics" className="nav-links" onClick={closeMobileMenu}>
                            Log-in
                        </Link> */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
