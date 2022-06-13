import React from "react";
import { Carousel } from "react-responsive-carousel";

export const ItemGalleryCarousel = (props) => {
    debugger
    return(
        <Carousel>
            {props.image.map(image => <div><img src={image.image} alt={image.alt}/></div>)}
        </Carousel>
    )
}


