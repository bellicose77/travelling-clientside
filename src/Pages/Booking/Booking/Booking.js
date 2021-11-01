import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Booking;