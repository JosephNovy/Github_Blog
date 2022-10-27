import { Header } from "../../Layout/Header";
import { GitUser } from "./Components/GitUser";
import { Issues } from "./Components/Issues";
import { HomeContanier } from "./styles";

export const Home = () => {
  return (
    <HomeContanier>
      <Header />
      <GitUser />
      <Issues />
    </HomeContanier>
  );
};
