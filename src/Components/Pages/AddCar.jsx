import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Contexts/AuthContext';
import axios from 'axios';


const AddCar = () => {

    const { user } = use(AuthContext);

    const handleAddCarForm = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const carsData = Object.fromEntries(formData.entries());
        carsData.email = user?.email;
        console.log(formData.entries());
        //console.log(carsData);

        //send car data to the db
        // fetch('http://localhost:3000/add_car', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(carsData),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('after adding car data to the db', data);
        // Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: "New plant added successfully",
        //     showConfirmButton: false,
        //     timer: 1500
        // });
        //     })

        //send car data to the db using axios
        axios.post('http://localhost:3000/add_car', carsData)
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: "success",
                    title: "New car listing successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='p-25'>
            <div className='text-center px-16 mb-10'>
                <h1 className='text-[25px] font-bold'>Add New Car</h1>
                <p>Enter details like model, rent rate, availability, and more to keep your listings updated and ready for booking.</p>
            </div>
            {/* form */}
            <form onSubmit={handleAddCarForm}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Car Model</label>
                        <input type="text" name='carModel' className="input w-full" placeholder="Enter Car Model" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Features</label>
                        <select className=' bg-base-100 border border-base-300 rounded p-2' name="features">
                            <option value="GPS">GPS</option>
                            <option value="AC">AC</option>
                            <option value="Non AC">Non AC</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Write description" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Daily Rental Price</label>
                        <select className=' bg-base-100 border border-base-300 rounded p-2' name="rentalPrice">
                            <option value="$110/day">Tesla-$110/day</option>
                            <option value="$150/day">Range Rover-$150/day</option>
                            <option value="$350/day">Lamborghini-$350/day</option>
                            <option value="$120/day">BMW 3 Series-$120/day</option>
                            <option value="$130/day">Mercedes C-Class-$130/day</option>
                            <option value="$45/day">Toyota Corolla-$45/day</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Availability</label>
                        <select className=' bg-base-100 border border-base-300 rounded p-2' name="availability">
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                    </fieldset>
                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Vehicle Registration Number</label>
                        <input type="text" name='registrationNumber' className="input w-full" placeholder="Enter Vehicle Registration Number" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Booking Count</label>
                        <input type="text" name='bookingCount' className="input w-full" placeholder="Enter Booking Count" />
                    </fieldset>
                    
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Enter your location" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Date Posted</label>
                        <input type="text" name='datePosted' className="input w-full" placeholder="Enter Date Posted" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Enter photo URL" />
                    </fieldset>
                </div>
                <div>
                    <button className='btn btn-primary w-full mt-8'>Add Car</button>
                </div>

            </form>
        </div>
    );
};

export default AddCar;