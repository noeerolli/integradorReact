
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { NavBar } from './components/header/NavBar';
import { Home } from './components/main/home/Home';
import { Collectibles } from './components/main/pages/Collectibles';



function App() {
  return (
   <Container>
      <NavBar />
      <BrowserRouter>
     
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collectibles' element={<Collectibles />} />
       
      </Routes>
    </BrowserRouter>
      
  </Container>
  );
}

export default App;
