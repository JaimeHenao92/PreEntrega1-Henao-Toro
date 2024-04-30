import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";

function App() {
  return (
  <CartProvider>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element = {<ItemListContainer />}/>
    <Route path="/category/:id" element = {<ItemListContainer />}/>
    <Route path="/Item/:id" element = {<ItemDetailContainer />}/>
    <Route path="/Cart" element = {<Cart />}/>
    <Route path="/category/contactanos" element = {312344453}/>
    <Route path="*" element={404}/>


  </Routes>
  
  </BrowserRouter>
  </CartProvider>
  );
}

export default App

