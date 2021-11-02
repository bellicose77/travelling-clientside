import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {

    const { addToCart, allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;
    const { serviceId } = useParams();
    const history = useHistory();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);
    return (
        <div className="container m-5">

            <Row xs={1} md={1} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text>
                                <p className="text-danger">{service.description}</p>
                                <p className="text-danger" >{service.price}</p>
                                <p className="text-danger">{service
                                    .duration}</p>
                            </Card.Text>
                            <button onClick={
                                () => {
                                    if (uid) {
                                        addToCart(service);
                                    } else {
                                        history.push('/login');
                                    }
                                }
                            } className="btn btn-warning">Add Cart</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Booking;