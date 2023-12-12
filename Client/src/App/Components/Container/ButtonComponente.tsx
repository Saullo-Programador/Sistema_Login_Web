import React from 'react'
import * as B from '../Styles/ButtonComponente'
// Importações...


interface ButtonComponenteProps {
  titulo: string;
  onClick: () => void | Promise<void>;
  children?: React.ReactNode; // Adiciona a propriedade children ao tipo
}

const ButtonComponente: React.FC<ButtonComponenteProps> = (props) => {
  const handleButtonClick = async () => {
    try {
      await props.onClick();
    } catch (error) {
      console.error("Erro ao processar o clique:", error);
    }
  };
  return (
    <B.Button onClick={handleButtonClick}>
      {props.children || props.titulo}
    </B.Button>
  );
}

export default ButtonComponente;
