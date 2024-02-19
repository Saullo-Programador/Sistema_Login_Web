import styled from 'styled-components'

export const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    color: #ffff;
    background-color: blue;
    border-radius: 15px;
    padding: 16px 20px;
    width: 100%;
    font-size: 19px;
    letter-spacing: 1.5px;
    justify-content: center;
    align-items: center;
    display: flex;

    &:hover {
        background: #11145A;
        scale: 1.01;
        transition: 500ms ;
    }
`