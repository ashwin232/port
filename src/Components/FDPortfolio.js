import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FDPortfolio = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
    datasets: [
      {
        data: [25, 25, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6347'],
      },
    ],
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '300px', margin: '20px' }}>
      <h3>Your FD Portfolio</h3>
      <Pie ref={chartRef} data={data} />
    </div>
  );
};

export default FDPortfolio;