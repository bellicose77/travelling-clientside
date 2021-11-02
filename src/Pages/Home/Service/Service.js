import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { _id, name, description, price, img, duration } = props.service;
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
                        <div className="button-dis">
                            <Link to={`/booking/${_id}`} >
                                <button className="btn btn-warning">Book Now</button>
                            </Link>
                            <Link to={`/services/update/${_id}`}>
                                <button className="btn btn-danger m-3">Update</button>
                            </Link>
                        </div>


                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;