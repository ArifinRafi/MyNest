import React from 'react';
import Home from '../components/Home';
import { NavbarSimple } from '../components/NewNavbar';
import Services from '../pages/Services';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Property from '../components/Property';
import RecommendedProps from './RecommendedProps';
import PropertyDetails from './PropertyDetails';

const Homepage = () => {
        return (
        <div className="max-w-screen-2xl mx-auto">
                <Home></Home>
                <Services></Services>
                <Searchbar></Searchbar>
                {/* <RecommendedProps></RecommendedProps> */}
                <Contact></Contact>
                
    </div>
        );
};

export default Homepage;