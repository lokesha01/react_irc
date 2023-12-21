
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
      category: 'Christmas',
      name: 'Christmas themed Floral Gift Box',
      description: 'Personalise the Christmas Gift Box with different themes',
      price: 29.99,
      imageUrl: 'christmas-floral-gift-box_3.webp',
    },
    // ... (other gift items)
    {
      id: 2,
      category: 'Christmas',
      name: 'Christmas themed Savings Trunk Box',
      description: 'Customise Savings Trunk with various themes and colors',
      price: 39.99,
      imageUrl: 'merry-savings-trunk-box-blue_2.webp',
    },
    {
      id: 3,
      category: 'Christmas',
      name: 'Customisable Christmas Combos',
      description: 'Add and remove items in the Christmas Combo Gift and make it special',
      price: 39.99,
      imageUrl: 'personalised-indulgence-christmas-combo_4.webp',
    },
    {
      id: 4,
      category: 'Christmas',
      name: 'Christmas Candles',
      description: 'Still using wax candles for this Christmas,Try something New!',
      price: 39.99,
      imageUrl: 'yuletide-zest-christmas-candle_2.webp',
    },
    {
      id: 5,
      category: 'Christmas',
      name: 'Christmas Cake',
      description: 'Customisable cakes with different Christmas Themes',
      price: 39.99,
      imageUrl: 'christmas-love-cake-half-kg_3.webp',
    },
    {
      id: 6,
      category: 'Christmas',
      name: 'LED Cushion',
      description: 'LED Cushion with Wordings',
      price: 39.99,
      imageUrl: 'merry-christmas-led-cushion-hand-delivery_2.webp',
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
        {displayGiftItemsByCategory('Christmas')}
        {/* {displayGiftItemsByCategory('Anniversary')}
        {displayGiftItemsByCategory('Flowers')} */}
        {/* Add more categories as needed */}
      </Container>
      <Footer/>
    </div>
  );
};

export default StorePage;