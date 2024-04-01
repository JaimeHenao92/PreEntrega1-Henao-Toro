import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element = {<ItemListContainer />}/>
    <Route path="/category/:id" element = {<ItemListContainer />}/>
    <Route path="/item/:id" element = {<ItemDetailContainer />}/>
    <Route path="/category/contactanos" element = {312344453}>

    </Route>

  </Routes>
  
  </BrowserRouter>
}

export default App

