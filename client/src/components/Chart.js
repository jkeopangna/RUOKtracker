import React from 'react';
import api from '../utils/API';
import { useEffect, useState } from 'react';
import { Line, Bar, Pie} from 'react-chartjs-2';
import {Container, Button} from 'react-bootstrap';
import Footer from './Footer';
import '../App.css';


//NEED TO FIND A WAY TO RENDER BY USER
// import { response } from 'express';

export default function Chart() {
    const [dataChart, createDataChart] = useState({});
    // create a variable for the user ID

    // axios.get("/user/charts" , uservar)
    useEffect(() => {
        const fetchData = async () => {
            let bodypain = [];
            let fatigue =[];
            let nausea = [];
            let date =[];
            let dataObj= [];
            let user= [];
            
            await 
            // db.Symptoms.findOne()
            api.getSymptoms('/api/viewcharts')
            // console.log(result)
            .then (response => {
                for(let dataObj of response.data) {
                  // dataObj.push(response.data)

                    console.log(response)
                    // bodypain.push(dataObj.symptoms[0].BodyPain);
                    // fatigue.push(dataObj.symptoms[0].Fatigue);
                    // nausea.push(dataObj.symptoms[0].Nausea);
                    // date.push(dataObj.date);
                    user.push(dataObj.user)
                    user.push(dataObj.symptoms)
                    bodypain.push(dataObj.symptoms[0].BodyPain)
                    // user.push(dataObj._id)
                }
                console.log(user);
                // console.log(date);
                // console.log(bodypain);
                // console.log(severity);
            });
          createDataChart({
              labels: [
                //   date,
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
  
          <Bar data={dataChart}
          height={300}
          width={500}
          options={{
              maintainAspectRatio: false,
              scales: {
                //   xAxes: [{
                //       type: 'time',
                //       time: {
                //           displayFormats: {
                //               week:
                //           }
                //       }
                //   }],
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
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