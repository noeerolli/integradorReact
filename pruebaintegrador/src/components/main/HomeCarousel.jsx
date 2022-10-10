import { Carousel } from "react-bootstrap"





export const HomeCarousel = () =>{
    return(
        <Carousel>
              <Carousel.Item interval={1000}>
              <video style={{height:360,width:'100%'}} controls>
                            <source src="intro.mp4" 
            type="video/mp4"></source></video>
               
             
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img 
                  style={{height:360, width:'100%'}}
                  className="d-block w-100"
                  src=""
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
                  src=""
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