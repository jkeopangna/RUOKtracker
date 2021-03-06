import React from 'react';
import api from '../utils/API';
import { useEffect, useState } from 'react';
// import { Line, Pie, Bar } from 'react-chartjs-2';
// import { response } from 'express';

export default function ChartTest() {
    const [dataChart, setDataChrt] = useState({});

    const fetchData = async () => {
        const res = await api.getSymptoms('/api/viewcharts')
        console.log(res)
        // .then (res => {
        //     console.log(res)
        //     // for (let dataObj of res.data) {
        //     //     console.log(dataObj)
        //     // }
        // })
    }
    useEffect( () => {
        fetchData();
    }, []);

    return (
        <div>

        </div>
    )





}