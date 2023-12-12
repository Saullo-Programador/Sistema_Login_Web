import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";
import ButtonComponente from "../../Components/Container/ButtonComponente";
import InputComponente from "../../Components/Container/InputComponente";
import * as S from '../../Styles/Global/SignupSigninStyles'

const SignupScreens = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailConf, setEmailConf] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { signup } = UseApi();

  const handleSignup = async () => {
    if (!email || !emailConf || !senha || !name) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }
    try {
      const res = signup(email, senha, name);

      if (res) {
        setError(res);
      } else {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      setError("Erro ao cadastrar usuário");
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Title>Cadastro</S.Title>
          <InputComponente
            type="text"
            placeholder="Digite seu Name"
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          <InputComponente
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <InputComponente
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <InputComponente
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
        <S.labelError><p dangerouslySetInnerHTML={{ __html: error }}></p></S.labelError>
        <ButtonComponente onClick={handleSignup} titulo={"Inscrever-se"}></ButtonComponente>
        <S.LabelSignup>
          Já tem uma conta?
          <S.Strong>
            <Link to="/">&nbsp;Entre</Link>
        </S.Strong>
        </S.LabelSignup>
      </S.Content>
    </S.Container>
  );
};

export default SignupScreens;