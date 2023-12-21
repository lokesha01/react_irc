
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
      id: 1,
      category: 'Birthdays',
      name: 'Opulent Chocolate Bouquet',
      description: 'Description for Gift 1',
      price: 29.99,
      imageUrl: 'opulent-chocolate-affair_2.webp',
    },
    // ... (other gift items)
    {
      id: 2,
      category: 'Birthdays',
      name: 'Personalized LED Temparature bottles',
      description: 'Description for Gift 2',
      price: 39.99,
      imageUrl: 'bottles.webp',
    },
    {
      id: 3,
      category: 'Birthdays',
      name: 'Personalized Wall Clock',
      description: 'Description for Gift 2',
      price: 39.99,
      imageUrl: 'personalised-memories-wall-clock_1.webp',
    },
    {
      id: 4,
      category: 'Birthdays',
      name: 'Personalised Night Lamp',
      description: 'Description for Gift 2',
      price: 39.99,
      imageUrl: 'personalised-moon-stars-night-lamp_2.webp',
    },
    {
      id: 5,
      category: 'Birthdays',
      name: 'Personalised Caricature',
      description: 'Description for Gift 2',
      price: 39.99,
      imageUrl: 'personalised-queen-caricature_2.webp',
    },
    {
      id: 6,
      category: 'Birthdays',
      name: 'Personalized Floral Vase',
      description: 'Description for Gift 2',
      price: 39.99,
      imageUrl: 'scintillatingfloralmixvase.webp',
    },
    // {
    //   id: 7,
    //   category: 'Anniversary',
    //   name: 'Personalised NamePlates',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'name-plate.webp',
    // },
   
    // {
    //   id: 8,
    //   category: 'Anniversary',
    //   name: 'Personalized LED Wall Hangings',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'led-wall-hanging.webp',
    // },
    // {
    //   id: 9,
    //   category: 'Anniversary',
    //   name: 'Personalized Neon-lights with wordings',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'neon_light.webp',
    // },
    // {
    //   id: 10,
    //   category: 'Flowers',
    //   name: 'Personalised Rose bouquet',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'joyful-personalised-rose-bouquet_2.webp',
    // },
   
    // {
    //   id: 11,
    //   category: 'Flowers',
    //   name: 'Personalized Floral box',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'sweet-symphony-birthday-floral-box_1.webp',
    // },
    // {
    //   id: 12,
    //   category: 'Flowers',
    //   name: 'Elegant Red Rose Bouquet',
    //   description: 'Description for Gift 2',
    //   price: 39.99,
    //   imageUrl: 'joyful-personalised-rose-bouquet_2.webp',
    // },
   
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
        {displayGiftItemsByCategory('Birthdays')}
        {/* {displayGiftItemsByCategory('Anniversary')}
        {displayGiftItemsByCategory('Flowers')} */}
        {/* Add more categories as needed */}
      </Container>
      <Footer/>
    </div>
  );
};

export default StorePage;