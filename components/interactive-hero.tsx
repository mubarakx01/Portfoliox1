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
    <CustomGradientBackground className="min-h-[90vh]" data-oid="y-xd0o2">
      <motion.section
        ref={containerRef}
        style={{ opacity, scale, y }}
        className="min-h-[90vh] flex flex-col items-center justify-center py-24 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="f2yniwy"
      >
        {/* Interactive hover effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 -z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-oid="d3.:0hm"
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
              data-oid="dtfgq:f"
            />
          </motion.div>
        )}

        <div className="container mx-auto px-4 z-10" data-oid="1bj41o-">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            data-oid="zkf.dp5"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-center"
              animate={{
                textShadow: isHovered
                  ? "0 0 15px rgba(255,255,255,0.5)"
                  : "0 0 0px rgba(255,255,255,0)",
              }}
              transition={{ duration: 0.3 }}
              data-oid="vw-0d60"
            >
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
                animate={{
                  x: mousePosition.x * 0.05,
                  y: mousePosition.y * 0.05,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                data-oid="xdkv9ak"
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
            data-oid="tkraii6"
          >
            <Mail className="h-4 w-4" data-oid="rrl6qxm" />
            <span data-oid="2c:0q6:">mr1398463@gmail.com</span>
            <span className="mx-2" data-oid="2v:zi3g">
              |
            </span>
            <span data-oid=":95cv8n">(+91)9500255291</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl text-lg md:text-xl mb-12 leading-relaxed text-center mx-auto"
            data-oid="u2nx2uq"
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
              data-oid="v_xvs.r"
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            data-oid="c3ay.r0"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              data-oid="r551e9w"
            >
              <span className="relative z-10" data-oid="u-e68dr">
                View Projects
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="fz1c7zr"
              />

              <ArrowRight
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
                data-oid="dahjn7l"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group relative overflow-hidden border-primary/50"
              data-oid="9wijuxx"
            >
              <span className="relative z-10" data-oid="3abr8dd">
                Contact Me
              </span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                data-oid="1x0ycc3"
              />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4 justify-center"
            data-oid="z6.ga1z"
          >
            <SocialButton
              icon={<Github className="h-5 w-5" data-oid="7umz8o6" />}
              url="https://github.com"
              label="GitHub"
              data-oid="35mpb74"
            />

            <SocialButton
              icon={<Linkedin className="h-5 w-5" data-oid="e4.1rij" />}
              url="https://linkedin.com"
              label="LinkedIn"
              data-oid="ivdmsw3"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence data-oid="3m_5z2y">
          {showScrollIndicator && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              data-oid="xb7bk7a"
            >
              <motion.p
                className="text-sm text-muted-foreground mb-2"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="e2k7snd"
              >
                Scroll to explore
              </motion.p>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                data-oid="rp_s:-0"
              >
                <ChevronDown
                  className="h-5 w-5 text-muted-foreground"
                  data-oid="j-dvlfj"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive cursor */}
        <AnimatePresence data-oid="nhe7yeo">
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
              data-oid=":z7h5fk"
            >
              <MousePointer
                className="h-3 w-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary"
                data-oid="r-f91:j"
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
      data-oid="t2u5iqn"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="transition-transform duration-300 group-hover:scale-110"
        data-oid="3h335t7"
      >
        {icon}
        <span
          className="absolute inset-0 rounded-full bg-primary/10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
          data-oid="f3pxzxb"
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
      <span data-oid="dzuhjd1">
        {displayedText}
        <span className="animate-pulse" data-oid="0940agy">
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
      data-oid="ft.srlj"
    />
  );
}
