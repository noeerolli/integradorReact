import { Container } from "react-bootstrap"
import introVideo from "../../../assets/video/videoCarousel.mp4"

export const Intro =()=>{
    return(
        <Container>
           <video style={{height:'100%',width:'100%'}}  autoPlay controls >
             <source src={introVideo}  type="video/mp4"></source>
            </video>
                
        </Container>
    )
}