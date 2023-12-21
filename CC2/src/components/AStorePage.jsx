
import React from 'react';
import { Container, Grid, Typography, Button,Paper } from '@mui/material';
import NavBar from './NavBar';
import Footer from './Footer';
// import { useCart } from './CartContext';

const GiftItem = ({ name, description, price, imageUrl }) => {
  // const { addToCart } = useCart(); // Use the addToCart function from the cart context

  // const handleAddToCart = () => {
  //   addToCart({ id, name, price, imageUrl }); // Add the item to the cart
  // };
  return (
    <Grid item xs={12} sm={6} md={4}>
     <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', marginBottom: '10px' }}>
        <img src={imageUrl} alt={name} style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '10px' }} />
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${price}
        </Typography>
        <Button variant="outlined" color="primary" href="/product-details">
          View Details
        </Button>
        {/* <Button variant="outlined" color="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button> */}
        </Paper>
    </Grid>
  );
};

const StorePage = () => {
  // const { cartItems } = useCart();
  const giftItems = [
   
    {
      id: 7,
      category: 'Anniversary',
      name: 'NamePlates',
      description: 'Personalise the nameplate according to your preferrences',
      price: 39.99,
      imageUrl: 'name-plate.webp',
    },
   
    {
      id: 8,
      category: 'Anniversary',
      name: ' LED Wall Hangings',
      description: 'Personalised LED wall hanging that adds an additional glow ',
      price: 39.99,
      imageUrl: 'led-wall-hanging.webp',
    },
    {
      id: 9,
      category: 'Anniversary',
      name: 'Personalized Neon-lights',
      description: 'Personalised neon lights along with your name ',
      price: 39.99,
      imageUrl: 'neon_light.webp',
    },
    {
      id: 10,
      category: 'Anniversary',
      name: 'Personalised Rose bouquet',
      description: 'Roses add more love',
      price: 39.99,
      imageUrl: 'joyful-personalised-rose-bouquet_2.webp',
    },
   
    {
      id: 11,
      category: 'Anniversary',
      name: 'Personalised paintings',
      description: 'Desi couple painting that are personalisable',
      price: 39.99,
      imageUrl: 'desi-couple-framed-paintings_2.webp',
    },
    {
      id: 12,
      category: 'Anniversary',
      name: 'Resin Necklace',
      description: 'Save a piece of ur memory in resin that is saved for life',
      price: 39.99,
      imageUrl: 'serene-voyage-resin-necklace_1.webp',
    },
   
  ];

  const displayGiftItemsByCategory = (category) => {
    const filteredGifts = giftItems.filter((gift) => gift.category === category);
    return (
      <>
        <Typography variant="h4" gutterBottom>
          {category}
        </Typography>
        <Grid container spacing={2}>
          {filteredGifts.map((gift) => (
            <GiftItem key={gift.id} {...gift} />
          ))}
        </Grid>
      </>
    );
  };

  return (
    <div style={{ background: 'url("bgimg.png") center/cover no-repeat', minHeight: '100vh',marginTop:'20%' }}>
     <NavBar/>
      <Container maxWidth="md" style={{ paddingTop: '20px', color: '#fff' }}>
        {displayGiftItemsByCategory('Anniversary')}
        {/* {displayGiftItemsByCategory('Anniversary')}
        {displayGiftItemsByCategory('Flowers')} */}
        {/* Add more categories as needed */}
      </Container>
      <Footer/>
    </div>
  );
};

export default StorePage;