import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import {Jumbotron, Button, Form, Row, Col} from 'react-bootstrap';
import '../../App.css';
import CreateForm from "../SymptomsForm/Symptoms";

export default function Symptoms() {
    return (
        <>

        <Jumbotron fluid>
        <div className="userpage">
            <div classname="useritems">
                <div className="userbtns">
                    <CreateForm />
                 </div>
          </div> 
        </div>
        </ Jumbotron>
    
        <Footer />
   
        </>
        )
    };