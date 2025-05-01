import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import { PiStarFourFill } from "react-icons/pi";
import { Big_Shoulders_Text } from "next/font/google";
import { cn } from "@/lib/utils";

/**
 * Scrolling Component
 *
 * A component that displays names with decorative stars that animate based on scroll position.
 * Uses VelocityScroll for scroll-based animations and PiStarFourFill for star decorations.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} [props.className] - Additional CSS classes to apply
 * @param {string} [props.firstPerson="JOE"] - First person's name
 * @param {string} [props.secondPerson="ELLE"] - Second person's name
 * @param {number} [props.starSize=50] - Size of decorative stars in pixels
 * @example
 * ```jsx
 * <Scrolling
 *   firstPerson="JOE"
 *   secondPerson="ELLE"
 *   starSize={50}
 *   className="custom-class"
 * />
 * ```
 */
interface ScrollingProps {
  className?: string;
  firstPerson?: string;
  secondPerson?: string;
  starSize?: number;
}

const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

const Scrolling: React.FC<ScrollingProps> = ({
  className = "",
  firstPerson = "JOE",
  secondPerson = "ELLE",
  starSize = 50,
}) => {
  const decorativeStar = (
    <span aria-hidden="true">
      <PiStarFourFill size={starSize} className="inline mb-5 animate-pulse" />
    </span>
  );

  return (
    <section
      className={cn("pb-[8rem]", className, bigShoulders.className)}
      aria-label="Animated names section"
    >
      <VelocityScroll
        className="text-primary text-8xl xl:text-9xl font-bold tracking-wider"
        aria-label="Scrolling names animation"
      >
        {firstPerson} {decorativeStar} {secondPerson} {decorativeStar}{" "}
      </VelocityScroll>
    </section>
  );
};

export default Scrolling;
