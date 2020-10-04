import React from "react";

const card = (props) => {
  return (
    <div onClick={props.select} className="carta">
      <div className="container">
        <h3>{props.nome}</h3>
        <p>{props.custo_mana}</p>
        {props.atributos.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
        <p>{props.descricao}</p>
        <div className="status">
          <p>{props.ataque}</p>
          <p>/</p>
          <p>{props.resistencia}</p>
        </div>
      </div>
    </div>
  );
};

export default card;
