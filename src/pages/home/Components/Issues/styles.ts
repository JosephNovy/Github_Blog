import styled from "styled-components";

export const Contanier = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

export const SearchContanier = styled.div`
  display: grid;
  width: 865px;
  input {
    padding: 12px 16px 12px 16px;
    border-radius: 6px;
    border-color: ${(props) => props.theme["blue-500"]};
    background-color: ${(props) => props.theme["base-input"]};
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  p {
    size: 14px;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const IssuesContainer = styled.div`
  display: grid;
  width: 865px;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;
