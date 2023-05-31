import { useContext, useEffect, useState } from "react"
import "./Pokedex.css"
import { UserNameContext } from "../../context/UserNameContext"
import PokemonList from "../../Components/pokedex/PokemonList/PokemonList";
import { useLoaderData } from "react-router-dom";
import FiltersForm from "../../Components/pokedex/FiltersForm/FiltersForm";

const Pokedex = () => {

    const {pokemons, pokemonName, pokemonTypeId} = useLoaderData();
    const { userName } = useContext(UserNameContext);

  return (
    <section className="pokedex_container">
        <p className="pokedex_message">
            <em className="pokedex_message_username">Bienvenido {userName}</em>, aquí podrás encontrar tu pokemón favorito.
        </p>

        <FiltersForm nameInitial={pokemonName} typeInitial={pokemonTypeId}/>

        {!pokemons.length ? (<p>No hay pokemones</p>) : (
        <PokemonList pokemons={pokemons}/>
        )}
    </section>
  )
}

export default Pokedex