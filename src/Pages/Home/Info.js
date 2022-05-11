import React from 'react';
import InfoCard from './InfoCard';
import Clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-40'>
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTittle='Our Location' img={Marker} />
            <InfoCard bgClass='bg-accent' cardTittle='Opening Hours' img={Clock} />
            <InfoCard bgClass='bg-gradient-to-r from-secondary to-primary' cardTittle='Contact Us' img={Phone} />
        </div>
    );
};

export default Info;