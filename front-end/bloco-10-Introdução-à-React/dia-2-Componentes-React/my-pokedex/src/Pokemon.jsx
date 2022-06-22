import React, { Component } from "react";
import pokemons from "./data";

const PokeInfo = (value) => {
  return (
    <li>{value}</li>
  );
}

class Pokemon extends Component {
  render() {
    const { id, name, type, averageWeight, image } = this.props.pokemon;
    return (
      // pokemons.map((pokemon) => PokeInfo(pokemon.name))
      <>
      <p>Nome do Pokemon: {name}</p>
      </>
    )
  }
}

export default Pokemon;