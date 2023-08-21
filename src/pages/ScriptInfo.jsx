import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Descript = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="image-container">
          <img src="https://www.ongsbrasil.com.br/images/ong-idosos-2.jpg" alt="Imagem" className="img-fluid shadow" style={{ maxHeight: "700px", width: "80%"}}/>
        </Col>
        <Col md={6} className="text-container d-flex align-items-center justify-content-center flex-column text-end" >
          <h1 style={{ fontSize: "46px", color: "#FF7828" }}>Compromisso com o Cuidado</h1>
          <p style={{ fontSize: "30px", textAlign: "right" }}>Na CuidaMais, acreditamos que cada idoso merece uma abordagem personalizada e atenciosa para atender às suas necessidades exclusivas. Nossa proposta se baseia em oferecer uma plataforma de apoio virtual inovadora e acessível, o CuidaConnect, projetada para conectar, cuidar e enriquecer a vida dos nossos membros queridos.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Descript;
