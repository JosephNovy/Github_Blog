import React from "react";
import { Issue } from "./Components/Issue";
import { Contanier, SearchContanier, Header, IssuesContainer } from "./styles";

export const Issues = () => {
  return (
    <Contanier>
      <SearchContanier>
        <Header>
          <h3>Publicações</h3>
          <span>
            <p>6 publicações</p>
          </span>
        </Header>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchContanier>
      <IssuesContainer>
        <Issue />
      </IssuesContainer>
    </Contanier>
  );
};
