import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByTypeId } from "../../services/getPokemonsByTypeId";

export const pokedexLoader = async ({request}) => {
    const url = new URL(request.url);
    const pokemonName = url.searchParams.get("pokemonName") ?? "";
    const pokemonTypeId = url.searchParams.get("pokemonType") ?? ""; 
    
    let pokemons;

    

    // if(pokemonName) pokemons = pokemons.filter((pokemon) => 
    // pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))

    if(pokemonName && pokemonTypeId) {
        // Filtros cruzados: se envía tanto nombre como tipo.
        pokemons = await getPokemonsByTypeId(pokemonTypeId);
        pokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    } else if (!pokemonName && !pokemonTypeId) {
        // Ningún filtro, obtener todos los pokemones
        pokemons = await getAllPokemons();
    } else if (pokemonName) {
        // Solo nombre, buscar los pokemones que contengan ese valor en sus nombres.
        pokemons = await getAllPokemons();
        pokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()));
    } else if (pokemonTypeId) {
        // Solo tipo, buscar los pokemones que pertenezcan a ese tipo.
        pokemons = await getPokemonsByTypeId(pokemonTypeId);
    }

    return { pokemons, pokemonName, pokemonTypeId };
}