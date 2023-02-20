import { briefcase, coin, money, sphere_blue, sphere_orange } from "imgs";
import { Container, Growth, Info, Wrapper } from "./styles";

const Doctors = ({ doctorRef }) => {
  return (
    <>
      <Container name="container" ref={doctorRef}>
        <Wrapper name="wrapper" className="flex_cc">
          <Info name="info" data-aos="fade-up" className="flex_ccc">
            <img src={sphere_orange} alt="sphere" className="osphere" />
            <img src={sphere_blue} alt="sphere" className="bsphere" />
            <h4>MINT</h4>
            <h1>Mint, purchase and bid the world's premier NFTs.</h1>
            <p>
              Purpose for Profit rewards contributors with short-term liquidity
              and bonuses for contributing towards long-term impact investments.
              Mint PURPOSE, Yield PROFIT, Support PROJECTS
            </p>
            <div className="flex_cs">
              <button>Mint purpose</button>
              <button className="learn">Learn more</button>
            </div>
          </Info>
          <Growth name="growth" className="flex_cs">
            <div className="average">
              <h1>$105.018 USD</h1>
              <p>
                <img src={money} alt="" /> Average price
              </p>
            </div>
            <div>
              <div className="profit">
                <h1>$1894,803,003 USD</h1>
                <p>
                  <img src={coin} alt="" />
                  Total Profit
                </p>
              </div>
              <div className="supply">
                <h1>$555,869,950 USD</h1>
                <p>
                  <img src={briefcase} alt="" />
                  Total Supply
                </p>
              </div>
            </div>
          </Growth>
        </Wrapper>
      </Container>
    </>
  );
};

export default Doctors;
