import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: fixed;
  z-index: 20;
  height: 70px;
  width: 100%;
`;


export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`;

export const Box = styled.div`
  height: 100%;
  gap: 40px;

  h1 {
    font-size: var(--big);

    span {
      color: var(--primary);
    }
  }

  p {
    cursor: pointer;
    :hover {
      color: var(--primary);
    }
  }

  p,
  button {
    font-size: var(--medium);
  }

  .login {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 40px;
    border-radius: 8px;

    :hover {
      opacity: 0.75;
    }
  }
`;
