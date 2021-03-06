import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import {Jumbotron, Button, Form, Row, Col} from 'react-bootstrap';
import API from "../../utils/API";


export default function UserPage () {
    const [symptoms, logSymptoms] = useState([])
    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(formObject)
        API.logSymptoms({
            Nausea: formObject.Nausea,
            BodyPain: formObject.BodyPain,
            Fatigue: formObject.Fatigue
        })
        .then(console.log('Got symptoms?'))
        .then((response) => response.json())
        .catch(err => console.log(err));
    }

    // document.getElementById('nausea').value = '';
    // document.getElementById('bodypain').value = '';
    // document.getElementById('fatigue').value = '';

    return (
        <>

        <Jumbotron fluid>
        <div className="userpage">
            <div classname="useritems">
                <div className="userbtns">
                    <Row>

                        <Button className="userbtn1"variant="secondary" bsSize="small" onClick={() => window.location.pathname="/addsymptom"}>Go Back</Button>
                        <Button className="userbtn2" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/viewcharts"}>View Dashboard</Button>

                    </Row>

                </div>
            <div className="symptomForm">
                    <Row>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalSymp">
                                <Form.Label column sm={4}>
                                Nausea:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" name="Nausea" onChange={handleInputChange} nausea={formObject.Nausea} placeholder="On a scale of 1-10, how severe is the symptom?" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalSymp">
                                <Form.Label column sm={4}>
                                Body Pain:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" name="BodyPain" onChange={handleInputChange} bodypain={formObject.bodypain} placeholder="On a scale of 1-10, how severe is the symptom?" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalSymp">
                                <Form.Label column sm={4}>
                                Fatigue:
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" name="Fatigue" onChange={handleInputChange} fatigue={formObject.Fatigue} placeholder="On a scale of 1-10, how severe is the symptom?" />
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} controlId="symptomsInfo">
                                <Form.Label column sm={4}>
                                Please enter any additional information you would like to save about the symptom
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" placeholder="Enter info here" />
                                </Col>
                            </Form.Group>
                    <Button variant="secondary" bsSize="small" onClick={handleFormSubmit}>Log Symptoms</Button>
                            </Form>
                    </Row>
            </div>
            </div>

                    
                    
            </div>
        </ Jumbotron>
    
        <Footer />
   
        </>
        )
    };

