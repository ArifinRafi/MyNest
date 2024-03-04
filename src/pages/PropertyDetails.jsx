import React from 'react';
import propImage from '../assets/images/propertyImage.jpg'
import Carousel from '../components/Carousel';
import { useLoaderData, useParams } from 'react-router-dom';


const PropertyDetails = () => {
        const{index} = useParams();
        const properties = useLoaderData();
        const property = properties[index];
        return (
                <div className=' max-w-screen-2xl mx-auto bg-gray-200 h-[120rem]'>
                    <Carousel image={propImage} ></Carousel> 
                    <div className=''>
                    <div className='flex justify-around '>
                        {/* nameofthehouse */}
                        <div>
                                <h1 className='text-4xl'>Full Furnished House</h1>
                                <p className='text-sm'>{property.address}</p>
                        </div>

                        <div>
                                <h1 className='text-4xl '>Price: {property.price}</h1>
                        </div>        
                    </div>

                    {/* description */}
                    <div className='grid grid-cols-4  gap-4 m-4 p-4  h-80 justify-around'>
                        <div className=' col-span-3 '>
                          <div className='bg-white p-4'>
                          <h2 className='text-2xl'>Overview</h2>
                          <p>{property.description}</p> 
                          </div>
                          <div className='bg-white p-4 mt-4'>
                          <h2 className='text-2xl'>Details</h2>  
                          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Property ID:{property.propertyName} </td>
        <td>Home area:</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Rooms:{property.bedrooms}</td>
        <td>Bed:{property.bedrooms}</td>
      </tr>

      <tr>
        <td>Baths:{property.washrooms}</td>
        <td>Price:{property.price}</td>
      </tr>

      <tr>
        <td>Year Built:{property.year}</td>
        <td>Status:{property.description}</td>
      </tr>

    </tbody>
  </table>
</div>                  
 </div>

                          {/* attachments */}

                        <div><h2 className='text-2xl h-32 mt-2 bg-white'>Attachments</h2></div>


                        {/* location */}

                        <div className='bg-white mt-4'>
                                <h2 className='text-2xl p-4'>Location</h2>
                                <p>{property.address}</p>
                        </div>

                        {/* propertyVideo */}
                        <div className='bg-white mt-4'>
                        <div className='flex'>
                        <h2 className='text-2xl btn bg-white'>Property Video</h2>
                        <button className='text-2xl bg-white btn'>Virtual Tour</button>
                        </div>
                        <div className=' flex items-center pb-12 flex-col mt-4'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/nXBj1ugNaJM?si=xhXq6xYLRn1WWBO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        </div>

                        <div className='bg-white mt-4'>
                                <h1 className='text-2xl p-4'>Facilities</h1>

                                <table className="table">
    {/* head */}
                                <thead>
                                </thead>
                                <tbody>
                                {/* row 1 */}
                                <tr>
                                        <td>City Center: </td>
                                        <td>Hospital:</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                        <td>Shop:</td>
                                </tr>
                                </tbody>
                                </table>
                        </div>
                        </div>

                        

                        <div className='bg-white flex flex-col  items-center'>
                                <h2 className='text-2xl'>Contact Admin</h2>
                                <h2>Call for Booking: +8801611240524</h2>
                                <div className='grid gap-4'>
                                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />       
                                <input type="text" placeholder="Mail" className="input input-bordered w-full max-w-xs" />       
                                <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />       
                                <input type="text" placeholder="Message" className="input input-bordered w-full max-w-xs h-32" /> 
                                <button className='btn btn-primary mb-4 bg-black text-white border-none'> Send Message</button>               
                                </div>
                        </div>
                    </div>   
                    </div>
                    </div>
        );
};

export default PropertyDetails;