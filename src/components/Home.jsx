import React from 'react';
import homepic from '../assets/images/landingPage.png'
import homepic2 from '../assets/images/homepic2.png'

const Home = () => {
        return (
                <div className='grid grid-cols-2'>
                <div className=''>
                <img className='h-[40rem] relative inset-0 h-[40rem]  ' src={homepic2} alt="" />
                <h1 className='absolute inset-0 mt-[300px] mr-[45rem] font-bold  items-center  text-5xl'>Your Dream Home</h1>
                <h1 className='absolute inset-0 mt-[340px] mr-[61rem] font-bold items-center  text-5xl'>Awaits</h1>
                <button className=' inset-0 bg-black w-[10rem] mt-[26rem] ml-[24rem] text-white absolute hover:bg-white hover:text-black btn mr-[61rem] font-bold items-center hover:bg-gray-400 '>Get Started Now!</button>
                </div>
                <img src={homepic} alt="" />
                </div>
        );
};

export default Home;