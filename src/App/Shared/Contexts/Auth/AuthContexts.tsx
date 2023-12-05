import { createContext} from "react"
import { User } from "../../Types/User";

export type AuthContextsType = {
    user:User | null;
    signin: (email:string, password: string) => Promise<boolean>;
    signout: () => void;
} 

export const AuthContexts = createContext<AuthContextsType>(null!);