import React from "react";
import { IssueContainer, Header, Title } from "./styles";

export const Issue = () => {
  const str =
    "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.";
  return (
    <IssueContainer>
      <Header>
        <Title>JavaScript data types and data structures</Title>
        <span>Há 1 dia</span>
      </Header>
      <p>{str.substring(0, 200)}</p>
    </IssueContainer>
  );
};
