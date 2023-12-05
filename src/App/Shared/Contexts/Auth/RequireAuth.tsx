import { useContext } from "react"
import { AuthContexts } from "./AuthContexts"
import LoginScreen from "../../../Pages/Login/LoginScreen";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContexts);
    
    if (!auth.user){
        return <LoginScreen/>
    }

    return children
}