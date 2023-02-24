import { columns, syne, jane, anna, sphere_blue, sphere_orange } from "imgs";
import { Composition, Container, Title, Wrapper, Luna, Gees } from "./styles";

const Purpose = ({ purposeRef }) => {
  return (
    <Container name="container" ref={purposeRef}>
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

        <Gees name="gees">
          <div className="name">
            <h1>Gees</h1>
          </div>
          <div className="modal flex_cs">
            <img src={anna} alt="anna" />
            <div className="info">
              <h1>Anna May</h1>
              <p>Donated $100</p>
            </div>
          </div>
        </Gees>

        <Composition name="composition">
          <h1 className="title">Syne</h1>
          <img src={syne} alt="syne" className="syne" />
          <div className="modal">
            <div className="span">
              <span>86%</span>
            </div>
            <h1>$350,000 USD</h1>
            <div className="bar" />
            <h1>of 500,000</h1>
            <p>Expanding internet connectivity with stratospheric balloons</p>
          </div>
        </Composition>

        <Luna>
          <h1 className="title">Luna</h1>
          <img src={columns} alt="columns" className="columns" />
          <div className="modal flex_cs">
            <img src={jane} alt="jane" />
            <div className="info">
              <h1>Jane Holand</h1>
              <p>Donated $500</p>
            </div>
          </div>
        </Luna>

        <div className="sunport">
          <h1>Sunport</h1>
        </div>

        <img src={sphere_blue} alt="bsphere" className="bsphere" />
        <img src={sphere_orange} alt="osphere" className="osphere" />
      </Wrapper>
    </Container>
  );
};

export default Purpose;
