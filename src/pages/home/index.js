import Evaluation from "pages/home/Evaluation";
import Purpose from "pages/home/Purpose";
import Footer from "components/Footer";
import GoToTop from "components/GoToTop";
import Hero from "pages/home/Hero";
import Menu from "components/Menu";
import Marquee from "components/Marquee";
import Marketplace from "pages/home/Marketplace";
import Features from "pages/home/Features";
import About from "pages/home/About";
import { useRef } from "react";
import { Container } from "./styles";
import Transform from "pages/home/Transform";
import Contact from "pages/home/Contact";

const HomePage = () => {
  const aboutRef = useRef(null);
  const evaluationRef = useRef(null);
  const featuresRef = useRef(null);
  const marketplaceRef = useRef(null);
  const purposeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (target) => {
    const scrollConfig = {
      behavior: "smooth",
      block: "start",
    };

    switch (target) {
      case "about":
        return aboutRef.current.scrollIntoView(scrollConfig);

      case "evaluation":
        return evaluationRef.current.scrollIntoView(scrollConfig);

      case "features":
        return featuresRef.current.scrollIntoView(scrollConfig);

      case "marketplace":
        return marketplaceRef.current.scrollIntoView(scrollConfig);

      case "purpose":
        return purposeRef.current.scrollIntoView(scrollConfig);

      case "contact":
        return contactRef.current.scrollIntoView(scrollConfig);
    }
  };

  return (
    <>
      {/* <LoadingPage name="loadingPage" /> */}
      <GoToTop name="goToTop" />
      <Container name="container">
        <Menu name="menu" scrollTo={scrollTo} />
        <Hero name="hero" scrollTo={scrollTo} />
        <Marquee name="marquee" />
        <About name="about" aboutRef={aboutRef} />
        <Evaluation name="evaluations" evaluationRef={evaluationRef} />
        <Features name="features" featuresRef={featuresRef} />
        <Marketplace name="marketplace" marketplaceRef={marketplaceRef} />
        <Purpose name="purpose" purposeRef={purposeRef} />
        <Transform name="transform" />
        <Contact name="contact" contactRef={contactRef} />
        <Footer name="footer" scrollTo={scrollTo} />
      </Container>
    </>
  );
};

export default HomePage;
