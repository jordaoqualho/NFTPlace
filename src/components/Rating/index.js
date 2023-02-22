import { nft_bc, site, sphere_blue, sphere_orange } from "imgs";
import { Container, Options, Title, Wrapper } from "./styles";

const Rating = ({ ratingRef }) => {
  return (
    <Container name="container" ref={ratingRef}>
      <Wrapper name="wrapper" className="flex_css">
        <Title name="title" className="flex_ccs" data-aos="fade-up">
          <h4>NFT</h4>
          <h1>
            PFP NFT <span>Marketplace</span>{" "}
          </h1>
          <img src={sphere_blue} alt="shpere" className="bsphere" />
        </Title>
        <Options name="options" className="flex_cb" data-aos="fade-up">
          <img src={site} alt="site" />
        </Options>
        <div className="box flex_css">
          <p>
            We regulated NFT marketplace and payable in Cryptocurrencies and
            FIAT. You don’t have to be a computer geek to buy NFTs.
          </p>
          <button>Dicover now</button>
        </div>
        <img src={nft_bc} alt="nft_bc" className="nft_bc" />
        <img src={sphere_orange} alt="shpere" className="osphere" />
      </Wrapper>
    </Container>
  );
};

export default Rating;
