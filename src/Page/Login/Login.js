import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [loginerror, setLoginerror] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                navigate(from, { replace: true })
                saveUser(user.displayName, user.email, 'Buyer');
            })
            .catch(error => {
                console.log(error);
                setLoginerror(error.message);
            })
    }


    // handle login 
    const handleLogin = data => {
        console.log(data);
        setLoginerror('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setLoginerror(error.message);
            })
    }


    // save all users
    const saveUser = (name, email, option) => {
        const user = { name, email, accountType: option };

        fetch('https://assignment-12-server-tau.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('User save successfully')
                }
                else {
                    toast.error(data.message)
                }
            })
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
                <button onClick={handleGoogleSignIn} className='btn  btn-primary w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;