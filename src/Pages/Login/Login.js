import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(googleUser || user);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    let gError;
    let signInError;

    if (googleLoading || loading) {
        return <Loading />
    }

    if (googleError) {
        gError = <small className='text-red-500'>{googleError?.message}</small>
    }

    if (error) {
        signInError = <small className='text-red-500'>{error?.message}</small>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data?.email, data?.password);
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors?.email?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors?.password?.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full text' type="submit" value='Login' />
                    </form>
                    <p className='text-sm text-center'>New to Doctors Portal? <Link className='text-secondary' to='/register'>Create new account</Link></p>
                    <div>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-accent text-center w-full"

                        >
                            Continue With Google
                        </button>
                        {gError}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;