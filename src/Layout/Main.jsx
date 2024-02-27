import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarSimple } from '../components/NewNavbar';
import Footer from '../components/Footer';

const Main = () => {
        return (
                <div>
                  <NavbarSimple></NavbarSimple>
                  <Outlet></Outlet>
                  <Footer></Footer>      
                </div>
        );
};

export default Main;