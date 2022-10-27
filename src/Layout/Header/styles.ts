import styled from "styled-components";
import headerBackground from "../../assets/Cover.png";

export const HeaderContanier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;
`;

export const HeaderBg = styled.div`
  height: 300px;
  width: 100%;
  background: url(${headerBackground}) center/cover no-repeat;
`;
