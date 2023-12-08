import { useContext } from "react"
import { AuthContext } from "./AuthContexts"
import LoginScreen from "../../../Pages/Login/LoginScreen";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContext);
    
    if (!auth.user){
        return <LoginScreen/>
    }

    return children
}