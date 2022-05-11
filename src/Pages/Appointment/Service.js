import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;


    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title card-actions justify-center text-secondary">{name}</h2>
                <p className='text-center'>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 text-sm'>Try another date</span>
                    }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn w-full btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;