"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function PageTransition({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.main>
  );
}