
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { NavBar } from './components/header/NavBar';
import { Router } from './components/router/Router';




function App() {
  return (
   <Container>
      <NavBar />
      <Router />
      
  </Container>
  );
}

export default App;
