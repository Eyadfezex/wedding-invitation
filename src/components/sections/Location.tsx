"use client";
import React from "react";
import Head from "../ui/Head";
import Image from "next/image";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <motion.section
      className="max-w-5xl px-4 space-y-6 pb-[8rem] mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Head header="location" />
      <div className="relative w-full h-[30rem] rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute object-cover w-full h-full"
        ></iframe>
      </div>
    </motion.section>
  );
};

export default Location;
