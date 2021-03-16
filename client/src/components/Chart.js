import React from 'react';
import api from '../utils/API';
import { useEffect, useState } from 'react';
import { Line, Bar, Pie} from 'react-chartjs-2';
import {Container, Button} from 'react-bootstrap';
import Footer from './Footer';
import '../App.css';
import API from '../utils/API';


//NEED TO FIND A WAY TO RENDER BY USER
// import { response } from 'express';

export default function Chart() {
    const [dataChart, createDataChart] = useState({});
    // create a variable for the user ID
    

    useEffect(() => {
      const fetchData = async () => {
        let bodypain = [];
        let fatigue =[];
        let nausea = [];
        let date =[];
        let dataObj= [];
        let user= [];
        // let userId=[];
        
        const logData = () => {
          let data = sessionStorage.getItem('userId')
          console.log(data)
          API.findAll({userId: data})
            .then(res => {

              console.log(res)
            
            for(let dataObj of res.data) {
              console.log(dataObj)
              bodypain.push(dataObj.symptoms[0].BodyPain)
              fatigue.push(dataObj.symptoms[0].Fatigue)
              nausea.push(dataObj.symptoms[0].Nausea)
            }})
            console.log(bodypain)
            console.log(fatigue)
            console.log(nausea)
        }
        
        await 
        // db.Symptoms.findOne()
        logData()
            // api.getSymptoms('/api/user/chart')
            // .then (response => {
            //   // console.log(userId)
            //   console.log(response)
            //     // for(let dataObj of response.data) {
               
            // //         // bodypain.push(dataObj.symptoms[0].BodyPain);
            // //         // fatigue.push(dataObj.symptoms[0].Fatigue);
            // //         // nausea.push(dataObj.symptoms[0].Nausea);
            // //         // date.push(dataObj.date);
            //     // }
            // });
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