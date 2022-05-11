import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle text-center">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary mb-4">Booking for: {name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs mb-3" />
                        <select name='slot' class="select select-bordered w-full max-w-xs mb-3">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered w-full max-w-xs mb-3" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs mb-3" />
                        <input type="number" name='number' placeholder="Your Number" class="input input-bordered w-full max-w-xs mb-3" />
                        <input type="submit" value='Submit' class="btn btn-secondary text-white w-full max-w-xs mb-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;