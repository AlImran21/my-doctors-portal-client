import React from 'react';
import Chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';


const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} className="max-w-sm rounded-lg shadow-2xl ml-24" />
                <div className='banner-text'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;