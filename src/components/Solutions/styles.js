import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: relative;
  width: 100%;
  padding-bottom: 200px;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  padding: 100px 0;

  .union {
    position: absolute;
    z-index: -1;
    top: -224%;
  }

  .map {
    position: absolute;
    top: 0;
  }
`;

export const Title = styled.div`
  text-align: center;
  width: 480px;

  .shine {
    position: absolute;
    top: 64px;
    right: 340px;
  }

  h1 {
    font-family: var(--second);
    font-weight: 600;
    font-size: var(--title);
    margin-bottom: 50px;
    color: var(--form);
  }

  span {
    font-family: var(--second);
    color: var(--secundary);
  }
`;

export const Options = styled.div`
  position: relative;
  gap: 64px;

  .mt-3 {
    margin-top: 24px;
  }

  .float_img {
    position: absolute;
  }

  .osphere {
    left: -72px;
    top: -0px;
  }

  .bsphere {
    right: -16px;
    top: -62px;
  }

  .ldots {
    z-index: 100;
    left: 172px;
    top: 40px;
    width: 160px;
  }

  .ldots2 {
    z-index: 100;
    right: 216px;
    top: 00px;
    width: 160px;
  }

  .box {
    width: 240px;
    height: 300px;
    padding: 24px 32px;
    background: var(--light);
    border-radius: 16px;

    img {
      width: 50px;
    }

    h4 {
      font-size: var(--large);
      font-family: var(--second);
      margin: 15px 0;
    }

    p {
      font-size: var(--small);
      font-weight: 500;
      color: var(--bright);
    }

    button {
      background-color: var(--primary);
      font-weight: bold;
      padding: 8px 32px;
      color: var(--light);
      border-radius: 4px;
      margin-top: 16px;
    }
  }
`;
