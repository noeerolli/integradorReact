import { Container } from "react-bootstrap"
import { Collectibles } from "../pages/Collectibles"
import { Intro } from "./Intro"

export const Home = () =>{
    return(
      <Container>
        <Intro />
        <Collectibles /> 
      </Container>  
    )
}