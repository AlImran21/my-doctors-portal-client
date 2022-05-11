import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';


const Contact = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='mt-28 p-12'>
            <div className='text-center my-12'>
                <p className='text-primary font-semibold text-xl'>Contact Us</p>
                <h1 className='text-3xl text-white'>Stay connected with us</h1>
            </div>
            <div className='text-center'>
                <input className='w-[450px] h-[48px] px-3 mb-5 border-0 outline-0 rounded-md' type="email" name="email" placeholder='Email Address' required />
                <br />
                <input className='w-[450px] h-[48px] px-3 mb-5 border-0 outline-0 rounded-md' type="text" name="text" placeholder='Subject' required />
                <br />
                <textarea className='px-3 py-3 border-0 outline-0 mb-5 rounded-md' name="" cols="53" rows="6" placeholder='Your Message' />
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;