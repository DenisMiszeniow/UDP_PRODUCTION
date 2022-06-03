
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../../../images/motoblok_slide.jpg'
import slideTwo from '../../../images/traktor_slider_tiny.jpg'
import slideThree from '../../../images/izdeliya-iz-provoloki_slide.jpg'

class BannerCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} >
                <div>
                    <img src={slideOne} />
                   
                </div>
                <div>
                    <img src={slideTwo} />
                    
                </div>
                <div>
                    <img src={slideThree} />
                    
                </div>
            </Carousel>
        );
    }
};

export default BannerCarousel