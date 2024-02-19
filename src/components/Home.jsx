import React from 'react';
import homepic from '../assets/images/landingPage.png';
import homepic2 from '../assets/images/homepic2.png';

const Home = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='relative'>
                <img className='lg:h-[40rem] h-96 relative inset-0' src={homepic2} alt="" />
                <div className='flex flex-col lg:mt-40  absolute inset-0'>
                    <h1 className='font-bold text-5xl'>Your Dream Home</h1>
                    <h1 className='font-bold text-5xl'>Awaits</h1>
                    <h3 className=''> <span className='font-bold'>Poperty Selling</span> is very easy with mynest.tech. Get all type of 
property related selling solutions in one platform.</h3>
                    <button className='inset-0 flex  bg-black w-[10rem] mt-72 lg:mt-36 text-white absolute hover:bg-white hover:text-black btn font-bold items-center hover:bg-gray-400'>Get Started Now!</button>
                </div>
                
            </div>
            <img className='lg:h-[40rem] h-96' src={homepic} alt="" />
        </div>
    );
};

export default Home;
