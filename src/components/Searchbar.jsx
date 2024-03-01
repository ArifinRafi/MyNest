import React from 'react';
import SearchbarCover from '../assets/images/searchbarCover.png'

const Searchbar = () => {
        return (
                <div className='relative'>
                        <img className='relative inset-0' src={SearchbarCover} alt="" />
                        <div className='absolute flex flex-col  items-center inset-0 '>
                                <h1 className=' mt-12 text-white text-4xl'>Unlock the Best Deals | Search Properties You will Love</h1>
                                <h3 className='text-white mt-4 text-xl'>Find ideal homes at unbeatable prices - start your search now!</h3>
                                <div className='flex bg-white h-32 items-center rounded-xl w-[64rem] gap-4 justify-center'>

                                        {/* DropdownMenu */}
                                <div className="dropdown dropdown-bottom">
                                <div tabIndex={0} role="button" className="btn rounded-none w-32 ">Property Type</div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded w-52">
                                 <li><a>Apartment</a></li>
                                        <li><a>Plot</a></li>
                                </ul>
                                </div>
                                <input type="text" placeholder="Search Keyword" className="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" />
                                <button className='btn btn-primary bg-black hover:bg-gray-400 hover:text-black border-none'>Find</button>
                                </div>
                        </div>
                </div>
        );
};

export default Searchbar;