import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  justify-content: start;
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  position: relative;
  padding: 150px 0;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  z-index: 100;

  img,
  p,
  .coment {
    position: absolute;
  }

  img,
  p {
    z-index: 200;
  }

  p {
    background-color: var(--light);
    box-shadow: 0px 25px 60px -30px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    font-size: var(--medium);
    color: var(--form);
    width: 240px;
    font-weight: 900;
    padding: 24px;
  }

  .w1 {
    z-index: -1;
    left: -287px;
    top: -276px;
  }

  .w2 {
    right: -460px;
    bottom: -419px;
    z-index: -1;
  }

  .c1 {
    left: 300px;
    top: 50%;
    p {
      left: 120px;
    }
  }

  .c2 {
    right: 50%;
    top: 70%;
    z-index: 200;
    p {
      width: 280px;
      left: 100px;
      top: 20px;
    }
  }

  .c3 {
    right: 40%;
    top: 40%;

    p {
      width: 280px;
      left: 100px;
      top: 70px;
    }
  }

  .c4 {
    right: 15%;
    top: 20%;
    p {
      width: 280px;
      right: -50px;
      top: 0px;
    }
  }

  .osphere {
    left: 200px;
    bottom: 200px;
    width: 60px;
    z-index: 200;
  }
`;

export const Info = styled.div`
  max-width: 500px;
  z-index: 200;

  h4 {
    font-size: var(--small);
    font-weight: 900;
    color: var(--form);
    background-color: var(--background);
    padding: 8px 24px;
    margin-bottom: 10px;
    border-radius: 8px;
    width: fit-content;
  }

  h1 {
    font-size: var(--super);
    font-family: var(--second);
    color: var(--form);
    position: relative;
    padding-left: 24px;

    ::after {
      content: "";
      height: 75%;
      background-color: var(--sky);
      width: 8px;
      position: absolute;
      border-radius: 8px;
      left: 0;
      top: 20px;
    }
  }

  p {
    color: var(--bright);
    font-size: var(--small);
    margin: 26px 0;
  }

  button {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 30px;
    font-size: var(--large);
    margin-top: 50px;
    font-weight: 800;

    :hover {
      opacity: 0.75;
    }
  }
`;
