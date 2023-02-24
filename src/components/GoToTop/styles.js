import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  z-index: 11;
  padding: 15px;
  background: var(--skeleton);
  box-shadow: var(--darkShadow);
  border-radius: 5px;
  transition: var(--fast);
  opacity: 0;
  padding-bottom: 10px;

  :hover {
    background: var(--light);
  }

  img {
    width: 25px;
  }
`;
