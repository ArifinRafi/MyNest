import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PropertyData = () => {
        const properties = useLoaderData();
        return (
                <div className='flex items-center justify-center'>
                     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Property Id</th>
        <th>Price</th>
        <th>Address</th>
        <th>Bedrooms</th>
        <th>Washrooms</th>
        <th>Year Built</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      { properties.map(property=> 
      <tr key={property._id}>
      <th>{property.propertyName}</th>
      <td>{property.price}</td>
      <td>{property.address}</td>
      <td>{property.bedrooms}</td>
      <td>{property.washrooms}</td>
      <td>{property.year}</td>
      <td>{property.location}</td>
    </tr> )
        

      }
      
    </tbody>
  </table>
</div>
                </div>
        );
};

export default PropertyData;