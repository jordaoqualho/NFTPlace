import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  width: 1240px;
  height: 100%;

  .osphere {
    position: absolute;
    bottom: 320px;
    width: 16px;
    right: 30%;
  }

  .bsphere {
    position: absolute;
    width: 24px;
    top: 240px;
    left: 40%;
  }

  .sunport {
    background-color: var(--button);
    font-family: var(--second);
    font-size: var(--small);
    border-radius: 24px;
    color: var(--form);
    position: absolute;
    padding: 64px;
    bottom: 80px;
    right: 240px;

    h1 {
      font-family: var(--second);
      font-weight: 600;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 580px;

  h1 {
    font-family: var(--second);
    font-size: var(--super);
    margin-bottom: 50px;
    color: var(--form);

    span {
      font-family: var(--second);
      color: var(--secundary);
    }
  }

  p {
    font-size: var(--large);
    width: 500px;
    color: var(--bright);
  }

  button {
    background-color: var(--primary);
    color: var(--basic);
    padding: 10px 30px;
    font-size: var(--medium);
    margin-top: 32px;
    font-weight: 800;

    :hover {
      opacity: 0.75;
    }
  }
`;

export const Gees = styled.div`
  position: absolute;
  left: 240px;
  top: 80px;

  .name {
    font-family: var(--second);
    font-size: var(--small);
    background-color: var(--button);
    color: var(--form);
    border-radius: 24px;
    padding: 64px;

    h1 {
      font-family: var(--second);
      font-weight: 600;
    }
  }

  .modal {
    box-shadow: var(--normalShadow);
    background-color: var(--light);
    border-radius: 24px;
    position: absolute;
    width: fit-content;
    padding: 16px 24px;
    left: 170px;
    bottom: 60px;
    z-index: 100;
    width: 240px;

    img {
      margin-right: 16px;
    }

    .info {
      h1 {
        font-size: var(--large);
        font-weight: 800;
      }

      p {
        font-size: var(--small);
      }
    }
  }
`;

export const Composition = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  .title {
    font-family: var(--second);
    font-size: var(--big);
    margin-bottom: 24px;
    color: var(--form);
    font-weight: 600;
  }

  .modal {
    background-color: var(--background);
    border-radius: 16px;
    position: absolute;
    bottom: -180px;
    padding: 24px;
    right: 24px;

    .span {
      justify-content: flex-end;
      font-size: var(--large);
      margin-bottom: 24px;
      font-weight: 900;
      display: flex;
    }

    h1 {
      font-family: var(--second);
      font-size: var(--big);
      font-weight: 900;
    }

    .bar {
      background-color: var(--light);
      border-radius: 16px;
      margin: 24px 0;
      width: 100%;
      height: 8px;

      :after {
        content: "";
        width: 86%;
        height: 8px;
        position: absolute;
        border-radius: 16px;
        background-color: var(--primary);
      }
    }

    p {
      font-size: var(--large);
      color: var(--bright);
      margin-top: 24px;
      width: 200px;
    }
  }
`;

export const Luna = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;

  .title {
    font-family: var(--second);
    font-size: var(--big);
    margin-bottom: 24px;
    color: var(--form);
    font-weight: 600;
  }

  .modal {
    box-shadow: var(--normalShadow);
    background-color: var(--light);
    border-radius: 24px;
    position: absolute;
    width: fit-content;
    padding: 16px 24px;
    left: 200px;
    bottom: 80px;
    z-index: 100;
    width: 240px;

    img {
      margin-right: 16px;
    }

    .info {
      h1 {
        font-size: var(--large);
        font-weight: 800;
      }

      p {
        font-size: var(--small);
      }
    }
  }
`;
