import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth/useAuth';
//import Auth from './useAuth'

const Login = () => {

    const [returningUser, setReturningUser] = useState(false);
    const { register, handleSubmit, errors, watch, reset } = useForm()
    const auth = useAuth();
    const onSubmit = data => {
        if (returningUser) {
            console.log(data)
            if (data.email && data.password) {
                auth.signIn(data.email, data.password);
            }
        } else {
            if (data.name && data.email && data.password && data.confirm_password) {
                auth.signUp(data.name, data.email, data.password)
            }
        }
        console.log(data);
        reset();
    }

    const holeStyle = {
        background: "URL('https://i.ibb.co/t8SY2qV/signup-bg-a5fdc065.png')",
        width: '100%',
        backgroundSize: '100%',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }

    return (
        <div style={holeStyle}>
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <Link to="/"><img className="top-logo" src="https://i.ibb.co/DbkTskf/logo2.png" alt="" /></Link>
                        <div className="input mt-5">
                            {
                                returningUser ?
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                                        {
                                            auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                                        }
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span className="error red">Email is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span className="error red">Password is required</span>}
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-danger btn-block" type="submit">Sign In</button>
                                        </div>
                                        <div className="option text-center">
                                            <label style={{color:'red', cursor:'pointer'}} onClick={() => setReturningUser(false)}>Don't have an account?</label>
                                        </div>
                                    </form>
                                    :
                                    <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                                        {
                                            auth.user != null && <p className="text-danger">* {auth.user.error}</p>
                                        }
                                        <div className="form-group">
                                            <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                                            {errors.name && <span className="error red">Name is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                                            {errors.email && <span className="error red">Email is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                                            {errors.password && <span className="error red">Password is required</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="confirm_password" className="form-control" ref={register({
                                                validate: (value) => value === watch('password')
                                            })} placeholder="Confirm Password" />
                                            {errors.confirm_password && <span className="error red">Passwords didn't match.</span>}
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-danger btn-block" type="submit">Sign Up</button>
                                        </div>
                                        <div className="option text-center">
                                            <label style={{color:'red', cursor:'pointer'}} onClick={() => setReturningUser(true)}>Already Have an Account?</label>
                                        </div>
                                    </form>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;