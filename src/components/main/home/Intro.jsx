import introVideo from "../../../assets/video/videoCarousel.mp4"
import { Container } from "react-bootstrap"

export const Intro =()=>{
    return(
        <Container>
           <video style={{height:'100%',width:'100%'}} controls autoPlay muted >
             <source src={introVideo}  type="video/mp4"></source>
            </video>
                
        </Container>
    )
}