import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { Big_Shoulders_Text } from "next/font/google";
import { cn } from "@/lib/utils";
import { PiStarFourFill } from "react-icons/pi";

/**
 * Initialize Big Shoulders Text font with Latin subset
 * This font is used for the main text in the footer
 */
const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Footer component that displays a scrolling text animation with names
 * Uses VelocityScroll for smooth horizontal scrolling effect
 *
 * @component
 * @returns {JSX.Element} Footer section with animated text
 */
const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[url('/787a2de551fc2d33db83544e39e916d11b8dab8d.png')] bg-cover h-[20rem] flex items-center"
      aria-label="Page footer"
    >
      <VelocityScroll
        className={cn("!text-[16rem] text-white", bigShoulders.className)}
        numRows={1}
        aria-label="Scrolling names animation"
      >
        JOE{" "}
        <span aria-hidden="true">
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
        ELLE{" "}
        <span aria-hidden="true">
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
      </VelocityScroll>
    </footer>
  );
};

export default Footer;
