import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--light);
  position: relative;
  height: 520px;
  margin-top: 100px;
  width: 100%;
`;

export const Wrapper = styled.div`
  justify-content: space-between;
  padding: 100px 0;
  margin: 0 auto;
  display: flex;
  width: 1240px;
  height: 480px;

  .footer_bc {
    position: absolute;
    width: 100%;
    top: 0;
  }

  .logo {
    position: absolute;
    width: 64px;
    left: 48px;
    top: 48px;
  }

  .media {
    flex-direction: column;
    z-index: 100;
    position: absolute;
    display: flex;
    bottom: 72px;
    left: 48px;
    gap: 40px;

    img {
      transition: opacity var(--fast);
      cursor: pointer;
      width: 40px;

      :hover {
        transform: translateY(-10%);
        opacity: 0.8;
      }
    }
  }

  .rights {
    position: absolute;
    bottom: 24px;
    color: var(--bright);
    left: 50%;
    transform: translateX(-50%);
    p {
      font-size: var(--large);
      font-weight: bold;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  gap: 160px;

  p {
    transition: opacity var(--fast);
    font-size: var(--large);
    color: var(--form);
    cursor: pointer;

    :hover {
      color: var(--secundary);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .menu {
    font-weight: 600;
  }

  .newsletter,
  .contact {
    font-weight: 800;
  }
`;
