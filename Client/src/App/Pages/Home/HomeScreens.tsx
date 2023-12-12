import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";
import { AuthContext } from "../../Shared/Contexts/Auth/AuthContext";
import * as H from '../../Styles/Global/SignupSigninStyles'
import ButtonComponente from "../../Components/Container/ButtonComponente";

const HomeScreens = () => {
    const auth = useContext(AuthContext)
    const { signout } = UseApi();
    const navigate = useNavigate();
    

    return (
        <H.Container>
            <H.ContentHome>
                <H.Title>Home</H.Title>
                <H.Label>Olá {auth?.user?.name}, seja bem vindo! </H.Label>
                <ButtonComponente titulo={"Sair"} onClick={() => {signout(); navigate("/");}}></ButtonComponente>
            </H.ContentHome>
        </H.Container>
    );
}

export default HomeScreens