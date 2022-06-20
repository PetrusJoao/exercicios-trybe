import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

const content = conteudos.map((info) => (
  <ul>
    <li key={info.conteudo}>
      <h3>O conteúdo é: {info.conteudo}</h3>
      <p>Status: {info.status}</p>
      <p>Bloco: {info.bloco}</p>
    </li>
  </ul>
));

class Content extends React.Component {
  render() {
    return <div>{content}</div>;
  }
}

export default Content;
