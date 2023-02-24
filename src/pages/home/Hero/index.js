import { anna, circle, jane, landscape } from "imgs";
import { Body, Container, Header, Wrapper } from "./styles";

const Hero = () => {
  return (
    <Container name="container">
      <Wrapper name="wrapper" >
        <Header name="header" data-aos="fade-up" data-aos-delay="2200">
            <h1>
            Dicover <span>Unique</span> NFT Places
            </h1>
        </Header>
        <Body name='body'>
          <img src={circle} alt="circle" className="circle" />
          <div className="user anna flex_cs">
            <img src={anna} alt="anna" />
            <div className="info">
              <h1>Anna May</h1>
              <p>Donated $100</p>
            </div>
          </div>
          <div className="user jane flex_cs">
            <img src={jane} alt="jane" />
            <div className="info">
              <h1>Jane Holand</h1>
              <p>Donated $500</p>
            </div>
          </div>
          <img className="landscape" src={landscape} alt="landscape" />
          <p className="details">The Environmental Social Governance (ESG) DAO that rewards contributors for supporting community.</p>
          <button>Mint now</button>
        </Body>
      </Wrapper>
    </Container>
  );
};

export default Hero;
