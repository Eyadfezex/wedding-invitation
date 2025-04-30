import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { cn } from "@/lib/utils";
import { PiStarFourFill } from "react-icons/pi";
import { Big_Shoulders_Text } from "next/font/google";

const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <section className="mx-auto h-[60rem] text-primary">
      <div className="bg-[url('/shifaaz-shamoon-sLAk1guBG90-unsplash.png')] h-full w-full bg-cover [background-position-y:50%] bg-no-repeat relative overflow-hidden space-y-[8rem] ">
        <Image
          src="/aewrg.png"
          width={5000}
          height={5000}
          className="absolute -bottom-[10%]  w-full z-10 mb-0 md:-bottom-[22%]"
          alt="wave"
        />
        <div className="w-full flex justify-center items-center pt-2.5">
          <Image src={logo} className="w-[3rem]" alt="logo" priority />
        </div>
        <div
          className={cn(
            "flex justify-center items-end",
            bigShoulders.className
          )}
        >
          <div className="lg:flex justify-around gap-[20rem] w-full absolute top-[18rem] text-[180px] font-bold hidden">
            <h2>JOE</h2>
            <h2>ELLE</h2>
          </div>
          <div className="absolute top-[12rem]">
            <div className="flex flex-col items-center text-[120px] font-bold leading-0 gap-[5rem]">
              <h2 className="lg:hidden">JOE</h2>
              <div className="flex flex-col items-center gap-6">
                <div className="relative rounded-full h-[330px] w-[200px] overflow-hidden z-20">
                  <img
                    src="/54a810555979f3b9ac4515d9101e071bffc740ba.jpg"
                    alt=""
                    className="w-full h-full absolute object-cover scale-[2] bottom-[8rem]"
                  />
                </div>
                <PiStarFourFill className="w-[50px] " />
              </div>
              <h2 className="lg:hidden">ELLE</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
