import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import LineChart from '../LineChart';
import { Container } from 'react-bootstrap';



export default function ViewCharts () {

    //write logic to control which chart is viewed based on user selection

    return (
        <>
    

      <h3>View Symptoms</h3>
      <Container fluid className="chartcontainer">

        <LineChart />

      </Container>


        <Footer />
   
        </>
        )
    };

