import React from 'react';
import house from '../images/house.png'
import photographer from '../images/Tripod.png'
import designer from '../images/graphic_designer.png'

const Services = () => {
        return (
                <div className='grid justify-items-center grid-cols-3'>
                        <div className='bg-gray-200 w-64  items-center rounded-xl h-52'>
                                <h3 className='text-xl font-bold mt-4'>Property Selling</h3>
                                <div className='flex flex-col justify-center mt-8'>
                                <div className='bg-black ml-24  flex justify-center relative inset-0 rounded-full w-16 h-16'>
                                <img className='w-12 h-12 mt-2' src={house} alt="" />
                                </div>
                                <h3 className='text-sm'>Get your dream property now in one click</h3>
                                </div> 
                                <button className='btn bg-black text-white'>View Now</button>       
                        </div>


                        <div className='bg-gray-200 w-64  items-center rounded-xl h-52'>
                                <h3 className='text-xl font-bold mt-4'>Property Photographer</h3>
                                <div className='flex flex-col justify-center mt-8'>
                                <div className='bg-black ml-24  flex justify-center relative inset-0 rounded-full w-16 h-16'>
                                <img className='w-12 h-12 mt-2' src={photographer} alt="" />
                                </div>
                                <h3 className='text-sm'>Get your dream property now in one click</h3>
                                </div> 
                                <button className='btn bg-black text-white'>View Now</button>       
                        </div>



                        <div className='bg-gray-200 w-64  items-center rounded-xl h-52'>
                                <h3 className='text-xl font-bold mt-4'>3D Designer</h3>
                                <div className='flex flex-col justify-center mt-8'>
                                <div className='bg-black ml-24  flex justify-center relative inset-0 rounded-full w-16 h-16'>
                                <img className='w-12 h-12 mt-2' src={designer} alt="" />
                                </div>
                                <h3 className='text-sm'>Get your dream property now in one click</h3>
                                </div> 
                                <button className='btn bg-black text-white'>View Now</button>       
                        </div>
                </div>
        );
};

export default Services;