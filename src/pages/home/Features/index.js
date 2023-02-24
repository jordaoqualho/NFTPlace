import {
  elipse1,
  elipse2,
  elipse3,
  elipse4,
  sphere_orange,
  waves1,
  waves2,
} from "imgs";
import { Container, Info, Wrapper } from "./styles";

const Features = ({ featuresRef }) => {
  return (
    <Container name="container">
      <Wrapper name="wrapper" ref={featuresRef}>
        <Info name="info" data-aos="fade-up">
          <h4>FEATURES</h4>
          <h1>We are platform for everyone</h1>
          <button>Mint purpose</button>
        </Info>

        <div className="coment c1">
          <img src={elipse1} alt="elipse" />
          <img src={waves1} alt="waves" className="w1" />
          <p className="p1">Your exclusive member keycard.</p>
        </div>

        <div className="coment c2">
          <img src={elipse2} alt="elipse" />
          <p>50% Discount on trading fees for keycard holders.</p>
        </div>

        <div className="coment c3">
          <img src={elipse3} alt="elipse" />
          <img src={waves2} alt="waves" className="w2" />
          <p>The exactly Token Economics is TBA.</p>
        </div>

        <div className="coment c4">
          <img src={elipse4} alt="elipse" />
          <p className="">You don’t have to be a computer geek to buy NFTs.</p>
        </div>

        <img src={sphere_orange} alt="sphere" className="osphere" />
      </Wrapper>
    </Container>
  );
};

export default Features;
