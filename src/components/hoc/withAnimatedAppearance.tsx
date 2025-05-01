"use client";
import { motion } from "framer-motion";
import React from "react";

const animationProps = {
  initial: { opacity: 0, y: 60, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
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
