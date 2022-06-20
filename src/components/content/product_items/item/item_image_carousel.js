import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const ItemGalleryCarousel = (props) => {
    return(
        <Carousel showIndicators={false} showStatus={false} dynamicHeight={true} showThumbs={props.image.length === 1 ? false: true} emulateTouch={false} swipeable={false}>
            {props.image.map(image => <img src={image.image} alt={image.alt}/>)}
        </Carousel>
    )
}


