import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primary);
  position: relative;
  padding: 16px 0;
  width: 100%;
  z-index: 100;


.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  z-index: 100;
}

.marquee span {
  display: flex;
  animation: marquee 30s linear infinite;  
  font-size: var(--super);
  color: var(--light);
  font-family: var(--second);
  font-weight: bold;
  flex-shrink: 0; 

  img {
    margin: 0 24px;
    width: 50px;
  }
}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-250%, 0);
  }
}
`;
