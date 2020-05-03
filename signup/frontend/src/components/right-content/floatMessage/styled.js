import styled from "styled-components";

export const Container = styled.div `
  grid-area: "message";
  border-radius: 10px;
  background-color: hsl(248, 32%, 49%);
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 10px 1px 1px #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Message = styled.p `
  color: #FFFFFF;
  text-align: center;
`