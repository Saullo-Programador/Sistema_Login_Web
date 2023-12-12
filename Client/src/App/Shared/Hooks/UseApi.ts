import { useContext } from "react";
import { AuthContext} from "../Contexts/Auth/AuthContext";

const UseApi = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
};

export default UseApi;
