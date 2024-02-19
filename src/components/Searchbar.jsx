import React from 'react';
import SearchbarCover from '../assets/images/searchbarCover.png'

const Searchbar = () => {
        return (
                <div className='relative'>
                        <img className='relative inset-0' src={SearchbarCover} alt="" />
                        <div className='absolute flex flex-col  items-center inset-0 '>
                                <h1 className=' mt-12 text-white text-4xl'>Unlock the Best Deals | Search Properties You will Love</h1>
                                <h3 className='text-white mt-4 text-xl'>Find ideal homes at unbeatable prices - start your search now!</h3>
                        </div>
                </div>
        );
};

export default Searchbar;