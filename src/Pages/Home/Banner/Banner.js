import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';



const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/fXSDMYp/ammie-ngo-vcu-OZBxx-Rk-unsplash.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Amazing tour in Indonesia</h2>
                        <p>7days & 7 Nine</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/WW46QcR/andy-holmes-0-LJCEORi-Yg8-unsplash.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Amazing tour in Italy</h2>
                        <p>5 days & 6 nights</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/QN6xFBw/rsz-bing-hui-yau-y85tir86q34-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Amazing tour in Switzerland</h2>
                        <p>2 days & 3 nights</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;