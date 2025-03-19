"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface WaveTextProps {
  text?: string
  className?: string
}

export default function WaveText({ text = "", className = "" }: WaveTextProps) {
  const [characters, setCharacters] = useState<string[]>([])

  useEffect(() => {
    if (text) {
      setCharacters(Array.from(text))
    }
  }, [text])

  if (!characters.length) return null

  return (
    <div className={`inline-flex flex-wrap gap-[1px] ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="relative inline-block font-bold"
          style={{
            color: '#ffffff',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)',
          }}
          animate={{
            y: [0, -4, 0],
            opacity: [1, 1, 1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 0.1,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  )
} 