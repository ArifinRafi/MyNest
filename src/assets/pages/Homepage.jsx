import React from 'react';
import Home from '../../components/Home';
import { NavbarSimple } from '../../components/NewNavbar';
import Services from './Services';
import Searchbar from '../../components/Searchbar';

const Homepage = () => {
        return (
        <div className="max-w-screen-2xl mx-auto">
                <NavbarSimple></NavbarSimple>
                <Home></Home>
                <Services></Services>
                <Searchbar></Searchbar>
      
    </div>
        );
};

export default Homepage;