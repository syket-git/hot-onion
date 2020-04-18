import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-3 choose">Why you choose us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente eaque repellendus asperiores nisi! Architecto, praesentium eligendi consequatur inventore fuga eius totam officia adipisci. Nostrum quia soluta vel distinctio delectus!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/r3Lt17Y/adult-blur-blurred-background-687824.png" />
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="https://i.ibb.co/JdMStFg/Group-204.png" alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <Card.Title>Quick Delivary</Card.Title>
                                        <Card.Text>
                                            The right to food is a human right derived from the International Covenant on Economic, Social and Cultural Rights (ICESCR).
                                </Card.Text>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/DRK0fF4/chef-cook-food-33614.png" />
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="https://i.ibb.co/BwJnqDZ/Group-1133.png" alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <Card.Title>A Good Auto Responder</Card.Title>
                                        <Card.Text>
                                            Today, the majority of the food energy required by the ever-increasing population of the world is supplied by the food industry.
                                </Card.Text>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/bLwMbKM/architecture-building-city-2047397.png" />
                            <Card.Body>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img src="https://i.ibb.co/GQxWfnZ/Group-245.png" alt="" />
                                    </div>
                                    <div className="col-md-10">
                                        <Card.Title>Home Delivary</Card.Title>
                                        <Card.Text>
                                            Historically, humans secured food through two methods: hunting and gathering and agriculture, which gave modern humans a mainly omnivorous diet.
                                </Card.Text>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;