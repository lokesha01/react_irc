// src/components/WelcomeMessage.js
import React from 'react';
import { Paper,Container, Typography, Button} from '@mui/material';
// import { Link } from 'react-router-dom';



const HomePage = () => {
 
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', border: '2px solid #ddd', 
          borderRadius: '8px',height:'200px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>
          Welcome to Innovifts!
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555', fontSize: '18px' }}>
          Explore our collection and find the perfect gifts for every occasion.
        </Typography>
       
        <Button variant="contained" color="primary" href="/store" sx={{ fontSize: '16px',marginTop:'5%'}}>
        Shop Now!
        </Button>
      </Paper>
      
    </Container>
  );
};

export default HomePage;