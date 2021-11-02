import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Cart.css';

const Cart = () => {
    const { deleteSingleOrder, allContext } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders]);

    return (
        <div className="container">
            <p className="text-black ">
                Orderlength:{orders.length}
            </p>

            <Row xs={1} md={2} className="g-4">

                {

                    orders.map(order => <Col>
                        <Card>
                            <Card.Img variant="top" src={order.img} />
                            <Card.Body>
                                <Card.Title>{order.name}</Card.Title>
                                <Card.Text>
                                    <p className="text-danger">{order.price}</p>
                                </Card.Text>
                            </Card.Body>


                            <button onClick={() => deleteSingleOrder(order._id)} className="btn btn-danger m-4">Delete</button>


                        </Card>
                    </Col>)
                }

            </Row>
        </div>
    );
};

export default Cart;