import { useParams } from "react-router-dom";
import "./PokemonDetail.css"

const PokemonDetail = () => {

    const {pokemonId} = useParams();

  return (
    
    <div className="pokemon_detail">
        <h1>Pokemon Detail</h1>
        <p>Estamos trabajando en esta sección, muy pronto estará disponible</p>
        <div className="image">
        <img src="https://freepngimg.com/thumb/pokemon/20148-3-pokeball-file.png" alt="" />

        </div>
    </div>


  )
}

export default PokemonDetail