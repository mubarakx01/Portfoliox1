"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useIsClient } from "@/hooks/use-is-client";

interface CustomGradientBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function CustomGradientBackground({
  children,
  className,
}: CustomGradientBackgroundProps) {
  const isClient = useIsClient();

  // Don't render animations until client-side
  if (!isClient) {
    return (
      <div
        className={cn("relative overflow-hidden", className)}
        data-oid="_-bzvfm"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 -z-10"
          data-oid="gbdgk2q"
        />

        {children}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      data-oid="1bu37.h"
    >
      {/* Static gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 -z-10"
        data-oid="v3..bfh"
      />

      {/* Animated orbs for background effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        data-oid="_fb9r1e"
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        data-oid=".b3:x8v"
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        data-oid="n46j.c2"
      />

      {children}
    </div>
  );
}
