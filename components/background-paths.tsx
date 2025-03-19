"use client";

import { motion } from "framer-motion";
import { useState, useEffect, memo } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface FloatingPathsProps {
  position: number;
  mousePosition: MousePosition;
  windowSize: { width: number; height: number };
}

const FloatingPaths = memo(function FloatingPaths({
  position,
  mousePosition,
  windowSize,
}: FloatingPathsProps) {
  // Reduced number of paths from 36 to 12 for better performance
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 15 * position} -${189 + i * 18}C-${
      380 - i * 15 * position
    } -${189 + i * 18} -${312 - i * 15 * position} ${216 - i * 18} ${
      152 - i * 15 * position
    } ${343 - i * 18}C${616 - i * 15 * position} ${470 - i * 18} ${
      684 - i * 15 * position
    } ${875 - i * 18} ${684 - i * 15 * position} ${875 - i * 18}`,
    width: 0.8 + i * 0.08,
  }));

  // Throttled mouse position calculations
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;
  const maxOffsetPixels = 15; // Reduced from 20
  const offsetX = ((mousePosition.x - centerX) / centerX) * maxOffsetPixels;
  const offsetY = ((mousePosition.y - centerY) / centerY) * maxOffsetPixels;

  // Simplified scaling calculation
  const scalingFactor =
    Math.min(windowSize.width / 696, windowSize.height / 316) || 1;
  const svgOffsetX = offsetX / scalingFactor;
  const svgOffsetY = offsetY / scalingFactor;

  return (
    <div className="absolute inset-0 pointer-events-none" data-oid="8xdrpl_">
      <svg
        className="w-full h-full text-slate-950/25 dark:text-white/20"
        viewBox="0 0 696 316"
        fill="none"
        style={{
          filter: "blur(0.5px)",
          transform: "scale(1.2)",
        }}
        data-oid="1r4h5t3"
      >
        <title data-oid="3e76lj9">Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.25 + path.id * 0.06}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.5, 0.3],
              pathOffset: [0, 1],
              x: ((svgOffsetX * (path.id + 1)) / 12) * position,
              y: ((svgOffsetY * (path.id + 1)) / 12) * position,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              opacity: {
                duration: 8,
                repeat: Infinity,
              },
            }}
            data-oid="t_wwvmh"
          />
        ))}
      </svg>
    </div>
  );
});

export default function BackgroundPaths() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let lastUpdate = 0;
    const THROTTLE_INTERVAL = 50; // Throttle to 20fps for mouse movement

    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      // Debounce resize events
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate >= THROTTLE_INTERVAL) {
        setMousePosition({ x: event.clientX, y: event.clientY });
        lastUpdate = now;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      data-oid="v.q1g-6"
    >
      <div className="absolute inset-0" data-oid="p_e_a9a">
        <FloatingPaths
          position={1}
          mousePosition={mousePosition}
          windowSize={windowSize}
          data-oid="r4a24px"
        />
        <FloatingPaths
          position={-1}
          mousePosition={mousePosition}
          windowSize={windowSize}
          data-oid="qij7i19"
        />
      </div>
    </div>
  );
}
