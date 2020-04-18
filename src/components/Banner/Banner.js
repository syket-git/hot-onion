import React from 'react';
import './Banner.css';
import bg from '../../Image/bannerbackground.png'

const Banner = () => {
    const sectionStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        height: '80vh',
        marginTop: '80px',
    };
    return (
        <div>
            <div style={sectionStyle} className="banner">
                <div className="container">
                    <h2 className="text-center title">Best food waiting for your belly</h2>
                    <div className="col-md-6 mx-auto">
                        <input placeholder="Search your Food Item" className="form-control search" type="text" />
                        <button className="btn btn-danger search-button">Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;