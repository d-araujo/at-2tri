import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu() {
  return (
    <>
      <Navbar bg="light" variant="light" >
        <Container>
        <Navbar.Brand href="/" style={{ fontSize: '20px', color: "#FF7828" }}>
            <img
              alt=""  
              src="/src/assets/logo-at.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b>ONG Cuida Mais</b>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
