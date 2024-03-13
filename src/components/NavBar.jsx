import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWitget"

import logoImage from "../assets/Logo.png"; 

export const NavBar = () => {

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand href="#">
            <img src={logoImage} alt="INNPOLLO Logo" height={90}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Contactanos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};