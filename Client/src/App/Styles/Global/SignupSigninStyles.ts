import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 2px 23px 13px rgba(0,0,0,0.1);
  background-color: white;
  max-width: 320px;
  padding: 20px;
  border-radius: 20px;
`;

export const ContentHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border: none;
  background: none;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  width: 92%;
  margin: -5px 0px -5px 0px;
`;

export const LabelSignup = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: blue;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin: 2px 0px 20px 0px;
`;