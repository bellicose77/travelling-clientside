import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { name, description, price, img, duration } = props.service;
    return (
        <div >
            <Col>
                <Card>
                    <Card.Img className="img-container" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p className="text-danger">{description}</p>
                            <div >
                                <p className="text-danger">${price}/ per person</p>
                                <p className="text-danger">{duration}</p>
                            </div>
                        </Card.Text>
                        <button className="btn btn-warning">Book Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;