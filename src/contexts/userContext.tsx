import {
  useState,
  createContext,
  ReactNode,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { api } from "../lib/Axios";

type GithubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  followers: number;
  company?: string;
};
const initialState = {
  login: "",
  avatar_url: "",
  html_url: "",
  name: "",
  bio: "",
  followers: 0,
  company: "",
};

type UserGithubContext = {
  userGithub: GithubUser;
};

export const UserGithubContext = createContext({} as UserGithubContext);

export function useGithubUser() {
  return useContext(UserGithubContext);
}

type UserGithubProviderProps = {
  children: ReactNode;
};

export function UserGithubProvider({ children }: UserGithubProviderProps) {
  const [userGithub, setUserGithub] = useState<GithubUser>(initialState);

  async function fetchUser() {
    const response = await api.get("/users/JosephNovy");
    setUserGithub(response.data);
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserGithubContext.Provider value={{ userGithub }}>
      {children}
    </UserGithubContext.Provider>
  );
}
