import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";

const SignupScreens = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailConf, setEmailConf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { signup } = UseApi();

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div>
      <h2> Pagina de Cadastro</h2>
        <input
          type="text"
          placeholder="Digite seu Name"
          value={name}
          onChange={(e) => [setName(e.target.value), setError("")]}
        />
        <input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <p>{error}</p>
        <button onClick={handleSignup}> Inscrever-se </button>
        <p>Já tem uma conta?</p>
        <div>
          <Link to="/">&nbsp;Entre</Link>
        </div>
    </div>
  );
};

export default SignupScreens;