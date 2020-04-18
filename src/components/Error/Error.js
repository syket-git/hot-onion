import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="mx-auto mt-5 text-center">
            <h1>Sorry, Page Not Found</h1>
            <h2 className="mb-4">404 Error!</h2>
            <Link to="/"> <button className="btn btn-danger mb-5">Back to home</button></Link>
        </div>
    );
};

export default Error;