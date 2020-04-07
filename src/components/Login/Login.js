import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useRef } from 'react';
import Auth from './useAuth';

const Login = () => {

    


    const holeStyle = {
        background: "URL('https://i.ibb.co/t8SY2qV/signup-bg-a5fdc065.png')",
        width: '100%',
        backgroundSize: '100%',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    }

    const { register, handleSubmit, errors, watch, reset } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const auth = Auth();
    console.log(auth.user);
    
    
    const onSubmit = e => {
        auth.user.isValid = true;
        
        console.log(e);
        reset();
    }


    return (
        <div style={holeStyle}>
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        <Link to="/"><img className="top-logo" src="https://i.ibb.co/DbkTskf/logo2.png" alt="" /></Link>

                        <div className="input mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control" name="name" placeholder="Name" type="text"
                                    ref={register({ required: true, maxLength: 20 })}
                                />
                                {errors.name && <p className="text-danger font-weight-bold font-italic">Name is required</p>}

                                <input name="email" className="form-control" placeholder="Email" type="email"
                                    ref={register({
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "invalid email address"
                                        }
                                    })} />

                                {errors.email && <p className="text-danger font-weight-bold font-italic">{errors.email.message}</p>}

                                <input name="password" type="password" className="form-control" placeholder="Password"

                                    ref={register({
                                        required: "You must specify a password",
                                        minLength: {
                                            value: 8,
                                            message: "Password must have at least 8 characters"
                                        }
                                    })}
                                />
                                {errors.password && <p className="text-danger font-weight-bold font-italic">{errors.password.message}</p>}

                                <input name="password_repeat" className="form-control" type="password" placeholder="Confirm Password"
                                    ref={register({
                                        validate: value =>
                                            value === password.current || "The passwords do not match"
                                    })}
                                />
                                {errors.password_repeat && <p className="text-danger font-weight-bold font-italic">{errors.password_repeat.message}</p>}
                               
                                {
                                    auth.user ? <button onClick={auth.signOut} className="button">Sing out</button>
                                    : <button onClick={auth.handleSubmit}className="button">Submit</button>  
                                }
                               
                                
                            </form>
                           

                          </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;