import React from 'react';
import Header from './Components/Header';
import WelcomeMessage from './Components/WelcomeMessage';
import FDPortfolio from './Components/FDPortfolio';
import MaturityTimeline from './Components/MaturityTimeline';
import BankCard from './Components/BankCard';
import { Container, Grid } from '@mui/material';

const App = () => {
  const banks = [
    { name: 'Utkarsh Small Finance Bank', details: 'Highest Interest Rate\nRBI Insured\nInterest Up to 9.10% p.a' },
    { name: 'Bajaj Finserv', details: 'Crisil AAA Rated\nNo Video KYC required\nInterest Up to 8.80% p.a' },
    { name: 'Video KYC', details: 'Scheduled On: 28 Oct, 2023\nUtkarsh SF Bank FD Plan 2\nDeposit Amt: Rs. 20,000\nTenure: 2 Years\nInterest Rate: 9.10%' },
    { name: 'Shriram Finance', details: 'Details for Shriram Finance' },
    { name: 'Mahindra Finance', details: 'Details for Mahindra Finance' }
  ];

  return (
    <div>
      <Header />
      <Container>
        <WelcomeMessage />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FDPortfolio />
          </Grid>
          <Grid item xs={12} md={6}>
            <MaturityTimeline />
          </Grid>
          {banks.map((bank, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BankCard bank={bank} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;