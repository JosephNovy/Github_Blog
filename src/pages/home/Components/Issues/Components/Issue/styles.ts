import styled from "styled-components";

export const IssueContainer = styled.a`
  display: grid;
  width: 416px;
  height: 260px;
  padding: 2rem;
  color: white;
  text-decoration: none;
  background-color: ${(props) => props.theme["blue-500"]};
  border-radius: 8px;

  cursor: pointer;
  border: 2px solid;
  border-color: ${(props) => props.theme["blue-500"]};

  :hover {
    border: 2px solid;
    border-color: ${(props) => props.theme["blue-300"]};
  }
  p {
    size: 16px;
    color: white;
    text-decoration: none;
    color: inherit;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
  gap: 2rem;
  span {
    text-align: end;
    font-size: 12px;
    color: ${(props) => props.theme["base-text"]};
  }
`;
export const Title = styled.h2`
  color: white;
  width: 60%;
  font-size: 20px;
  text-align: justify;
  margin-bottom: 1.25rem;
`;
