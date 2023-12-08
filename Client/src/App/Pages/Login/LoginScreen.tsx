import React, { useContext, useState } from 'react'
import '../../Styles/Login/LoginStyles.css'
import { AuthContext } from '../../Shared/Contexts/Auth/AuthContexts';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    //! 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email && password){
            const isLogged = await auth.signin(email,password)
            if(isLogged){
                navigate('/')
            } else{
                alert("Não deu certo.")
            }

        }
    }

  return (
    <div className='container-principal-login'>
        <h2>Pagina Fechada</h2>

        <input 
            type="email" 
            value={email} 
            placeholder='Digite seu email'
            onChange={e => setEmail(e.target.value)}
        />

        <input 
            type="password" 
            value={password} 
            placeholder='Digite sua senha'
            onChange={e => setPassword(e.target.value)}
        />

        <button onClick={  handleLogin }> Fazer Login </button>
    </div>
  )
}

export default LoginScreen