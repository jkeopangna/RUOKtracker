import React from 'react';
import { useEffect, useState } from 'react';
import { Line, Bar} from 'react-chartjs-2';
import {Container, Button} from 'react-bootstrap';
import Footer from './Footer';
import '../App.css';
import API from '../utils/API';



export default function Chart() {
    const [dataChart, createDataChart] = useState({});
    const [num, setNum] = useState(0)
    useEffect(() => {
      const fetchData = async () => {
        let bodypain = [];
        let fatigue =[];
        let nausea = [];
        let date =[];

        
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
              date.push(dataObj.date)
            }})
            console.log(bodypain)
            console.log(fatigue)
            console.log(nausea)
            console.log(date)
          }
          const newDate = new Date("2021-03-17T21:29:46.780Z");
          const year = newDate.getFullYear();
          console.log(year);
          const month = newDate.getMonth()+1;
          console.log(month)
         
          const label = (month) + "-" + (year);
          console.log(label)
        
        await 
        logData()

       
          createDataChart({
            
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
        setNum(num+1);
    }, []);

    useEffect (() => {
      window.resizeTo(window.innerWidth - 2, window.innerHeight - 2)
    }, [dataChart])
  
    return (
        <>
    
        <Container fluid className="chartcontainer">
        <h3>Dashboard</h3>
   
        <div className="barDiv">
        {dataChart.datasets && dataChart.datasets.length &&
          <Bar data={dataChart}
          height={300}
          width={500}
          options={{
              maintainAspectRatio: false,
              scales: {
                xAxes:[{
                  scaleLabel:{
                    display: true,
                    labelString: 'Symptoms'
                  }
                }],
                  yAxes: [{
                    scaleLabel:{
                      display: true,
                      labelString: 'Severity'
                    },
                      ticks: {
                          beginAtZero: true,
                      }
                  }]
              }
          }}
/>
}
        </div>

        <div className="lineDiv">

          <Line data={dataChart}
          height={300}
          width={500}
          options={{
              maintainAspectRatio: false,
              scales: {
                xAxes:[{
                  scaleLabel:{
                    display: true,
                    labelString: 'Symptoms'
                  }
                }],
                  yAxes: [{
                    scaleLabel:{
                      display: true,
                      labelString: 'Severity'
                    },
                      ticks: {
                          beginAtZero: true,
                      }
                  }]
              }
          }}
          />
          
        </div>

        
  
        <Button className="chartbtnH" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/"}>Home</Button>
        <Button className="chartbtnS" variant="secondary" bsSize="small" onClick={() => window.location.pathname="/userpage"}>Back to New Symptom</Button>
        </Container>
  
          <Footer />
     
          </>
    )





}