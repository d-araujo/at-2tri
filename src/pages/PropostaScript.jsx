import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Descript = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="text-container d-flex justify-content-center flex-column text-start">
            <h1 style={{ fontSize: '50px', color: "#FF7828" }}>Nossa proposta</h1><br/>
            <p style={{ fontSize: '30px' }}>Bem-vindo(a) à CuidaMais, uma ONG dedicada a proporcionar assistência integral e inovadora aos nossos queridos idosos. Reconhecemos a importância de garantir que nossos idosos desfrutem de uma qualidade de vida excepcional e enriquecedora em todas as fases do envelhecimento.</p>
        </Col>
        <Col md={6} className="image-container d-flex align-items-end justify-content-end">
          <img
            src="https://www.ongsbrasil.com.br/images/ong-de-idosos-poster.jpg"
            alt="Imagem"
            className="img-fluid shadow"
            style={{
              maxHeight: '700px',
              width: '80%',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Descript;
