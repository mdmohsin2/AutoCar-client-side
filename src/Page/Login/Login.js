import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [loginerror, setLoginerror] = useState('')



    // handle login
    const handleLogin = data => {
        console.log(data);
        setLoginerror('');
        console.log(data);
        toast.success('Login success');
        reset()
    }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 bg-gray-800 rounded-md p-7'>
                <h2 className='text-xl text-center font-bold text-cyan-400'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs mt-3">
                        <label className="label"><span className="label-text text-white">Email</span></label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} className="input input-bordered input-info w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-3">
                        <label className="label"><span className="label-text text-white">Password</span></label>

                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password Address is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters' }
                                })}
                            className="input input-bordered input-info w-full max-w-xs" />

                        {errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password</span></label>
                    </div>
                    <input type="submit" className='btn bg-gray-600 w-full' />
                    <div>
                        {loginerror && <p className='text-error'>{loginerror}</p>}
                    </div>
                </form>

                <p className='mt-1 text-white'>New to Autocar<Link to='/signup' className='text-cyan-500 ml-2'>Create New account</Link></p>
                <div className="divider my-4 text-cyan-400">OR</div>
                <button className='btn  btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;