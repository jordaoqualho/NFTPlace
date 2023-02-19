import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  padding-top: 100px;
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  display: grid;
  place-items: center;
  position: relative;
  flex: 1;

`;

export const Header = styled.div`
  position: relative;
  z-index: 100;

  h1 {
    font-size: var(--super);
    margin-bottom: 40px;
    z-index: 100;

    span {
      color: var(--primary);
    }
  }

  p {
    color: var(--bright);
    font-size: var(--medium);
    margin: 26px 0;
  }

`;


export const Body = styled.div`
  position: relative;

  .landscape {
    position: relative;
    width: 100%;
  } 

  .circle {
    transform: translate(50%);
    position: absolute;
    z-index: 1;
    right: 50%;
    top: -100px;
  }

  .user {
    background-color: var(--light);
    position: absolute;
    width: fit-content;
    padding: 16px 24px;
    border-radius: 24px;
    width: 240px;
    box-shadow: 0px 38.1633px 98.8775px -17.3469px rgba(0, 0, 0, 0.25);

    img {
      margin-right: 16px;
    }
  }

  .jane {
    right: 24px;    
    top: 16px;
  }

    .anna {
    left: 24px;    
    top: 16px;
  }

  
  button {
    background-color: var(--primary);
    position: absolute;
    color: var(--basic);
    padding: 8px 40px;
    border-radius: 10px;
    font-size: var(--medium);
        right: 48px;
    bottom: 48px;
  }

  .details {
    font-size: var(--medium);
    position: absolute;
    left: 24px;
    bottom: 24px;
    color: var(--bright);
    width: 300px;
  }

`;
