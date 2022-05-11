import React from 'react';

const Review = ({ review }) => {
    return (
        <div className=''>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere harum quae doloribus error explicabo laudantium ducimus, delectus culpa quaerat illum inventore expedita mollitia ratione asperiores.</p>
                    <div className='flex items-center mt-3'>
                        <div className="avatar">
                            <div className="w-[55px] h-[55px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='' src={review?.img} alt='' />
                            </div>
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-xl font-semibold'>{review?.name}</h4>
                            <p>{review?.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;