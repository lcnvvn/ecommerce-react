import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "../../common/CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#tazas">Tazas</Nav.Link>
            <Nav.Link href="#vasos">Vasos</Nav.Link>
            <Nav.Link href="#copas">Copas</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#carrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
