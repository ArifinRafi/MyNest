import React from 'react';
import contact from '../assets/images/contact.png';
import location from '../assets/logos/location.png';
import phone from '../assets/logos/phone.png';
import mail from '../assets/logos/mail.png';
import facebook from '../assets/logos/facebook.png';
import twitter from '../assets/logos/twitter.png';
import instagram from '../assets/logos/instagram.png';

const Contact = () => {
    return (
        <div className='relative'>
            <img className='relative inset-0 w-full h-full object-cover' src={contact} alt="Background" />
            <div className='absolute mt-24 flex justify-around inset-0 text-white'>
                <div><h1 className='text-3xl font-semibold'>Need the best deal?</h1>
                <h1 className='text-3xl font-semibold'>Contact Us Now!</h1>
                <div className='flex flex-col gap-2'><p className='text-xl mt-24' >Contact</p>
                     <p className='flex gap-4'> <img src={location} alt="" /> House, Road-11, Banani, Dhaka</p>
                     <p className='flex gap-4'> <img src={phone} alt="" />+880142134355</p>
                     <p className='flex gap-4'> <img src={mail} alt="" /> info@mynest.tech</p>
                     <p>Social Media</p> 
                     <div className='flex gap-4'><img src={facebook} alt="" />
                          <img src={twitter} alt="" />
                          <img src={instagram} alt="" />
                          <p>mynest.texh</p>
                     </div>
                     </div></div>
                <div className='bg-white text-black w-96 gap-4 h-96 flex flex-col items-center'>
                        <h2 className='text-xl font-bold mt-4'>Contact Now!</h2>
                        <input type="text" placeholder="Your Email" className="input bg-gray-200 text-white input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Your Query" className="input bg-gray-200 input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary bg-black border-none text-white w-80 hover:bg-gray-400 hover:text-black'>Send a message</button>
                        </div>
                        
                
                </div>       
        </div>
    );
};

export default Contact;
