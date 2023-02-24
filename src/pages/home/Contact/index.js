import { blue_bc, cone, cube, map, rosca, sphere_blue } from "imgs";
import { Container, Title, Wrapper } from "./styles";

const Contact = ({ contactRef }) => {
  return (
    <Container name="container" ref={contactRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <Title name="title" data-aos="fade-up" className="flex_ccc">
          <h1>Join Us to Make The World A Better Place</h1>
          <p>
            Smaller currencies may often appear to have a lower carbon
            footprint, but that may simply be because there are fewer
            transactions.
          </p>
          <button>Contact Us</button>
        </Title>

        <img src={map} alt="map" className="map" />
        <img src={blue_bc} alt="blue_bc" className="blue_bc" />
        <img src={sphere_blue} alt="bsphere" className="bsphere" />
        <img src={sphere_blue} alt="bsphere" className="bsphere2" />
        <img src={sphere_blue} alt="bsphere" className="bsphere3" />
        <img src={rosca} alt="rosca" className="rosca" />
        <img src={cone} alt="cone" className="cone" />
        <img src={cube} alt="cube" className="cube" />
      </Wrapper>
    </Container>
  );
};

export default Contact;
