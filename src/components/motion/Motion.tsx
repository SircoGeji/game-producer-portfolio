"use client";

import { motion } from "framer-motion";
import { motionVariants } from "./variants";

export default function Motion({
  children,
  variant = "fadeIn",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: keyof typeof motionVariants;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={motionVariants[variant]}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
