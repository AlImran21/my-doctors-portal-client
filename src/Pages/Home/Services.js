import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from './Service';



const Services = () => {

    const services = [

        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aperiam eaque minima sunt.',
            img: Fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aperiam eaque minima sunt.',
            img: Cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum aperiam eaque minima sunt.',
            img: Whitening
        }

    ];



    return (
        <div className='my-24 px-28'>
            <div className='text-center mb-12'>
                <h1 className='text-primary text-xl font-semibold text-center uppercase'>Our Services</h1>
                <h2 className='text-4xl text-neutral'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;