"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import { cn } from "@/lib/utils";
import { PiStarFourFill } from "react-icons/pi";
import { Big_Shoulders_Text } from "next/font/google";
import { motion } from "framer-motion";

// Load Big Shoulders Text font with Latin subset
const bigShoulders = Big_Shoulders_Text({
  subsets: ["latin"],
  display: "swap",
});

/**
 * Hero Section Component
 *
 * A responsive hero section featuring:
 * - Animated background wave
 * - Animated logo
 * - Couple's names (JOE & ELLE) with different layouts for mobile/desktop
 * - Centered profile image
 * - Decorative star icon
 * - Description text (desktop only)
 */
const Hero: React.FC = () => {
  // Animation variants for consistent motion effects
  const fadeInFromTop = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeInFromBottom = {
    initial: { y: "30rem", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="mx-auto h-[60rem] lg:h-screen text-primary">
      <div className="bg-[url('/d3f6998547db5bbbbe40ba0d1260d0ad00afa646.png')] h-full w-full bg-cover [background-position-y:50%] bg-no-repeat relative overflow-hidden space-y-[8rem]">
        {/* Decorative wave background */}
        <Image
          src="/aewrg.png"
          width={5000}
          height={5000}
          priority
          className="absolute -bottom-[10%] w-full z-10 mb-0 md:-bottom-[22%] lg:-bottom-[15%] xl:-bottom-[25%] 2xl:-bottom-[50%] [filter:brightness(0.9)]"
          alt="Decorative wave background"
        />

        {/* Animated logo */}
        <motion.div
          className="w-full flex justify-center items-center pt-2.5"
          {...fadeInFromTop}
        >
          <Image src={logo} className="w-[3rem]" alt="Wedding logo" priority />
        </motion.div>

        <div
          className={cn(
            "flex justify-center items-end",
            bigShoulders.className
          )}
        >
          {/* Desktop names layout */}
          <motion.div
            className="lg:flex justify-around gap-[20rem] w-full absolute top-[20rem] text-[180px] xl:text-[200px] font-bold hidden"
            {...fadeInFromBottom}
          >
            <h2>JOE</h2>
            <h2>ELLE</h2>
          </motion.div>

          {/* Mobile-first content layout */}
          <div className="absolute top-[12rem] lg:top-[15rem] lg:z-20">
            <div className="flex flex-col items-center text-[120px] font-bold leading-0 gap-[5rem]">
              <h2 className="lg:hidden">JOE</h2>

              <div className="flex flex-col items-center gap-6">
                {/* Profile image container */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="relative rounded-full h-[330px] w-[200px] lg:h-[400px] lg:w-[250px] overflow-hidden z-20"
                >
                  <Image
                    src="/54a810555979f3b9ac4515d9101e071bffc740ba.jpg"
                    alt="Couple's profile picture"
                    width={8000}
                    height={8000}
                    priority
                    className="absolute object-cover scale-[2] bottom-[8rem]"
                  />
                </motion.div>

                <PiStarFourFill className="text-[50px]" />

                {/* Desktop-only description */}
                <p className="hidden lg:block text-center text-base text-white font-sans font-normal mt-15 max-w-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum fugit non delectus, aliquam aspernatur suscipit ea ad!
                  Unde aperiam ad praesentium assumenda, aspernatur delectus
                  dolor eligendi excepturi minima quae corporis.
                </p>
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
