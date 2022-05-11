import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';


const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Charlotte',
            review: '',
            img: people2,
            location: 'Washington'
        },
        {
            _id: 3,
            name: 'Amelia',
            review: '',
            img: people3,
            location: 'Huawei'
        }
    ];



    return (
        <section className='my-28 px-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='font-semibold text-primary text-xl'>Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-[98px] h-[79px] lg:w-[192px] lg:h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-24'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;