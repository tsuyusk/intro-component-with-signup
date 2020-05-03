import React from "react";
import { Container, Message } from "./styled";

export default function FloatingMessage() {
  return (
    <Container>
      <Message>
        <b>Try it free 7 days</b> then $20/mo thereafter.
      </Message>
    </Container>
  )
}