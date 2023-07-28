import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../assests/brandImage/Brand1.png';
import brand2 from '../../../assests/brandImage/Brand2.png';

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block w-100 h-100'
                        src={brand1}
                        alt="first slide"
                    />
                    
                </Carousel.Item>

                <Carousel.Item>
                <img
                        className='d-block w-100 h-100'
                        src={brand2}
                        alt="second slide"
                    />
                    
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarosel;