import {
  create,
  linked_dots,
  linked_dots2,
  map,
  payment,
  shine,
  sphere_blue,
  sphere_orange,
  union,
  wallet,
} from "imgs";
import { Container, Options, Title, Wrapper } from "./styles";

const About = ({ aboutRef }) => {
  return (
    <Container name="container" ref={aboutRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <img src={union} alt="union" className="union" />
        <img src={map} alt="map" className="map" />
        <Title name="title" className="flex_ccc" data-aos="fade-up">
          <img src={shine} alt="shine" className="shine" />
          <h1>
            Lets make <span>your art</span> into digital assets
          </h1>
        </Title>
        <Options name="options" className="flex_cb" data-aos="fade-up">
          <img src={sphere_orange} alt="sphere" className="osphere float_img" />
          <img src={sphere_blue} alt="shpere" className="bsphere float_img" />
          <img src={linked_dots} alt="dots" className="ldots float_img" />
          <img src={linked_dots2} alt="dots" className="ldots2 float_img" />
          <div className="box mt-3 flex_ccb">
            <div>
              <img src={create} alt="create" />
              <h4>Create </h4>
              <p>
                Click My Collections and set up your collection. Add a
                description, profile & banner images, and set a secondary sales
                fee.
              </p>
            </div>
            <button>Create</button>
          </div>
          <div className="box flex_ccb">
            <div>
              <img src={payment} alt="payment" />
              <h4>Instant payment</h4>
              <p>
                Put NFTs on sale or on auction. Get paid for your digital
                collectables{" "}
              </p>
            </div>
            <button>Sale now</button>
          </div>
          <div className="box mt-3 flex_ccb">
            <div>
              <img src={wallet} alt="wallet" />
              <h4>Set up your wallet</h4>
              <p>
                Once you’ve set up your wallet of choice, connect it by clicking
                the wallet icon in the top right corner.
              </p>
            </div>
            <button>Connect</button>
          </div>
        </Options>
      </Wrapper>
    </Container>
  );
};

export default About;
