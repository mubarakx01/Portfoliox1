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
    <CustomGradientBackground className="min-h-[90vh]" data-oid="hi6a67f">
      <motion.section
        ref={containerRef}
        style={{ opacity, scale, y }}
        className="min-h-[90vh] flex flex-col items-center justify-center py-24 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="gmcl-m."
      >
        {/* Interactive hover effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 -z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-oid="t9xcpv5"
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
              data-oid="ryfrro_"
            />
          </motion.div>
        )}

        <div className="container mx-auto px-4 z-10" data-oid="ka:ghfn">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-oid="lek0yew"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center"
              animate={{
                textShadow: isHovered
                  ? "0 0 15px rgba(255,255,255,0.5)"
                  : "0 0 0px rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
              data-oid="z-pc20v"
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
                animate={{
                  x: mousePosition.x * 0.05,
                  y: mousePosition.y * 0.05,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                data-oid="789jn-q"
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
            data-oid="m:n8d89"
          >
            <Mail className="h-4 w-4" data-oid="li0dzam" />
            <span data-oid=".ke-tdr">mr1398463@gmail.com</span>
            <span className="mx-2" data-oid="ef0b8y6">
              |
            </span>
            <span data-oid="1sddg7o">(+91)9500255291</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl text-lg md:text-xl mb-12 leading-relaxed text-center mx-auto"
            data-oid=".r_s.y-"
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
              data-oid="8j7drd_"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            data-oid="jq.y:vs"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              data-oid="qangiuf"
            >
              <span className="relative z-10" data-oid="3u6iyum">
                View Projects
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="rqb-w8o"
              />

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
                data-oid="femc_ja"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group relative overflow-hidden border-primary/50"
              data-oid="klflvnr"
            >
              <span className="relative z-10" data-oid="1-4wm9q">
                Contact Me
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="_205r80"
              />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 justify-center"
            data-oid="4upsu6h"
          >
            <SocialButton
              icon={<Github className="h-5 w-5" data-oid="dza40mz" />}
              url="https://github.com"
              label="GitHub"
              data-oid="dgj4or2"
            />

            <SocialButton
              icon={<Linkedin className="h-5 w-5" data-oid="ej3j3m2" />}
              url="https://linkedin.com"
              label="LinkedIn"
              data-oid="6gg:egr"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence data-oid="3e:bjr:">
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              data-oid="ki67uei"
            >
              <motion.p
                className="text-sm text-muted-foreground mb-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="oc99u8h"
              >
                Scroll to explore
              </motion.p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="hh0dtp:"
              >
                <ChevronDown
                  className="h-5 w-5 text-muted-foreground"
                  data-oid="fevod-3"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive cursor */}
        <AnimatePresence data-oid="56ah8x3">
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
              data-oid="di8s28k"
            >
              <MousePointer
                className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary"
                data-oid="8sxojeh"
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
      data-oid="j694z07"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition-transform duration-300 group-hover:scale-110"
        data-oid="rm7d:cr"
      >
        {icon}
        <span
          className="absolute inset-0 rounded-full bg-primary/10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
          data-oid="an.z7cu"
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
      <span data-oid="5hy0g8c">
        {displayedText}
        <span className="animate-pulse" data-oid=":x0h6vm">
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
      data-oid="0d:rjrs"
    />
  );
}
