import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import PieChart from '../PieChart';
import { Container, Button } from 'react-bootstrap';




export default function ViewCharts () {

    //write logic to control which chart is viewed based on user selection

    // API.Chart.fetchData();

    return (
        <>
    

      <Container fluid className="chartcontainer">
      <h3>View Symptoms</h3>

        <PieChart />

      <Button className="chartbtnH" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/"}>Home</Button>
      <Button className="chartbtnS" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/userpage"}>Back to New Symptom</Button>
      </Container>

        <Footer />
   
        </>
        )
    };

