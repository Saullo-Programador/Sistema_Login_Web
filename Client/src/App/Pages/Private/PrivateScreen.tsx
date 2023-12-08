import React, { useContext } from 'react'
import { AuthContext } from '../../Shared/Contexts/Auth/AuthContexts'

export const Private = () => {
  const auth = useContext(AuthContext)
  return (
    <div>
      <h4>Pagina privada </h4>
      <p>Olá {auth.user?.name}, seja bem vindo!</p>
    </div>
  )
}
