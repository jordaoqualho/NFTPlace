import { direct, discord, footer_bc, logo, twitter } from "imgs";
import { Container, Navigation, Wrapper } from "./styles";

const Footer = () => {
  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <img src={footer_bc} alt="footer_bc" className="footer_bc" />
        <img src={logo} alt="logo" className="logo" />
        <div className="media">
          <img src={direct} alt="direct" />
          <img src={discord} alt="discord" />
          <img src={twitter} alt="twitter" />
        </div>
        <Navigation name="navigation" className="flex_rsc">
          <div className="menu">
            <p>About</p>
            <p>Evaluation</p>
            <p>Features</p>
            <p>Marketplace</p>
          </div>
          <div className="newsletter">
            <p>Newsletter</p>
            <p>LinkedIn</p>
            <p>YouTube</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <div className="contact">
            <p>Contact</p>
            <p>Story Archive</p>
            <p>Privacy + Terms</p>
            <p>Google</p>
            <p>Alphabet</p>
          </div>
        </Navigation>
        <div className="rights">
          <p>Copyright © 2023 Jordão Qualho</p>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Footer;
