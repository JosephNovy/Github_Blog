import React from "react";
import { IssueContainer, Header, Title } from "./styles";
import { dateFormatter } from "../../../../../../utils/formatter";

interface IssueProps {
  body: string;
  url: string;
  created_at: Date;
  title: string;
}

export const Issue = ({ body, url, title, created_at }: IssueProps) => {
  return (
    <IssueContainer href={url}>
      <Header>
        <Title>{title}</Title>
        <span>{dateFormatter.format(new Date(created_at))}</span>
      </Header>
      <p>{body.substring(0, 200)}</p>
    </IssueContainer>
  );
};
