import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { PiStarFourFill } from "react-icons/pi";

const Scrolling = () => {
  return (
    <section className="pb-14">
      <VelocityScroll className="text-primary text-8xl">
        JOE{" "}
        <span>
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
        ELLE{" "}
        <span>
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
      </VelocityScroll>
    </section>
  );
};

export default Scrolling;
