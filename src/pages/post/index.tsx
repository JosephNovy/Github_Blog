import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dateFormatter } from "../../utils/formatter";
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
import { api } from "../../lib/Axios";

interface IssueProps {
  html_url: string;
  title: string;
  created_at: Date;
  comments: number;
  body: string;
  user: string;
}
const initialState = {
  html_url: "",
  title: "",
  created_at: new Date(),
  comments: 0,
  body: "",
  user: "",
};

export const Post = () => {
  const { number } = useParams();
  const [issuePost, setIssuePost] = useState<IssueProps>(initialState);
  async function fetchIssue() {
    const { data } = await api.get(
      `/repos/JosephNovy/Github_Blog/issues/${number}`
    );
    setIssuePost(data);
  }

  const { html_url, title, created_at, comments, body, user } = issuePost;

  useEffect(() => {
    fetchIssue();
  }, []);
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
            <a href={html_url} target="blank">
              <span>Ver no GITHUB</span>
              <ArrowSquareOut size={20} />
            </a>
          </LinksContanier>
          <Title>
            <h2>{title}</h2>
          </Title>
          <Icons>
            <Icon>
              <GithubLogo size={22} color="#7C7C8A" />
              <p>{dateFormatter.format(new Date(created_at))}</p>
            </Icon>
            <Icon>
              <Calendar size={22} color="#7C7C8A" />
              <p>{user.login}</p>
            </Icon>
            <Icon>
              <Chats size={22} color="#7C7C8A" />
              <p>{comments}comentários</p>
            </Icon>
          </Icons>
        </IssueContanier>
      </IssueHeader>
      <IssueContent>
        <IssueText>{body}</IssueText>
      </IssueContent>
    </Contanier>
  );
};
