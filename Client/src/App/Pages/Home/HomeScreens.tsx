import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UseApi from "../../Shared/Hooks/UseApi";
import { AuthContext } from "../../Shared/Contexts/Auth/AuthContext";

const HomeScreens = () => {
    const auth = useContext(AuthContext)
    const { signout } = UseApi();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home</h2>
            <p>Olá {auth?.user?.name}, seja bem vindo! </p>
            <button onClick={() => [signout(), navigate("/")]}>
                Sair
            </button>
        </div>
    );
}

export default HomeScreens