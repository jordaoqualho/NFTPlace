import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  padding-top: 200px;
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  padding: 0 0 100px 0;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;

  .nft_bc {
    position: absolute;
    z-index: -1;
    top: -100px;
    right: 0px;
  }

  .box {
    position: absolute;
    width: 316px;
    padding-top: 48px;
    background: #ffffff;
    border-radius: 0px 0px 10px 10px;
    top: -115px;
    right: 200px;

    ::after {
      content: "";
      height: 4px;
      background-color: var(--primary);
      width: 30%;
      position: absolute;
      border-radius: 8px;
      left: 0;
      top: 20px;
    }

    p {
      font-size: var(--medium);
      color: var(--contrast);
      font-weight: bold;
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
  }

  .osphere {
    width: 60px;
    position: absolute;
    right: 200px;
    bottom: 300px;
  }
`;

export const Title = styled.div`
  text-align: start;
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
    margin-bottom: 50px;
    text-align: start;
    color: var(--form);
    width: 450px;
    position: relative;
    padding-left: 24px;

    ::after {
      content: "";
      height: 75%;
      background-color: var(--primary);
      width: 8px;
      position: absolute;
      border-radius: 8px;
      left: 0;
      top: 20px;
    }

    span {
      font-family: var(--second);
      color: var(--primary);
    }
  }

  .bsphere {
    width: 48px;
    position: absolute;
    left: 400px;
    top: 48px;
  }
`;

export const Options = styled.div`
  gap: 30px;
`;
