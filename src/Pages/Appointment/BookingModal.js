import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user?.email,
            patientName: user?.displayName,
            phone: event?.target?.phone?.value

        }

        fetch('https://gentle-retreat-95722.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast.success(`Appointment is set, ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have an Appointment on ${data?.booking?.date} at ${data?.booking?.slot}`);
                }
                refetch();
                setTreatment(null);
            })


    }



    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle text-center">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-4">Booking for: {name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mb-3" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-3">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input disabled type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-xs mb-3" />
                        <input disabled type="email" name='email' value={user?.email || ''} className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="number" name='number' placeholder="Your Number" className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="submit" value='Submit' className="btn btn-secondary text-white w-full max-w-xs mb-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;