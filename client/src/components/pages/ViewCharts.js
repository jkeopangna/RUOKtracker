import React from 'react'
import '../../App.css';
import Footer from '../Footer';
import PieChart from '../PieChart';
import { Container } from 'react-bootstrap';



export default function ViewCharts () {

    //write logic to control which chart is viewed based on user selection

    return (
        <>
    

      <h3>View Symptoms</h3>
      <Container fluid className="chartcontainer">

        <PieChart />

      </Container>


        <Footer />
   
        </>
        )
    };

