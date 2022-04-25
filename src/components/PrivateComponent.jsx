import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/Auth"

export const PrivateCoponents = ({children})=>{
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login" replace={false} />
    };
    return children;
}