import React from 'react';
import Property from '../components/Property';
import flatData from '../JsonData/FlatData.json';
import { useLoaderData } from 'react-router-dom';

const RecommendedProps = () => {
    const properties = useLoaderData();

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-2xl mx-auto bg-green-50 justify-items-center'>
            {properties.map((property, index) => (
                <Property
                    key={index}
                    index={index} // Adjust index to start from 1
                    image={property.imageLink}
                    price={property.price}
                    address={property.address}
                    type='flat'
                    bedroom={property.bedrooms}
                    washroom={property.property}
                    location={property.location}
                />
            ))}
        </div>
    );
};

export default RecommendedProps;
