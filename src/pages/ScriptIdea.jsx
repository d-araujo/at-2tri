import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Ideia = () => {
  return (
    <Container>
      <Col>
        <Col
          md={12}
          className="text-container d-flex align-items-center justify-content-center flex-column">
          <h1 style={{ fontSize: "50px", color: "#FF7828" }}>Mais nova iniciativa!</h1>
          <br />
          <p style={{ fontSize: "30px", textAlign: "center" }}>O CuidaConnect não é apenas uma plataforma tecnológica; é uma rede de apoio virtual cuidadosamente projetada para estender o alcance dos laços familiares e da comunidade. Com recursos intuitivos e interativos, o CuidaConnect permite que idosos, cuidadores e voluntários se unam em um ambiente acolhedor e inclusivo.</p>
          <p style={{ fontSize: "30px", textAlign: "center" }}>Com a capacidade de agendar atividades, consultas médicas e compromissos com facilidade, o CuidaConnect garante que o cuidado seja bem planejado e eficiente. Ao unir tecnologia e cuidado humano, estamos proporcionando uma abordagem completa que honra a individualidade de cada idoso.</p>
          <br />
        </Col>
      </Col>
    </Container>
  );
};

export default Ideia;
