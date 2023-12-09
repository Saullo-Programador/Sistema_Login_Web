import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../Types/User";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage).find(
        (storedUser: User) => storedUser.email === JSON.parse(userToken).email
      );

      if (hasUser) {
        setUser(hasUser);
      }
    }
  }, []);

  const signin = (email: string, password: string): void | string => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage.find((storedUser: User) => storedUser.email === email);

    if (hasUser) {
      if (hasUser.email === email && hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ ...hasUser, password }); // Mantenha a estrutura do objeto User
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (email: string, password: string): void | string => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd") || "[]");

    const hasUser = usersStorage.find((storedUser: User) => storedUser.email === email);

    if (hasUser) {
      return "Já existe uma conta com este e-mail";
    }

    const newUser: User[] = [...usersStorage, { email, password }];
    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = (): void => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const authContextValue = {
    user,
    signed: !!user,
    signin,
    signup,
    signout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
