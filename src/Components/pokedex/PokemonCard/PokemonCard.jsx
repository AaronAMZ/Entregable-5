import { useEffect, useState } from "react"
import { getPokemonById } from "../../../services/getPokemonById"
import "./PokemonCard.css"

const PokemonCard = ({pokemonId}) => {
    const [pokemon, setPokemon] = useState(null);

    const statsTarget = ["hp", "attack", "defense", "speed"];
    const stats = pokemon?.stats.filter(stat => statsTarget.includes(stat.name.toLowerCase())
    );

    useEffect(() => {
        const loadPokemon = async () => {
            const pokemonData = await getPokemonById(pokemonId);
            setPokemon(pokemonData);
        };

        loadPokemon();
    }, [])

  return (
    <article className="pokemon_card">
        {!pokemon && <p>Loading...</p>}

        {pokemon && (
        <div className="pokemon_card_all">
            <div className="pokemon_card_img">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>

            <h2 className="pokemon_card_title">{pokemon.name}</h2>
            {/* <hr /> */}
            <section>
                <h3>Tipo</h3>
                {/* <hr /> */}
                    <ul className="pokemon_card_list_types">
                        {pokemon.types.map((type) => <li key={type} className="pokemon_card_item">{type}</li>)}
                    </ul>
                    {/* <hr /> */}
            </section>

            <section>
                <h3>Stats</h3>
                {/* <hr /> */}
                    <ul className="pokemon_card_list">
                        {stats.map((stat) => (
                        <li key={stat.name} className="pokemon_card_item">
                            <em>{stat.name.toUpperCase()}</em>
                            <span>{stat.value}</span>
                        </li>

                        ))}
                    </ul>
            </section>
        </div>

        )}


    </article>
  )
}

export default PokemonCard