// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
// import WelcomeMessage from './components/WelcomeMessage';
// import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import StorePage from './components/StorePage';
import CStorePage from './components/CStorePage';
import AStorePage from './components/AStorePage';
import About from './components/About';
import ContactUs from './components/ContactUs';
// import { CartProvider } from './CartContext';
// const LoginPage = () => <div>Login Page</div>; // Create Login, Register, Store, and Contact components
// const RegisterPage = () => <div>Register Page</div>;
// const StorePage = () => <div>Store Page</div>;
// const ContactPage = () => <div>Contact Page</div>;

function App() {
  return (
    
      <div className="App">
       
      <NavBar/>
      {/* <CartProvider> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/store" element={<StorePage/>} />
      <Route path="/cstore" element={<CStorePage/>} />
      <Route path="/astore" element={<AStorePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/contact" element={<ContactUs/>} />
       
        </Routes>
        {/* </CartProvider> */}
        <Footer/>
      </div>
    
  );
}

export default App;
