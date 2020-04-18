import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container mt-5 pt-5">
                <div className="row pt-2">
                    <div className="col-md-6">
                        <a href="/"><img className="logo" src="https://i.ibb.co/hVnHHv0/logo-888f17aa.png" alt="" /></a>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <a href="/about"><li>About Online Food</li></a>
                                    <a href="/blog"><li>Read Our Blog</li></a>
                                    <a href="/signup"><li>Sign up to deliver</li></a>
                                    <a href="/restaurant"><li>Add your restaurant</li></a>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <a href="/help"><li>Get Help</li></a>
                                    <a href="/faq"><li>Read FAQ</li></a>
                                    <a href="/view"><li>View all cities</li></a>
                                    <a href="/restaurant"><li>Restaurant near me</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 top-footer">

                    <div className="col-md-8">
                        <p className="copy">Copyright &copy; 2020 Red Onion</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-4">
                                <p><a href="/privacy">Privacy Policy</a></p>
                            </div>
                            <div className="col-md-4">
                                <p><a href="/terms">Terms of use</a></p>
                            </div>
                            <div className="col-md-4">
                                <p><a href="/price">Pricing</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;