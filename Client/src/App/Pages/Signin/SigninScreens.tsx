import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";
import ButtonComponente from "../../Components/Container/ButtonComponente";
import * as S from '../../Styles/Global/SignupSigninStyles'
import InputComponente from "../../Components/Container/InputComponente";


const SigninScreens: React.FC = () => {
  const { signin } = UseApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const res = await signin(email, senha);

      if (res) {
        setError(res);
        return;
      }

      navigate("/home");
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
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
    <S.Container>
      <S.Content>
        <S.Title>Login</S.Title>
        <InputComponente
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Digite seu e-mail"
        />
        <InputComponente
          type="password"
          value={senha}
          onChange={handlePasswordChange}
          placeholder="Digite sua senha"
        />
        <S.labelError><p dangerouslySetInnerHTML={{ __html: error }}></p></S.labelError>
        <ButtonComponente onClick={handleLogin} titulo={"Logar"}></ButtonComponente>
        <S.LabelSignup>
          Não tem uma conta?
          <S.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </S.Strong>
        </S.LabelSignup>
      </S.Content>
    </S.Container>
  );
};

export default SigninScreens;
