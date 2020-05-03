import React from "react";
import { Container, Title, Description } from "./styled";


export default function Message() {
  return (
    <Container>
      <Title>Learn to cody by <br /> watching others</Title>
      <Description>
        See how experienced developers solve problems in real time.
        <br /> <br />
        Watching scripted tutorials is great, but understanding how
        <br /> developers think is invaluable
      </Description>
    </Container>
  )
}