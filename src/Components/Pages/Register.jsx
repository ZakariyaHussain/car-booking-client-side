
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import Swal from 'sweetalert2';



const Register = () => {
    const { createUser } = use(AuthContext);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;


        createUser(name, email, photo, password)
            .then(result => {
                console.log('registration success', result.value);
                navigate('/');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your registration is success",
                    showConfirmButton: false,
                    timer: 2500
                });
                
            })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-10 shrink-0 shadow-2xl">
            <h1 className="text-center text-5xl font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photoUrl' className="input" placeholder="Photo URL" />
                    <label className="label">Password</label>
                    <input type="password" name='password' pattern='(?=.*[a-z])(?=.*[A-Z]).{6,}' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Submit Now</button>
                </form>
                <p>Have an account? Please <Link to='/login' className='text-xl text-blue-500 underline'> Login </Link> now</p>
                {/* Google */}
                <button className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Register;