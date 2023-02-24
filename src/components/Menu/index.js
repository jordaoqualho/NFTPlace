import { logo } from "imgs";
import { Container, Box, Wrapper } from "./styles";

const Menu = ({ scrollTo }) => {
  return (
    <Container name="container" className="flex_cb">
      <Wrapper className="flex_cb">
        <Box name="box" className="flex_cs">
          <img src={logo} alt="logo" className="logo" />
          <p onClick={() => scrollTo("about")}>About</p>
          <p onClick={() => scrollTo("evaluation")}>Evaluation</p>
          <p onClick={() => scrollTo("features")}>Features</p>
          <p onClick={() => scrollTo("marketplace")}>Marketplace</p>
          <p onClick={() => scrollTo("contact")}>Contact</p>
        </Box>
        <Box name="box" className="flex_cs">
          <button className="login">Log in</button>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Menu;
