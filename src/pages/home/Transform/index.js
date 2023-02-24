import { shine, sphere_orange, transform } from "imgs";
import { Container, Info, Wrapper } from "./styles";

const Transform = ({ transformRef }) => {
  return (
    <>
      <Container name="container" ref={transformRef}>
        <Wrapper name="wrapper" className="flex_cc">
          <Info name="info" data-aos="fade-up" className="flex_ccc">
            <img src={sphere_orange} alt="sphere" className="osphere" />
            <img src={shine} alt="shine" className="shine" />
            <h4>TRANSFORM</h4>
            <h1>
              Authenticaly secure, <span>sustainable</span>
            </h1>
            <img src={transform} alt="transform" className="transform" />
          </Info>
          <p>
            Smaller currencies may often appear to have a lower carbon
            footprint, but that may simply be because there are fewer
            transactions.
          </p>
        </Wrapper>
      </Container>
    </>
  );
};

export default Transform;
