import styled from 'styled-components';

export const Container = styled.div`
  grid-area: "formulary";
  background-color: #FFFFFF;
  padding: 25px;
  width: 400px;
  box-shadow: 0px 10px 1px 0px #000000D0;
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
  display: "flex";  
  border: none;
  width: 100%;
  height: 45px;
  color: #FFFFFF;
  background-color: hsl(154, 59%, 51%);
`;

export const LittleText = styled.p`
  margin-top: 10px;
  color: #00000080;
  font-size: 12px;
  span {
    font-size: 12px;
    color: #C8707A;
    :before {
      content: " "
    }
    :hover {
      cursor: pointer;
    }
  }
`;

export const Error = styled.span `
  color: #FF0000;
  margin: 5px;
`