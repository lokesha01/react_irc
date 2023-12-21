import React from 'react';
import '../assets/About.css'; 
import NavBar from './NavBar';
import Footer from './Footer';
import { Container ,Typography,Paper} from '@mui/material';

function About(){
  return (
   <div> 
     <NavBar/>
    <div className="about-container">
      <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' ,width:'150%'}}>
        <Typography variant="body1">
      <h1>Innovifts!</h1>
      <h3>
        Welcome to Innovifts- A Personalised gift store
      </h3>
      <h2>Crafting Memories, Creating Joy</h2>
      <h3>
      We believe that every gift tells a story.
      </h3>
      <h3>

       We believe that the best gifts are the ones that reflect the personality and sentiments of both the giver and the recipient. That's why we curate a diverse collection of customizable products, each designed to bring joy and warmth to every occasion.
     

      </h3>
      <h3>
      Join Us in Celebrating Life's Moments.
      Thank you for choosing Innovifts for your personalized gifting needs. Whether you're celebrating birthdays, weddings, or simply expressing love, we're honored to be a part of your special moments.
      </h3>
      <h4>
      Feel free to reach out to us at innoviftsgifts@gmail.com , if you have any questions or if there's anything we can assist you with.</h4>
      
      {/* Add more content as needed */}
      </Typography>
      </Paper>
      </Container>
    </div>
    <Footer/>

    </div>

  );
};

export default About;