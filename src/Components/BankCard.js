import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const BankCard = ({ bank }) => {
  return (
    <Card style={{ margin: '10px', minWidth: '250px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {bank.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bank.details}
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default BankCard;