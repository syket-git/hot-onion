import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './Foods.css';
import { Link } from 'react-router-dom';

const Foods = (props) => {
    const { name, img, shortDescription, price, id } = props.food;

    return (
        <div>
            <div className="col-md-4  mb-4">
                <Link className="link" to={"/food/" + id}>
                    <Card className="text-center" style={{ width: '21rem' }}>
                        <Card.Img variant="top" style={{ width: '200px', height: 'auto', margin: '30px auto' }} src={img} />
                        <Card.Body>
                            <Card.Title>
                                <h5>{name}</h5>
                            </Card.Title>
                            <p>{shortDescription}</p>
                            <h4>${price}</h4>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default Foods;