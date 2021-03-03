import React from 'react';
import './Header.css';
import '../App.css';
import '../components/AboutUs.css';



function AboutComponent() {
    return (
        <>
        <div className='about-container'>
                <h1>About us</h1>
         
                <p>R.U.O.K Health Tracker is designed as a tool for anyone to keep a log of symptoms no matter how long they have been experiencing them. Symptom tracking made simple with our easy to use diary, with entries appearing automatically on charts at the touch of a button!</p>
            <div className="about-image">

                <img src="./images/healthheart.jpg"></img>

            </div>


        
        </div>
        </>
    )
}

export default AboutComponent;
