import { Container, Title, Wrapper } from "./styles";

const Feedback = ({ feedbackRef }) => {
  return (
    <Container name="container" ref={feedbackRef}>
      <Wrapper name="wrapper" className="flex_ccc">
        <Title name="title" data-aos="fade-up" className="flex_ccc">
          <h1>
            We are ecofriendly and a <span> reliable</span>
          </h1>
          <p>
            As an ambitious community-driven project, we've placed a strong
            emphasis on setting the standard for unique NFT collector
            experiences.{" "}
          </p>
          <button>Mint purpose</button>
        </Title>
      </Wrapper>
    </Container>
  );
};

export default Feedback;
