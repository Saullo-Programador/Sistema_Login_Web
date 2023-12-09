import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";

const SigninScreens: React.FC = () => {
    const { signin } = UseApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    setError("");
  };

    

    return (
        <div>
            <h2> Pagina de Login</h2>

            <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                value={senha}
                onChange={handlePasswordChange}
                placeholder="Digite sua senha"
            />
            <p>{error}</p>
            <button onClick={handleLogin}>Logar</button>
            <p> Não tem uma conta?</p>
            <div>
              <Link to="/signup">&nbsp;Registre-se</Link>
            </div>
        </div>
    );
}

export default SigninScreens;