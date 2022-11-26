import React from 'react';

const BookingModal = ({ data,user }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form  className='grid grid-cols-1 gap-3 mt-10'>
                       <small> Name</small>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-success w-full " required />
                        <small>Email</small>
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered input-success w-full " required />
                        <small>Model Name</small>
                        <input type="text" name='name' defaultValue={data?.title} disabled placeholder="Your Name" className="input input-bordered input-success w-full " required />
                        <small>Price</small>
                        <input type="text" name='name' defaultValue={data?.resalePrice} disabled placeholder="Your Name" className="input input-bordered input-success w-full " required />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered input-success  w-full " required />
                        <input type="submit" className='w-full btn bg-gray-600' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;