import React from 'react';
import Property from '../components/Property';

const RecommendedProps = () => {
        return (
                <div className='grid grid-cols-1 lg:grid-cols-3 bg-green-50 justify-items-center'>
                     <Property></Property>
                     <Property></Property>
                     <Property></Property>
                     <Property></Property>
                     <Property></Property>
                     <Property></Property>   
                </div>
        );
};

export default RecommendedProps;