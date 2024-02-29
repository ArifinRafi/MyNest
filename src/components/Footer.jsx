import React from 'react';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
        return (
                <div className='bg-black flex max-w-screen-2xl mx-auto flex-col justify-center items-center'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 h-96 '>
                   <div className='flex'>
                   <div className='bg-white flex mt-12 ml-12 justify-center items-center p-2 rounded-full w-24 h-24'>
                        <img src={logo}  className='w-12 h-12' alt="" />
                        </div> 
                        <h2 className='text-white mt-20 ml-4 text-2xl'>MyNest</h2>   
                        </div> 

                        <div className='grid lg:grid-cols-5 lg:grid-cols-1 mt-20  text-white  font-bold justify-items-center'>
                                <Link className='text-sm w-32'>Terms & Condition</Link>
                                <Link className='text-sm w-32 ml-4'>Privacy & Policy</Link>
                                <Link className='text-sm'>Blogs</Link>
                                <Link className='text-sm'>About Us</Link>
                                <Link className='text-sm'>Team</Link>

                        </div>
                </div>
                <p className='text-white'>All rights reserved by MynestTech 2024</p>
                </div>
        );
};

export default Footer;