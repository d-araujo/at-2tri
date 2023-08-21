import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <br />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section container">
            <div className="d-flex ">
            <img
              alt=""
              src="/src/assets/logo-at.png"
              height="30"
              className="d-inline-block align-top"
            />
            <h3>ㅤONG Cuida Mais</h3>
            </div>
            <p>
            Unindo gerações, CuidaMais promove um presente de carinho e um futuro de cuidado.
            </p>
          </div>
          <div className="footer-section">
            <h3>Nosso site</h3>
            <ul>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li>
                <a href="/sobre">Sobre</a>
              </li>
              <li>
                <a href="/contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} ONG Cuida Mais. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
