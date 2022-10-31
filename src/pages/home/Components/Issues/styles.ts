import styled from "styled-components";

export const Contanier = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const SearchContanier = styled.div`
  display: grid;
  width: 865px;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 715px;
      margin-right: 1rem;
      padding: 12px 16px 12px 16px;
      border-radius: 6px;
      color: white;
      border-color: ${(props) => props.theme["blue-500"]};
      background-color: ${(props) => props.theme["base-input"]};
    }
    button {
      width: 135px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: 0.5rem;
      border-color: ${(props) => props.theme["blue-300"]};
      color: ${(props) => props.theme["blue-300"]};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      span {
        font-size: 1.25rem;
      }
      &:hover {
        background: ${(props) => props.theme["blue-500"]};
        border-color: ${(props) => props.theme["blue-500"]};
        color: white;
      }
    }
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
  margin-top: 3rem;
`;
