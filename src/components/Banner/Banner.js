import React from 'react';
import banner from '../../images/banner .jpg'
const Banner = () => {
    return (
        <div className='row bg-black'>
            <div className='col-sm-12 col-lg-6 text-container text-white mt-5 pt-5'>
                <h1>Exclusive Branded Laptop are available here!</h1>
                <button className='btn btn-secondary w-50'>Explore Now</button>
            </div>
            <div className='col-sm-12 col-lg-6 img-container'>
                <img className='w-100' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;