import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { Big_Shoulders_Text } from "next/font/google";
import { cn } from "@/lib/utils";
import { PiStarFourFill } from "react-icons/pi";

const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer className="bg-[url('/787a2de551fc2d33db83544e39e916d11b8dab8d.png')] bg-cover h-[20rem] flex items-center ">
      <VelocityScroll
        className={cn("!text-[16rem] text-white", bigShoulders.className)}
        numRows={1}
      >
        JOE{" "}
        <span>
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
        ELLE{" "}
        <span>
          <PiStarFourFill size={50} className="inline mb-5" />
        </span>{" "}
      </VelocityScroll>
    </footer>
  );
};

export default Footer;
