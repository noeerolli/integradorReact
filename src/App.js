
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/header/NavBar';
import { Router } from './components/router/Router';
import { CartProvider } from './components/cart/CartContext';
import { LoginProvider } from './components/login/LoginContext';




function App() {
  return (
    <LoginProvider>
      <CartProvider>
          <NavBar />
          <Router />
      </CartProvider>
   </LoginProvider>
  );
}

export default App;
