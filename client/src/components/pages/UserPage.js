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

                        <Button variant="secondary" bsSize="small" onClick={() => window.location.pathname="/addsymptom"}>Log Symptoms</Button>
                        <Button variant="secondary" bsSize="small" onClick={() => window.location.pathname="/viewcharts"}>View Previous Entries</Button>

                    </Row>

                </div>
            <div className="symptomForm">
                    <Row>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                Email
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                Password
                                </Form.Label>
                                <Col sm={10}>
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Radios
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="first radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="second radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="third radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                </Col>
                                </Form.Group>
                            </fieldset>
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

