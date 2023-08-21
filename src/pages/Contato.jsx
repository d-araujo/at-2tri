import Menu from "./Menu";
import Formulario from "./Formulario";

function Contat() {
  return (
    <div>
      <Menu/>
      <div style={{ marginTop: 50, marginBottom: 200 }}>
        <h1 className="container" style={{ fontSize: '40px', color: "#FF7828" }}>Envie sua mensagem para saber mais sobre nosso projeto!</h1>
        <br/>
        <Formulario />
      </div>
    </div>
  );
}

export default Contat;
