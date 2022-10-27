import styled from "styled-components";
export const Contanier = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const IssueHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10rem;
`;
export const IssueContanier = styled.section`
  width: 865px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  gap: 2rem;
  padding: 2rem;
  margin-top: 5rem;
  background-color: ${(props) => props.theme["blue-500"]};
`;

export const LinksContanier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-blue"]};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Icons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: -0.75rem;
  gap: 2rem;
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
export const IssueContent = styled.article`
  display: grid;
  width: 865px;
  padding: 2rem;
`;
export const IssueText = styled.p`
  text-align: justify;
`;
export const IssueCode = styled.div`
  display: grid;
  padding: 1rem;
  background-color: ${(props) => props.theme["blue-500"]};
  border-radius: 8px;
  margin-top: 2rem;
`;
