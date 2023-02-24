import { arrow_up } from "imgs";
import { useEffect, useRef } from "react";
import { Button } from "./styles";

const GoToTop = () => {
  const button = useRef(null);

  const goTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 600) {
        button.current.style.opacity = "1";
      } else if (scrolled <= 600) {
        button.current.style.opacity = "0";
      }
    });
  }, []);

  return (
    <Button name="button" onClick={() => goTop()} ref={button}>
      <img src={arrow_up} alt="arrow_up" />
    </Button>
  );
};

export default GoToTop;
