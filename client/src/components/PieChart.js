import React from 'react';
import {Pie} from 'react-chartjs-2'

const PieChart = () => {
    return (
        

        <Pie
            data={{
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
                datasets:[{
                    label: "Type of symptoms",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'],
                },
                ]
            }}
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


    )
}

export default PieChart;