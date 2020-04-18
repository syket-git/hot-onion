import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleFood.css';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const SingleFood = (props) => {
    const [currentFood, setCurrentFood] = useState({});
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        const FoodDetails = fakeData.find(fd => fd.id === parseInt(id));
        setCurrentFood(FoodDetails);

    }, [id])

    const handleAddedFood = (currentFood) => {
        currentFood.quantity = quantity;
        props.cartHandler(currentFood);
    }

    const handlePlus = () => {
        setQuantity(quantity + 1);

    }
    const handleMinus = () => {
        setQuantity(quantity - 1);
    }


    return (

        <div>

            <div style={{ marginTop: '100px' }} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-5">{currentFood.name}</h2>
                        <p className="mb-4">{currentFood.longDescription}</p>

                        <div className="d-flex">
                            <span><h3>${currentFood.price}</h3></span>
                            <div className="card-controller btn">
                                {quantity === 1 ? <button disabled onClick={handleMinus} className="btn">-</button> : <button onClick={handleMinus} className="btn">-</button>}
                                {quantity}
                                <button onClick={handlePlus} className="btn">+</button>

                            </div>
                        </div>

                        <button onClick={() => handleAddedFood(currentFood)} className="btn btn-danger mt-4 signup"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={currentFood.img} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleFood;