"use client";
import { motion } from "framer-motion";
import React from "react";

const animationProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

export function withAnimatedAppearance<P extends object>(
  Component: React.ComponentType<P>
) {
  return function AnimatedComponent(props: P) {
    return (
      <motion.div {...animationProps}>
        <Component {...props} />
      </motion.div>
    );
  };
}
