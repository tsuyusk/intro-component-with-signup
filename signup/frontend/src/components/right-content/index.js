import React from "react";
import styled from "styled-components";
import FloatingMessage from  "./floatMessage";
import Formulary from "./formulary";

const GridContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-areas:
  "mmessage"
  "formulary";
  left: 55%;
  top: 10%;
`

export default function RightContent() {
  return (
    <GridContainer>
      <FloatingMessage />
      <Formulary />
    </GridContainer>
  )
}