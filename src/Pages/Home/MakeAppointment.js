import React, { Children } from 'react';
import Doctor from '../../assets/images/doctor.png';
import Appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{background: `url(${Appointment})`}} className='flex justify-center items-center p-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-180px]' src={Doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-semibold'>Appointment</h3>
                <h2 className='text-3xl text-white py-4'>Make an Appointment Today</h2>
                <p className='text-white pb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Dolor eaque assumenda accusamus doloribus, rem molestias <br /> quo debitis saepe impedit omnis facilis? Pariatur doloremque <br /> praesentium omnis a blanditiis, ea, corrupti ab quaerat consectetur <br /> quidem eveniet laborum, mollitia fugit labore qui. Molestiae.</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;