import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import ProtectedRoute from "../Components/ProtectedRoute";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

export const router = createBrowserRouter([
    // El router de tipo "Browser" siempre necesita que se configure correctamente la plataforma de despliegue (Netlify, Vercel, Servidor)
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/pokedex",
        element: (<ProtectedRoute>
                    <Layout/>
                 </ProtectedRoute>),
        children: [
            {
                path: "",
                element: <Pokedex/>,
                loader: pokedexLoader,
            },
            {
                path: ":pokemonId",
                element: <PokemonDetail/>

            }
        ]
    }
]);