"use client";
import { cn } from "@/lib/utils";
import { Big_Shoulders_Text } from "next/font/google";
import React from "react";
import { withAnimatedAppearance } from "../hoc/withAnimatedAppearance";

/**
 * Big Shoulders Text font configuration
 */
const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Head component that displays a header text with a decorative line
 * @component
 * @param {Object} props - Component props
 * @param {string} props.header - The text to display as header
 * @returns {React.ReactElement} A header with decorative line
 *
 * @example
 * ```jsx
 * <Head header="Welcome" />
 * ```
 */
const Head = ({ header }: { header: string }) => {
  return (
    <div className="flex justify-between gap-4">
      <h2
        className={cn(
          bigShoulders.className,
          "font-bold text-primary text-3xl xl:text-4xl uppercase"
        )}
      >
        {header}
      </h2>
      <div className="flex items-center w-full">
        {/* Light gray decorative line (90% width) */}
        <div className="bg-[#1C1C1C1A] w-[90%] h-1" />
        {/* Primary color accent line (10% width) */}
        <div className="bg-primary w-[10%] h-1" />
      </div>
    </div>
  );
};

export default withAnimatedAppearance(Head);
