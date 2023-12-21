import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
// GiftItem component to display individual gift items
const GiftItem = ({ name, description, price, imageUrl }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '20px' }} />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {description}
        </Typography>
        {/* <Typography variant="h6" color="primary">
          ${price}
        </Typography> */}
        <Button variant="outlined" color="primary" href='/store'>
          View Details
          
        </Button>
      </Paper>
    </Grid>
  );
};

const StorePage = () => {
  // Sample gift items data (replace with your actual data)
  const giftItems = [
    {
      id: 1,
      name: 'Christmas',
      category:'Christmas',
      description: 'Jingle of the Gifts!,Merry Chritmas!,CHRISTMAS = GIFT',
      // price: 29.99,
      imageUrl: 'christmas.webp', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Birthdays',
      category: 'birthdays',
      description: 'Days becomes birthdays with Gifts!!,Try Gifting yourself',
      // price: 39.99,
      imageUrl: 'birthdays.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Anniversaries',
      category: 'anniversaries',
      description: 'Add memories to the memorable days of your life with Gifts! ',
      // price: 39.99,
      imageUrl: 'anniversary.jpg', // Replace with actual image URL
    },
    
    // Add more gift items as needed
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#f0f0f0', fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Explore our range of personalised gifts for every occasion
      </Typography>
      <Grid container spacing={2}>
        {giftItems.map((gift) => (
          <GiftItem key={gift.id} {...gift} />
        ))}
      </Grid>
    </Container>
  );
};

export default StorePage;
