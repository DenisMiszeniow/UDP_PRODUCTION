
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../../../images/motoblok_slide.jpg'

class BannerCarousel extends Component {
    render() {
        return (
            <Carousel onChange={onChange}>
                <div>
                    <img src={slideOne} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slideOne} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slideOne} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default BannerCarousel