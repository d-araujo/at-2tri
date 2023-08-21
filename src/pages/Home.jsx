import React from "react";
import Carrosel from "./Image";
import Menu from "./Menu";
import Footer from "./Footer";
import Descript from "./PropostaScript";
import Impact from "./ScriptInfo";
import Ideia from "./ScriptIdea";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <Carrosel />
      <div>
        <div className="conteudo">
          <Ideia />
        </div>
        <div className="conteudo">
          <div>
            <Descript />
          </div>
          <div className="conteudo">
            <Impact />
          </div>
        </div>
        <div className="conteudo">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
