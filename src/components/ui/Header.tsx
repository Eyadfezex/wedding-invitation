"use client";
import { cn } from "@/lib/utils";
import { Big_Shoulders_Text } from "next/font/google";
import React from "react";
import { withAnimatedAppearance } from "../hoc/withAnimatedAppearance";
const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

const Header = ({ header }: { header: string }) => {
  return (
    <div className="flex justify-between gap-4">
      <h2
        className={cn(
          bigShoulders.className,
          "font-bold text-primary text-3xl uppercase"
        )}
      >
        {header}
      </h2>
      <div className="flex items-center w-full">
        <div className="bg-[#1C1C1C1A] w-[90%] h-1" />
        <div className="bg-primary w-[10%] h-1" />
      </div>
    </div>
  );
};

export default withAnimatedAppearance(Header);
