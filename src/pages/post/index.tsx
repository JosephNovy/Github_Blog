import React, { useEffect, useState, useContext } from "react";
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
} from "./styles";
import { api } from "../../lib/Axios";
import { UserGithubContext } from "../../contexts/userContext";

interface IssueProps {
  html_url: string;
  title: string;
  created_at: Date;
  comments: number;
  body: string;
  user: object;
}
const initialState = {
  html_url: "",
  title: "",
  created_at: new Date(),
  comments: 0,
  body: "",
  user: {},
};

export const Post = () => {
  const { number } = useParams();
  const [issuePost, setIssuePost] = useState<IssueProps>(initialState);
  const { userGithub } = useContext(UserGithubContext);

  async function fetchIssue() {
    const { data } = await api.get(
      `/repos/JosephNovy/Github_Blog/issues/${number}`
    );
    setIssuePost(data);
  }
  const { login } = userGithub;
  const { html_url, title, created_at, comments, body } = issuePost;

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
              <p>{login}</p>
            </Icon>
            <Icon>
              <Calendar size={22} color="#7C7C8A" />
              <p>{dateFormatter.format(new Date(created_at))}</p>
            </Icon>
            <Icon>
              <Chats size={22} color="#7C7C8A" />
              <p>{comments} comentários</p>
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
