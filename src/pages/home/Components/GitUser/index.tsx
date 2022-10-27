import {
  ArrowSquareOut,
  UsersThree,
  Buildings,
  GithubLogo,
} from "phosphor-react";
import { useContext } from "react";
import { UserGithubContext } from "../../../../contexts/userContext";
import {
  Contanier,
  UserContanier,
  UserPhoto,
  UserInfo,
  UserHeader,
  UserDesc,
  UserIcons,
  Icon,
} from "./styles";

export const GitUser = () => {
  const { userGithub } = useContext(UserGithubContext);
  const { login, avatar_url, name, bio, followers, company, html_url } =
    userGithub;
  return (
    <Contanier>
      <UserContanier>
        <UserPhoto>
          <img src={avatar_url} />
        </UserPhoto>
        <UserInfo>
          <UserHeader>
            <h2>{name}</h2>
            <a href={html_url} target="blank">
              GITHUB <ArrowSquareOut size={20} />
            </a>
          </UserHeader>
          <UserDesc>{bio}</UserDesc>
          <UserIcons>
            <Icon>
              <GithubLogo size={22} color="#7C7C8A" />
              <p>{login}</p>
            </Icon>
            <Icon>
              <Buildings size={22} color="#7C7C8A" />
              <p>{company ? company : "---"}</p>
            </Icon>
            <Icon>
              <UsersThree size={22} color="#7C7C8A" />
              <p>{followers} seguidores</p>
            </Icon>
          </UserIcons>
        </UserInfo>
      </UserContanier>
    </Contanier>
  );
};
