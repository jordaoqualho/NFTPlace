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

  p {
    position: absolute;
    color: var(--bright);
    font-size: var(--large);
    max-width: 320px;
    font-weight: 400;
    margin: 26px 0;
    bottom: 80px;
    right: 0;
  }

  .shine {
    position: absolute;
    top: 80px;
    left: 180px;
  }
`;

export const Info = styled.div`
  position: relative;

  .osphere {
    position: absolute;
    right: 80px;
    width: 70px;
    bottom: -64px;
  }

  h4 {
    background-color: var(--background);
    font-size: var(--small);
    color: var(--form);
    font-weight: 900;
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

    span {
      font-family: var(--second);
      font-size: var(--super);
      color: var(--primary);
      text-align: center;
    }
  }

  .transform {
    width: 100%;
    margin-top: -160px;
  }
`;
