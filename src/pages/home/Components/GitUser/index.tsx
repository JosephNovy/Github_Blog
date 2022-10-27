import {
  ArrowSquareOut,
  UsersThree,
  Buildings,
  GithubLogo,
} from "phosphor-react";
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
  return (
    <Contanier>
      <UserContanier>
        <UserPhoto>
          <img src="https://avatars.githubusercontent.com/u/105006945?s=400&u=2d295d9f4947c6f0ad1ec3587e258580cf0195d1&v=4" />
        </UserPhoto>
        <UserInfo>
          <UserHeader>
            <h2>User Name</h2>
            <a href="">
              GITHUB <ArrowSquareOut size={20} />
            </a>
          </UserHeader>
          <UserDesc>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </UserDesc>
          <UserIcons>
            <Icon>
              <GithubLogo size={22} color="#7C7C8A" />
              <p>cameronwll</p>
            </Icon>
            <Icon>
              <Buildings size={22} color="#7C7C8A" />
              <p>Rocketseat</p>
            </Icon>
            <Icon>
              <UsersThree size={22} color="#7C7C8A" />
              <p>32 seguidores</p>
            </Icon>
          </UserIcons>
        </UserInfo>
      </UserContanier>
    </Contanier>
  );
};
