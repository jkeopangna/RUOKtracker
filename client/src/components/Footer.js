import React from 'react';
import {ButtonComponent} from '../components/Button';
import './Footer.css';
import {Button} from 'react-bootstrap';

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
                        <ButtonComponent buttonStyle="btn--outline">Subscribe!</ButtonComponent>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Social Media</h3>
                        <div className="socialbtns">
                            <i class="fab fa-twitter fa-2x"></i> 
                            <i class="fab fa-facebook fa-2x"></i>
                            <i class="fab fa-instagram fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h3>Additional Information </h3>
                        <Button variant="secondary" bsSize="xssmall" onClick={() => window.location.pathname="/clinics"}>Find a Clinic</Button>
                        <Button className="resourcesbtn" variant="secondary" bsSize="xssmall"  onClick={()=> window.location.pathname="/resources"}>Resources</Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
