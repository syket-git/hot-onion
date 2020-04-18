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

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        {
                                            auth.user != null && <p style={{ width: '400px' }} className="text-center text-danger">{auth.user.error}</p>
                                        }
                                        <div className="form-group">
                                            <input name="email" className="form-control" ref={register({
                                                required: true, pattern: {
                                                    message: 'Email is required'
                                                }
                                            })} placeholder="Email" />
                                            {errors.email && <p className="text-danger font-weight-bold font-italic">{errors.email.message}</p>}
                                        </div>

                                        <input type="password" name="password" className="form-control" placeholder="Password"

                                            ref={register({
                                                required: "You must specify a password",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must have at least 8 characters"
                                                }
                                            })}
                                        />

                                        {errors.password && <p className="text-danger font-weight-bold font-italic">{errors.password.message}</p>}
                                        <button type="submit" className="button"> Sign in</button>
                                        <p style={{ cursor: 'pointer' }} onClick={() => setReturningUser(false)} class="red text-center">Don't Have an account?</p>
                                    </form>

                                    :

                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        {
                                            auth.user != null && <p style={{ width: '400px' }} className="text-center text-danger">{auth.user.error}</p>
                                        }

                                        <input type="text" className="form-control" name="name" placeholder="Name"
                                            ref={register({ required: true, maxLength: 20 })}
                                        />
                                        {errors.name && <p className="text-danger font-weight-bold font-italic">Name is required</p>}

                                        <input type="email" name="email" className="form-control" placeholder="Email"
                                            ref={register({
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: "invalid email address"
                                                }
                                            })} />

                                        {errors.email && <p className="text-danger font-weight-bold font-italic">{errors.email.message}</p>}

                                        <input type="password" name="password" className="form-control" placeholder="Password"

                                            ref={register({
                                                required: "You must specify a password",
                                                minLength: {
                                                    value: 6,
                                                    message: "Password must have at least 8 characters"
                                                }
                                            })}
                                        />

                                        {errors.password && <p className="text-danger font-weight-bold font-italic">{errors.password.message}</p>}

                                        <input type="password" name="confirm_password" className="form-control" ref={register({
                                            validate: (value) => value === watch('password')
                                        })} placeholder="Confirm Password" />


                                        {errors.confirm_password && <p className="text-danger font-weight-bold font-italic">{errors.confirm_password.message}</p>}
                                        <button className="button" type="submit">Create an account</button>
                                        <p style={{ cursor: 'pointer' }} onClick={() => setReturningUser(true)} className="red text-center">Already Have an account?</p>
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