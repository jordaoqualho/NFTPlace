import { star } from "imgs";
import { Container } from "./styles";

const Marquee = () => {
  return (
    <Container name="container">
      <p className="marquee">
        <span>Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
          Collect your eco NTSs
          <img src={star} alt="star" />
        </span>
      </p>
    </Container>
  );
};

export default Marquee;
