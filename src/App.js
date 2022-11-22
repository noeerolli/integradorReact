
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { NavBar } from './components/header/NavBar';
import { Router } from './components/router/Router';
import { CartProvider } from './components/cart/CartContext';




function App() {
  return (
   <CartProvider>
      <NavBar />
      <Router />
      
  </CartProvider>
  );
}

export default App;
