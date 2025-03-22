"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MousePointer,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CustomGradientBackground } from "@/components/custom-gradient-background";

export default function InteractiveHero() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const handleContactClick = () => {
    toast({
      title: "Contact Info",
      description: "Email: mr1398463@gmail.com | Phone: (+91) 9500255291",
      duration: 5000,
    });
  };

  // Hide scroll indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CustomGradientBackground className="min-h-[90vh]" data-oid="jd1yrp7">
      <motion.section
        ref={containerRef}
        style={{ opacity, scale, y }}
        className="min-h-[90vh] flex flex-col items-center justify-center py-24 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="s.sr-hw"
      >
        {/* Interactive hover effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 -z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-oid="m3h196_"
          >
            <motion.div
              className="absolute bg-blue-500/10 rounded-full blur-3xl"
              style={{
                left: `calc(50% + ${mousePosition.x * 2}px)`,
                top: `calc(50% + ${mousePosition.y * 2}px)`,
                width: "300px",
                height: "300px",
                x: "-50%",
                y: "-50%",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              data-oid="tbm74iz"
            />
          </motion.div>
        )}

        <div className="container mx-auto px-4 z-10" data-oid="plk0639">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-oid="xrc6.mn"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center"
              animate={{
                textShadow: isHovered
                  ? "0 0 15px rgba(255,255,255,0.5)"
                  : "0 0 0px rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
              data-oid="j8hoa9l"
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
                animate={{
                  x: mousePosition.x * 0.05,
                  y: mousePosition.y * 0.05,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                data-oid="_2s2z0:"
              >
                MUBARAK A
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8 flex items-center justify-center gap-2 text-center"
            data-oid="ft2fvry"
          >
            <Mail className="h-4 w-4" data-oid="gd13htc" />
            <span data-oid="-iyo79p">mr1398463@gmail.com</span>
            <span className="mx-2" data-oid="u-f9b9j">
              |
            </span>
            <span data-oid="h7k4yid">(+91)9500255291</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl text-lg md:text-xl mb-12 leading-relaxed text-center mx-auto"
            data-oid="srg7-2q"
          >
            <TypewriterEffect
              text="  Software Engineer, AI Specialist, and Community Organizer specializing in machine learning, generative AI."
              highlightTerms={[
                "AI",
                "machine learning",
                "generative AI",
                "cybersecurity",
                "STEM",
              ]}
              data-oid="abrq3g9"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            data-oid="6n821yf"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              data-oid="4t8yb6v"
            >
              <span className="relative z-10" data-oid="hanh3oe">
                View Projects
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="yt06-h0"
              />

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
                data-oid="6jenyo3"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group relative overflow-hidden border-primary/50"
              data-oid="fn9c0:f"
            >
              <span className="relative z-10" data-oid="_966r5e">
                Contact Me
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="0xgsgj7"
              />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 justify-center"
            data-oid="z4k_itq"
          >
            <SocialButton
              icon={<Github className="h-5 w-5" data-oid="7lcba_l" />}
              url="https://github.com"
              label="GitHub"
              data-oid="q-19rrh"
            />

            <SocialButton
              icon={<Linkedin className="h-5 w-5" data-oid="it.kn7s" />}
              url="https://linkedin.com"
              label="LinkedIn"
              data-oid="8i12oli"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence data-oid=".-yxc8:">
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              data-oid="h-kx49f"
            >
              <motion.p
                className="text-sm text-muted-foreground mb-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="mlh81x4"
              >
                Scroll to explore
              </motion.p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="f1v359m"
              >
                <ChevronDown
                  className="h-5 w-5 text-muted-foreground"
                  data-oid="ckznm83"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive cursor */}
        <AnimatePresence data-oid="cvr1ldt">
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x * 2,
                y: mousePosition.y * 2,
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="hidden md:block pointer-events-none fixed w-6 h-6 rounded-full border border-primary z-50 mix-blend-difference"
              style={{ left: "50%", top: "50%" }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              data-oid="m:7:4o_"
            >
              <MousePointer
                className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary"
                data-oid="4-:wb3z"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </CustomGradientBackground>
  );
}

interface SocialButtonProps {
  icon: React.ReactNode;
  url: string;
  label: string;
}

function SocialButton({ icon, url, label }: SocialButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      className="relative overflow-hidden group"
      data-oid="5y46-62"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition-transform duration-300 group-hover:scale-110"
        data-oid="pw05z6-"
      >
        {icon}
        <span
          className="absolute inset-0 rounded-full bg-primary/10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
          data-oid="i9c83kk"
        ></span>
      </a>
    </Button>
  );
}

interface TypewriterEffectProps {
  text: string;
  highlightTerms?: string[];
}

function TypewriterEffect({
  text,
  highlightTerms = [],
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  // If no highlighted terms or typing is still in progress, just return the text
  if (highlightTerms.length === 0 || displayedText.length < text.length) {
    return (
      <span data-oid="2uu:qwa">
        {displayedText}
        <span className="animate-pulse" data-oid="r9c_cj9">
          |
        </span>
      </span>
    );
  }

  // If typing is complete and we have terms to highlight, process the text
  let processedText = displayedText;

  // Replace each term with a highlighted version
  highlightTerms.forEach((term) => {
    const regex = new RegExp(`(${term})`, "gi");
    processedText = processedText.replace(
      regex,
      '<span class="text-primary font-semibold">$1</span>',
    );
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: processedText }}
      data-oid="136gzy-"
    />
  );
}
