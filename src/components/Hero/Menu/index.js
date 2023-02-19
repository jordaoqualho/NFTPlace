import { logo } from "imgs";
import { Container, Box, Wrapper } from "./styles";

const Menu = ({ scrollTo }) => {
  return (
    <Container name="container" className="flex_cb">
      <Wrapper className="flex_cb">
        <Box name="box" className="flex_cs">
          <h1>
            <img src={logo} alt="logo" />
          </h1>
          <p onClick={() => scrollTo("about")}>About</p>
          <p onClick={() => scrollTo("projects")}>Projects</p>
          <p onClick={() => scrollTo("marketplace")}>Marketplace</p>
          <p onClick={() => scrollTo("governance")}>Governance</p>
          <p onClick={() => scrollTo("discord")}>Discord</p>
        </Box>

        <Box name="box" className="flex_cs">
          <button className="login">Log in</button>
        </Box>
      </Wrapper>

    </Container>
  );
};

export default Menu;
