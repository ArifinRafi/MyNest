import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PropertyData = () => {
        const properties = useLoaderData();
        return (
                <div className='flex items-center justify-center'>
                     <div>{
                     properties.map(property=> <p key={property._id}>{property.propertyName}</p> )
                     }</div>   
                </div>
        );
};

export default PropertyData;