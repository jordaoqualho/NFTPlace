import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: relative;
  padding-top: 100px;
  width: 100%;
`;

export const Wrapper = styled.div`
  flex-direction: column;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  width: 1240px;
  height: 100%;

  .blue_bc {
    position: absolute;
    width: 100%;
    z-index: -1;
    top: 0;
  }

  .bsphere {
    position: absolute;
    width: 170px;
    z-index: -1;
    right: 0px;
    top: 182px;
  }

  .bsphere2 {
    position: absolute;
    width: 60px;
    z-index: 1;
    left: 24px;
    top: 190px;
  }

  .bsphere3 {
    position: absolute;
    width: 120px;
    z-index: 1;
    left: 80px;
    top: 240px;
  }

  .cone {
    position: absolute;
    right: 180px;
    z-index: 1;
    top: 280px;
  }

  .cube {
    position: absolute;
    right: 80px;
    z-index: 1;
    bottom: 180px;
  }

  .rosca {
    position: absolute;
    right: 360px;
    width: 140px;
    z-index: 1;
    bottom: 0;
  }

  .map {
    position: absolute;
    opacity: 0.2;
    top: 120px;
    z-index: 1;
  }
`;

export const Title = styled.div`
  margin-bottom: 50px;
  text-align: center;
  width: 880px;

  h1 {
    font-family: var(--second);
    font-size: var(--super);
    font-weight: 600;
    margin-bottom: 50px;
    color: var(--light);

    span {
      font-family: var(--second);
      color: var(--secundary);
    }
  }

  p {
    font-size: var(--large);
    color: var(--light);
    width: 550px;
  }

  button {
    background-color: var(--light);
    color: var(--primary);
    padding: 10px 30px;
    font-size: var(--large);
    margin-top: 32px;
    font-weight: 900;

    :hover {
      opacity: 0.75;
    }
  }
`;
