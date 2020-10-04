import React, { useState } from "react";
import { cartas } from "../cartas";
import Card from "./Card";
import CardDetails from "./CardDetails";

const Cards = () => {
  const [selecionado, setSelecionado] = useState(null);

  const handleSelecionado = (card) => {
    setSelecionado(card);
    console.log(card);
  };

  return (
    <div className="cartas">
      {cartas.map((i, index) => (
        <Card
          key={index}
          nome={i.nome}
          custo_mana={i.custo_mana}
          atributos={i.atributos}
          descricao={i.descricao}
          ataque={i.ataque}
          resistencia={i.resistencia}
          select={() => handleSelecionado(i)}
        />
      ))}
      {selecionado && (
        <CardDetails
          detalhe={selecionado.nome}
          custo={selecionado.custo_mana}
          atributo={selecionado.atributo}
          descricao={selecionado.descricao}
          ataque={selecionado.ataque}
          resistencia={selecionado.resistencia}
          fraca={selecionado.resistencia < 3 ? true : false}
        />
      )}
    </div>
  );
};

export default Cards;
