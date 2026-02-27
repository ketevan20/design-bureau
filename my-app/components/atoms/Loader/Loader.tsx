'use client'
import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-50000 flex items-center justify-center bg-[#F2F0EF]">
      <div className="flex items-end gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-16 bg-[#333] origin-bottom rounded-sm"
            animate={{
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;