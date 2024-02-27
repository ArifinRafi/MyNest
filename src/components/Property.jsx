import React from 'react';
import property1 from '../assets/images/property.png'

const Property = () => {
        return (
                <div className='w-64 bg-gray-200'>
                        <img src={property1} alt="" />
                        <h2 className='text-2xl font-semibold'>BDT. 10000000</h2>
                        <div className='grid grid-cols-3'>
                          <p>hello</p>
                          <p>hello</p>
                          <p>hello</p>
                        
                        <div className='grid grid-cols-2'>
                                <button className='btn bg-black text-white w-32 rounded-2xl'>view details</button>
                                <div>
                                <p className='ml-24'>hello</p>
                                </div>
                        </div>
                        </div>
                </div>
        );
};

export default Property;