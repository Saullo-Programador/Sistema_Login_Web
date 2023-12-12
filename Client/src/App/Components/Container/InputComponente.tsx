import React from 'react';
import * as I from '../Styles/InputComponente' 

interface InputComponenteProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
}

const InputComponente: React.FC<InputComponenteProps> = (props) => {
  return (
    <I.Container>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </I.Container>
  );
}

export default InputComponente;
