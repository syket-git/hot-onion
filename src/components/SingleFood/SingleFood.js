import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleFood.css';
import fakeData from '../../fakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const SingleFood = () => {
    const {id} = useParams();
    const FoodDetails = fakeData.find(fd => fd.id === parseInt(id));
    const {name, img, longDescription, price} = FoodDetails;
    
    const [quantity, setQuantity] = useState(1);

    
    const handleAddedFood = () => {
      
    }


    const handlePlus = () => {
        setQuantity(quantity + 1);

    }
    const handleMinus = () => {
        setQuantity(quantity - 1);
       

    }
        
    return (
        <div>
            <div style={{marginTop:'100px'}} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-5">{name}</h2>
                        <p className="mb-4">{longDescription}</p>

                        <div className="d-flex">
                            <span><h3>{price}</h3></span>
                            <div className="card-controller btn">
                                {quantity === 1 ? <button disabled onClick={handleMinus} className="btn">-</button> : <button onClick={handleMinus} className="btn">-</button> }
                                    {quantity}
                                <button  onClick={handlePlus} className ="btn">+</button>
                            </div>
                        </div>

                        <button onClick={handleAddedFood}  className="btn btn-danger mt-4 signup"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;