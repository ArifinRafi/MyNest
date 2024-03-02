import React from 'react';
import Property from '../components/Property';
import flatData from '../JsonData/FlatData.json';

const RecommendedProps = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-screen-2xl mx-auto bg-green-50 justify-items-center'>
            {flatData.map((data, index) => (
                <Property
                    key={index}
                    image={data.image}
                    price={data.price}
                    address={data.address}
                    type={data.type}
                    bedroom={data.bedroom}
                    washroom={data.washroom}
                    location={data.location}
                />
            ))}
        </div>
    );
};

export default RecommendedProps;
