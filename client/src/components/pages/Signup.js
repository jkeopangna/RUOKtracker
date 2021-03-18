import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import NewUserComponent from '../NewUser';



export default function NewUser () {
    return (
        <>

        <div className="signup">
            <h1>Sign-up as a new user</h1>
            <hr></hr>

        <NewUserComponent />
        
        <div className="imagesignup">

        <img src="./images/journal.jpg" alt="signing in" className='signupimg'></img>
        </div>
        </div>
        <Footer />
   
        </>
        )
    };


    