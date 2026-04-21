"use client";

import { motion } from "framer-motion";

export const ScrollReveal = ({
  children,
  width = "100%",
  delay = 0,
}: {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}) => {
  return (
    <div style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
