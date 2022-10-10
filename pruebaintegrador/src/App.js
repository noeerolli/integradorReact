
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { NavBar } from './components/header/NavBar';
import { HomeCarousel } from './components/main/HomeCarousel';
import { Collectibles } from './components/main/pages/Collectibles';

function App() {
  return (
   <Container>
      <NavBar />
      <HomeCarousel />
      <Collectibles />
  </Container>
  );
}

export default App;
