import React from 'react';
import '../App.css';
import { Bar } from 'react-chartjs-2';
import * as ReactBootStrap from 'react-bootstrap';
function DataProcessed(props){
    console.log(props);
    let data = {
        labels: ['1', '2', '3', '4', '5+'],
        datasets:[
            {
                label: 'Number of orders per person',
                data:[
                    props.numbers1,
                    props.numbers2,
                    props.numbers3,
                    props.numbers4,
                    props.numbers5,
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ]
            }
        ]
    };
    
    return (
        <div>
            <div>
                <h3>How many orders did the site receive?</h3>
                <h4>{props.ordersRecieved}</h4>
            </div>
            <div>
                <h3>What was the total amount of the orders?</h3>
                <h4>{props.totalAmountOfOrders}</h4>
            </div>
            <div>
                <h3>List the names of the customers who ordered once and did not order again.</h3>
                <ul>
                    {props.singleOrderNames.map(item => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
            <div>
                <h3>Get a distribution of customers who ordered exactly once, exactly twice, and so on up to 4 orders and group the rest as 5 orders and above.</h3>
                <table id='table'>
                    <thead>
                        <tr>
                        <th colSpan="2">Number of orders</th>
                        <th colSpan="2">Count of customers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="2">1</td>
                            <td colSpan="2">{props.numbers1}</td>          
                        </tr>
                        <tr>
                            <td colSpan="2">2</td>
                            <td colSpan="2">{props.numbers2}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">3</td>
                            <td colSpan="2">{props.numbers3}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">4</td>
                            <td colSpan="2">{props.numbers4}</td>
                        </tr>
                        <tr>
                            <td colSpan="2">5+</td>
                            <td colSpan="2">{props.numbers5}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='graph'>
                <Bar 
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Number of customers',
                                    fontSize: 20,
                                },
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 20,
                                }
                            }],
                            xAxes: [{
                                barPercentage: 0.4,
                                scaleLabel:{
                                    display: true,
                                    labelString: 'Number of orders per customer',
                                    fontSize: 20,
                                },
                                ticks: {
                                    fontSize: 20,
                                }

                            }]
                        },
                        title:{
                          display:true,
                          text:'Number of orders distribution',
                          fontSize:25
                        },
                        legend:{
                          display:false,
                        }
                      }}
                /></div>
            </div>
        </div>
    );
}

export default DataProcessed;