import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';
import { Badge } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <img className="img-fluid"  src="https://i.ibb.co/VCdj718/ordercomplete-e34eab0b.png" alt=""/>
                    </div>
                    <div className="col-md-4 bg-light p-3 offset-1">
                        <img style={{width: '130px', height:'auto', marginBottom:'20px', display:'block', justifyContent:'center'}} src="https://i.ibb.co/pvxGxrM/Group-1151.png" alt=""/>
                        <h5>Order Id: </h5>
                        <Badge variant="success">5894525</Badge>{' '}
                        <h5>Shop Address: </h5>
                        <p><strong>Grand Mughal Restaurant</strong></p>
                        <h2>09:00</h2>
                        <p>Estimate Delivery</p>
                        <div className="d-flex mb-3">
                        <img style={{width:'80px', height:'auto', marginRight:'30px'}} src="https://i.ibb.co/9cYQyr4/Group-1152.png" alt=""/>
                        <div>
                        <h5>Hamim</h5>
                        <p>Your Rider</p>
                        </div>
                        </div>
                        <input className="form-control btn-danger" type="submit" value="Contact"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;