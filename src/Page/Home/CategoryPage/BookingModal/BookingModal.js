import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({ data, setData, user, }) => {
   
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const price = form.Price.value;
        const location = form.location.value;
        const phone = form.phone.value;


        const booking = {
            bookingId: data._id,
            image: data.picture,
            name,
            email,
            title,
            price,
            location,
            phone,
            appointmentDate: data.postTime
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setData(null)
                    toast.success('booking confirm')
                }
                else {
                    toast.error(data.message);
                }

            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <small> Name</small>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled className="input input-bordered input-success w-full " required />
                        <input type="email" name='email' defaultValue={user?.email} disabled className="input input-bordered input-success w-full " required />
                        <small>Model Name</small>
                        <input type="text" name='title' defaultValue={data?.title} disabled className="input input-bordered input-success w-full " required />
                        <small>Price</small>
                        <input type="text" name='Price' defaultValue={data?.resalePrice} disabled className="input input-bordered input-success w-full " required />
                        <input type="text" name='location' className="input input-bordered input-success w-full" placeholder='Location' required />
                        <input type="text" name='phone' placeholder="phone number" className="input input-bordered input-success  w-full " required />
                        <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;