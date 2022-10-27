import React from "react";
import {
  CaretLeft,
  ArrowSquareOut,
  GithubLogo,
  Calendar,
  Chats,
} from "phosphor-react";
import { Header } from "../../Layout/Header";
import {
  Contanier,
  IssueHeader,
  IssueContanier,
  LinksContanier,
  Title,
  Icons,
  Icon,
  IssueContent,
  IssueText,
  IssueCode,
} from "./styles";

export const Post = () => {
  return (
    <Contanier>
      <Header />
      <IssueHeader>
        <IssueContanier>
          <LinksContanier>
            <a href="/">
              <CaretLeft size={22} />
              <span>Voltar</span>
            </a>
            <a href="/">
              <span>Ver no GITHUB</span>
              <ArrowSquareOut size={20} />
            </a>
          </LinksContanier>
          <Title>
            <h2>JavaScript data types and data structures</h2>
          </Title>
          <Icons>
            <Icon>
              <GithubLogo size={22} color="#7C7C8A" />
              <p>Há 1 dia</p>
            </Icon>
            <Icon>
              <Calendar size={22} color="#7C7C8A" />
              <p>cameronwll</p>
            </Icon>
            <Icon>
              <Chats size={22} color="#7C7C8A" />
              <p>5 comentários</p>
            </Icon>
          </Icons>
        </IssueContanier>
      </IssueHeader>
      <IssueContent>
        <IssueText>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
          <br />
          <br />
          Dynamic typing <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </IssueText>
        <IssueCode>
          let foo = 42; // foo is now a number <br />
          foo = ‘bar’; // foo is now a string
          <br /> foo = true; // foo is now a boolean
        </IssueCode>
      </IssueContent>
    </Contanier>
  );
};
