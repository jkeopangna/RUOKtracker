import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import {Jumbotron, Button, Form, Row, Col} from 'react-bootstrap';



export default function UserPage () {
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
                                Enter Symptom 
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" placeholder="Symptom" />
                                </Col>
                            </Form.Group>

                            <fieldset>
                                <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={6}>
                                    On a scale of 1-10, how severe is the symptom?
                                </Form.Label>
                                <Col className="severity" sm={8}>
                                    <Form.Check
                                    type="radio"
                                    label="1"
                                    name="symptomRadios"
                                    id="symptomRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="2"
                                    name="symptomRadios"
                                    id="symptomRadios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="3"
                                    name="symptomRadios"
                                    id="symptomRadios3"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="4"
                                    name="symptomRadios"
                                    id="symptomRadios4"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="5"
                                    name="symptomRadios"
                                    id="symptomRadios5"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="6"
                                    name="symptomRadios"
                                    id="symptomRadios6"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="7"
                                    name="symptomRadios"
                                    id="symptomRadios7"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="8"
                                    name="symptomRadios"
                                    id="symptomRadios8"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="9"
                                    name="symptomRadios"
                                    id="symptomRadios9"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="10"
                                    name="symptomRadios"
                                    id="symptomRadios10"
                                    />
                                </Col>
                                </Form.Group>
                            </fieldset>

                            <Form.Group as={Row} controlId="symptomsInfo">
                                <Form.Label column sm={4}>
                                Please enter any additional information you would like to save about the symptom
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="input" placeholder="Enter info here" />
                                </Col>
                            </Form.Group>
                    <Button variant="secondary" bsSize="small" onClick={() => window.location.pathname="/viewcharts"}>Log Symptoms</Button>
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

