import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slide_Comp = () => {

   const  fixedHeight=280;
    const fixedWidth=30 ;


  return (
    <Carousel >
      <Carousel.Item>
        <img
        width={fixedWidth}
        height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1700994295451_web.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         width={fixedWidth}
         height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702286756217_freeaccessweb.jpg"
          alt="Second slide"
        />
     </Carousel.Item>
      <Carousel.Item>
        <img
         width={fixedWidth}
         height={fixedHeight}
          className="d-block w-100"
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1702120341228_zakirkhanlivehyderabadweb.jpg"
          alt="Third slide"
        />
    </Carousel.Item>
    </Carousel>
  );
};

export default Slide_Comp;