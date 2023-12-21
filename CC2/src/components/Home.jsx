import React from 'react';
import NavBar from './NavBar';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';
import FeaturedProducts from './FeaturedProducts';
import '../assets/Home.css'

function Home()
{
    return(
        <div >
            <NavBar/>
            <WelcomeMessage/>
            <FeaturedProducts/>
            <Footer/>
        </div>
    );
}
export default Home;