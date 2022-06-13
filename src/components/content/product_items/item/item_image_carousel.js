import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const ItemGalleryCarousel = (props) => {
    return(
        <Carousel
            autoPlay={true}
            dynamicHeight={true}
            emulateTouch={true}
            showIndicators={false}
            showStatus={false}
            autoFocus={true}
            thumbWidth={80}
            >
            {props.image.map(image => <div><img src={image.image} alt={image.alt}/></div>)}
        </Carousel>
    )
}

export default ItemGalleryCarousel


