import { createContext } from "react";

interface User {
  name: string;
  email: string;
  password?: string;
}

interface AuthContextType {
  user: User | null;
  signed: boolean;
  signin: (email: string, password: string) => void | string;
  signup: (email: string, password: string, name: string) => void | string;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
