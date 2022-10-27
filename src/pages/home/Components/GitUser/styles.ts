import styled from "styled-components";

export const Contanier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;
`;
export const UserContanier = styled.section`
  width: 865px;
  height: 215px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  gap: 2rem;
  padding: 2rem;
  margin-top: 5rem;
  background-color: ${(props) => props.theme["blue-500"]};
`;
export const UserPhoto = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 6px;
  overflow: hidden;
  img {
    width: 148px;
    height: 148px;
  }
`;
export const UserInfo = styled.article`
  display: grid;
`;

export const UserHeader = styled.header`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-blue"]};
  }
`;
export const UserDesc = styled.p`
  width: 600px;
  color: white;
  margin-top: 1rem;
`;
export const UserIcons = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 2rem;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  p {
    color: ${(props) => props.theme["gray-500"]};
  }
`;
