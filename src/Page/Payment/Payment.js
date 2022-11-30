import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()
    const { title, price, appointmentDate,bookingId } = booking;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='ml-6 mt-6'>
            <h3 className="text-3xl">Payment for {title}</h3>
            <p className="text-xl mt-3">Please pay <strong>${price}</strong> for your appointment on {appointmentDate}</p>
            <p>{bookingId}</p>
            <div className='w-96 my-12 text-white'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;