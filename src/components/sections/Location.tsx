"use client";
import React from "react";
import Header from "../ui/Header";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.section
      className="max-w-4xl px-4 space-y-6 pb-14 mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Header header="location" />
      <div className="relative w-full h-[30rem] rounded-2xl overflow-hidden">
        <img
          src="/shifaaz-shamoon-sLAk1guBG90-unsplash.png"
          alt=""
          className=" absolute object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Location;
