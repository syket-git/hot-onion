import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => {
        props.deliveryDetailsHandler(data);
        console.log(data)
        setIsSubmit(true)
    }
    const totalQuantity = props.cart.reduce((totalQ, food) => totalQ + food.quantity, 0);
    const subTotal = props.cart.reduce((total, fd) => total + (fd.price * fd.quantity), 0);
    const tax = ((subTotal / 100) * 5)
    const fee = totalQuantity && 2;
    const total = (subTotal + tax + fee).toFixed(2);


    return (
        <div className="problem-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="width">
                            <h3>Delivery Details</h3>
                            <p className="red">(Please fill in all the blanks correctly)</p>
                            <hr />
                            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                                <input name="door" placeholder="Delivery To Door" className="form-control" ref={register({ required: true })} />
                                {errors.door && <span class="font-italic text-danger red">This field is required</span>}
                                <br />
                                <input name="road" placeholder="Road No" className="form-control" ref={register({ required: true })} />
                                {errors.road && <span class="font-italic text-danger red">This field is required</span>}
                                <br />
                                <input name="flat" placeholder="Flat, Suite or Floor" className="form-control" ref={register({ required: true })} />
                                {errors.flat && <span class="font-italic text-danger red">This field is required</span>}
                                <br />
                                <input name="business" placeholder="Business Name" className="form-control" ref={register({ required: true })} />
                                {errors.business && <span class="font-italic text-danger red">This field is required</span>}
                                <br />
                                <textarea name="address" placeholder="Address" className="form-control" cols="30" rows="2" ref={register({ required: true })}></textarea>
                                {errors.address && <span class="font-italic text-danger red">This field is required</span>}
                                <br />
                                <input type="submit" className="btn btn-danger form-control" value="Save & Continue" />
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="width float-right">
                            <h4 className="mb-5">From <span className="font-weight-bold">Grand Mughal Restaurant</span> <br />Arriving in 20-30 minute <br />  CMP Plaza Police line, Chattogram</h4>
                            {
                                props.cart.map(item => <div className="d-flex mr-1 p-4 justify-content-between background bg-light">
                                    <div>
                                        <img style={{ width: '100px', height: 'auto' }} src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <h5 className="text-center">{item.name}</h5>
                                        <h4 className="text-danger text-center">{item.price}</h4>
                                    </div>
                                    <div>
                                        <p className="mar"><button onClick={() => props.checkOutItemHandler(item.id, (item.quantity + 1))} className="btn">+</button></p>
                                        <p className="mar"><button className="button2 btn">{item.quantity}</button></p>

                                        {
                                            item.quantity > 0 ?
                                                <p className="mar"><button className="btn font-weight-bolder" onClick={() => props.checkOutItemHandler(item.id, (item.quantity - 1))}>-</button></p>
                                                :
                                                <p className="mar"><button disabled className="btn font-weight-bolder">-</button></p>
                                        }

                                    </div>
                                </div>)
                            }

                            <div>
                                <p className="d-flex justify-content-between "><span>Sub Total. {totalQuantity} items</span> <span>${(subTotal).toFixed(2)}</span></p>
                                <p className="d-flex justify-content-between "><span>Tax</span> <span>${(tax).toFixed(2)}</span></p>
                                <p className="d-flex justify-content-between "><span>Delivery Fee</span> <span>${fee}</span></p>
                                <h4 className="d-flex text-danger justify-content-between "><span>Total</span> <span>${total}</span> </h4>
                            </div>
                            <div>
                                {
                                    totalQuantity ?

                                        isSubmit ?

                                            <Link to="/checkout">

                                                <input onClick={() => props.clearCart()} className="btn btn-danger form-control" type="submit" value="Check out your food" />
                                            </Link>
                                            :
                                            <input disabled className="btn btn-secondary form-control" type="submit" value="Nothing to checkout" />
                                        :
                                        <input disabled className="btn btn-secondary form-control" type="submit" value="Nothing to checkout" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;