import React from 'react';
import property1 from '../assets/images/property.png'
import bedroom from '../assets/logos/bedroom.png';
import washroom from '../assets/logos/washroom.png';
import size from '../assets/logos/size.png';

const Property = () => {
        return (
                <div className='w-72 my-4 bg-gray-200'>
                        <div className='p-2'>
                        <img className='' src={property1} alt="" />
                        <h2 className='text-2xl font-semibold'>BDT. 10000000</h2>
                        <p className='text-sm'>Sector-7, Road-11, Uttara, Dhaka</p>
                        <p className='text-sm text-yellow-900'>Flat</p>
                        <div className='flex justify-around'>
                          <div>
                          <img src={bedroom} alt="" />
                          <p className='text-sm'>4 Bedroom</p>
                          </div>

                          <div>
                          <img src={washroom} alt="" />
                          <p className='text-sm mt-1'>3 Washroom</p>
                          </div>

                          <div>
                          <img src={size} alt="" />
                          <p className='text-sm'>Uttara, Dhaka</p>
                          </div>

                        </div>
                        <div className='flex justify-center'>
                                <button className='btn btn-primary border-none text-white hover:bg-gray-400 hover:text-black bg-black'>View Details</button>
                        </div>
                        </div>
                </div>
        );
};

export default Property;