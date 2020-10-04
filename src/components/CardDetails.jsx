import React from "react";
import "../style/detalhes.css";

const CardDetails = (props) => {
  return (
    <div className="conteiner">
      <div className="cabecalho">
        <h1>{props.detalhe}</h1>
        <p>{props.custo}</p>
      </div>
      <div className="info">
        <p>{props.atributo}</p>
        <p>{props.descricao}</p>
      </div>
      <div className="status">
        <p>{props.ataque}</p>
        <p>{props.resistencia}</p>
      </div>
      <h2>{props.fraca === true ? "A carta é um lixo" : "A carta é boa"}</h2>
    </div>
  );
};

export default CardDetails;
