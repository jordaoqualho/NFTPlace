import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 670px;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 1240px;
  height: 100%;
  padding: 80px 0;
`;

export const Info = styled.div`
  position: relative;

  .bsphere {
    position: absolute;
    width: 32px;
    left: 48px;
    top: 16px;
  }

  .osphere {
    position: absolute;
    width: 70px;
    bottom: 0;
    right: 120px;
  }

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
    font-family: var(--second);
    font-size: var(--super);
    text-align: center;
    color: var(--form);
    max-width: 900px;
  }

  p {
    color: var(--bright);
    font-size: var(--medium);
    font-weight: 800;
    text-align: center;
    max-width: 800px;
    margin: 26px 0;
  }

  .item {
    margin-bottom: 14px;

    h3 {
      font-size: var(--small);
    }

    img {
      margin-right: 10px;
      width: 20px;
    }
  }

  button {
    background-color: var(--primary);
    font-size: var(--medium);
    font-weight: 800;
    color: var(--basic);
    padding: 10px 30px;
    margin-top: 10px;
    width: 160px;
  }

  .learn {
    background-color: var(--light);
    border: 1px solid var(--primary);
    font-weight: 900;
    color: var(--primary);
    margin-left: 20px;
  }
`;

export const Growth = styled.div`
  position: relative;
  margin-top: 80px;
  align-items: center;
  gap: 48px;

  h1 {
    font-size: var(--huge);
    font-family: var(--second);
    color: var(--form);
  }

  p {
    font-size: var(--large);
    color: var(--form);
    font-weight: 900;
    display: flex;

    img {
      width: 20px;
      margin-right: 8px;
    }
  }

  .average,
  .profit,
  .supply {
    padding: 32px;
    border-radius: 16px;
    background-color: var(--background);
  }

  .supply {
    background-color: var(--primary);
    margin-top: 24px;

    h1,
    p {
      color: var(--light);
    }
  }
`;
