import { Carousel } from "react-bootstrap"

import img1 from '../../../assets/img/hasbro-fan-friday-jedi-order-TALL.jpg'
import img2 from '../../../assets/img/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.webp'
import img3 from '../../../assets/img/WUGDQLLGSJAJZDRILP6L7ZZEHE.jpg'

export const Slider
 = () =>{
    return(
        <Carousel>
              <Carousel.Item interval={1000}>
              <img 
                  style={{height:460, width:'100%'}}
                  className="d-block w-100"
                  src={img1}
                  alt="first slide"
                />
             
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img 
                  style={{height:460, width:'100%'}}
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
             
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  style={{height:360, width:'100%'}}
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    )
}