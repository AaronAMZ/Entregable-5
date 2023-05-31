import { useContext } from "react"
import { UserNameContext } from "../context/UserNameContext"
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    // para leer el valor de un context se necesita el Contexto y el hook useContext

    const {userName} = useContext(UserNameContext);
    const location = useLocation();

    if(userName) return <>{children}</>;
    else return <Navigate to="/" state={{from: location.pathname + location.search}}/>
};



export default ProtectedRoute