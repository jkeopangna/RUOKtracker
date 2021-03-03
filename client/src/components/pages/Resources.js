import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import {ListGroup, Jumbotron, Row, Button} from 'react-bootstrap';



export default function Resources () {
    return (
        <>
    
    <Jumbotron fluid>
        <div className="resources">

            <div className="res-header">

            <h1>Resources</h1>
            <p>Checkout the links for resources about living with chronic health symptoms or other long-term needs. </p>

            </div>
        <Row>

            <ListGroup>
                <ListGroup.Item action href="https://www.chcs.org/" target="_blank">
                Center for Health Care Strategies 
                </ListGroup.Item>
                <ListGroup.Item action href="https://www.healingwell.com/#gsc.tab=0" target="_blank">
                Healing Well
                </ListGroup.Item>
                <ListGroup.Item action href="https://nationalhealthcouncil.org/" target="_blank">
                National Health Council
                </ListGroup.Item>
                <ListGroup.Item action href="https://invisibledisabilities.org/" target="_blank">
                Invisible Disabilites Association
                </ListGroup.Item>
                <ListGroup.Item action href="https://rarediseases.org/" target="_blank">
                National Organization for Rare Diseases
                </ListGroup.Item>
                <ListGroup.Item action href="https://www.psychologytoday.com/us/groups/chronic-illness" target="_blank">
                Chronic Illness Support Groups - Psychology Today
                </ListGroup.Item>
              
            <Button className="resHomebtn" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/"}>Home</Button>
            </ListGroup>

        </Row>

            
            
        </div>
    </Jumbotron>
        
    <Footer />
    </>

        )
    }
