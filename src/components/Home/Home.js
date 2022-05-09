import React from 'react';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Offer from '../Offer/Offer';
import UpcomingProducts from '../UpcomingProducts/UpcomingProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <HomeProducts></HomeProducts>
            <UpcomingProducts></UpcomingProducts>
        </div>
    );
};

export default Home;