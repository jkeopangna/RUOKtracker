import React from 'react';
import api from '../utils/API';
import { useEffect, useState } from 'react';
import { Line} from 'react-chartjs-2';
import {Container, Button} from 'react-bootstrap';
import Footer from './Footer';
import '../App.css'



// import { response } from 'express';

export default function Chart() {
    const [dataChart, createDataChart] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let bodypain = [];
            let fatigue =[];
            let nausea = [];
            
            await api.getSymptoms('/api/viewcharts')
            // console.log(result)
            .then (response => {
                for(let dataObj of response.data) {
                    console.log(response)
                    bodypain.push(dataObj.symptoms[0].BodyPain);
                    fatigue.push(dataObj.symptoms[0].Fatigue);
                    nausea.push(dataObj.symptoms[0].Nausea)
                    // severity.push(dataObj.symptoms[0]);
                }
                // console.log(bodypain);
                // console.log(severity);
            });
          createDataChart({
              labels: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday'
              ],
              datasets: [{
                  label: 'Body Pain',
                  data: bodypain,
                  backgroundColor: 'rgba(255, 99, 132, 0.2)'
              },
              {
                label: 'Fatigue',
                data: fatigue,
                backgroundColor: 'rgba(54, 162, 235, 0.2)'
              },
              {
                label: 'Nausea',
                data: nausea,
                backgroundColor: 'rgba(255, 206, 86, 0.2)'
              }
            
            ]
          })
        }
        
        fetchData();
    }, []);

    return (
        <>
    

        <Container fluid className="chartcontainer">
        <h3>Dashboard</h3>
  
          <Line data={dataChart}
          height={300}
          width={500}
          options={{
              maintainAspectRatio: false,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }}
          />
  
        <Button className="chartbtnH" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/"}>Home</Button>
        <Button className="chartbtnS" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/userpage"}>Back to New Symptom</Button>
        </Container>
  
          <Footer />
     
          </>
    )





}