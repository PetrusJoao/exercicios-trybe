import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    console.log(this)
    console.log('Clicou no botão!')
  }
  handleClick2() {
    console.log('Apertou o botão?')
  }
  handleClick3() {
    console.log('Cutucou o botão... 🤭')
  }
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <button onClick={this.handleClick} >Botão 1</button>
        <button onClick={this.handleClick2} >Botão 2</button>
        <button onClick={this.handleClick3} >Botão 3</button>
      </div>
    )
  }
}

export default App;
