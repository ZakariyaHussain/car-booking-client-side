import axios from 'axios';
import React, { use, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import BookingCard from '../BookingCard';
import Swal from 'sweetalert2';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [myBooking, setMyBooking] = useState([]);

    useEffect(() => {
        axios.get(`https://car-booking-server.vercel.app/booking-cars/${user?.email}`)
            .then(res => {
                setMyBooking(res?.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user]);

    return (
        <div className="overflow-x-auto min-h-[100vh] rounded-box border border-base-content/5 px-5 my-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Car Image</th>
                        <th>Car Model</th>
                        <th>Booking Date</th>
                        <th>Total Price</th>
                        <th>Booking Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {/* row  */}
                    {
                        myBooking.map(car => <BookingCard key={car._id} car={car}></BookingCard> )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;