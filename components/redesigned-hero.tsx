"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomGradientBackground } from "@/components/custom-gradient-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  ExternalLink,
  Download,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useIsClient } from "@/hooks/use-is-client";

export default function RedesignedHero() {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isClient = useIsClient();

  // Safe scroll progress - only run on client
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
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
      description: "Email: mr1398463@gmail.com | Phone: (+91)9500255291",
      duration: 5000,
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Typing effect for the subtitle
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "  Software Engineer, AI Specialist, and Community Organizer specializing in machine learning, generative AI.";

  useEffect(() => {
    if (!isClient) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [fullText, isClient]);

  // Function to highlight specific terms in the text
  const highlightText = (text: string) => {
    const termsToHighlight = [
      "AI",
      "machine learning",
      "generative AI",
      "cybersecurity",
      "STEM",
    ];

    let highlightedText = text;

    termsToHighlight.forEach((term) => {
      // Use case-insensitive regex that preserves the original casing
      const regex = new RegExp(`(${term})`, "gi");
      highlightedText = highlightedText.replace(regex, (match) => {
        return `<span class="text-primary font-semibold">${match}</span>`;
      });
    });

    return highlightedText;
  };

  return (
    <CustomGradientBackground
      className="min-h-screen flex items-center"
      data-oid="csq3ldo"
    >
      <motion.div
        ref={containerRef}
        style={isClient ? { opacity, scale, y } : {}}
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="64crhzv"
      >
        {/* Left column - Text content */}
        <div
          className="order-2 md:order-1 text-center md:text-left"
          data-oid="ozls.v0"
        >
          <ScrollReveal data-oid="i7r48da">
            <Badge
              className="mb-4 px-3 py-1.5 text-sm bg-primary/20 border-primary/30 text-primary"
              data-oid="1uhbc-9"
            >
              Software Engineer
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1} data-oid="fs.nxrl">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
              data-oid="1vo8lak"
            >
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-happy-hearts to-golden-nugget"
                data-oid=".2klk9g"
              >
                MUBARAK A
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2} data-oid="paxeji6">
            <p
              className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed"
              data-oid="gwnjy6m"
            >
              {isClient && displayedText.length === fullText.length ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightText(displayedText),
                  }}
                  data-oid="6i4ic1:"
                />
              ) : (
                <>
                  {displayedText}
                  {isClient && (
                    <span className="animate-pulse" data-oid="j2tanzc">
                      |
                    </span>
                  )}
                </>
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} data-oid="n_-leh3">
            <div
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 md:mb-8"
              data-oid="7r.17dn"
            >
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-estragon/30 hover:bg-estragon/10 transition-colors"
                data-oid="9g2jrn2"
              >
                Machine Learning
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-estragon/30 hover:bg-estragon/10 transition-colors"
                data-oid="m72y0k9"
              >
                Generative AI
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-colors"
                data-oid="dbp.wqy"
              >
                Computer Vision
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-colors"
                data-oid="sxrzevy"
              >
                NLP
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} data-oid="ij6z66b">
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 md:mb-8"
              data-oid="z0mz0et"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden shadow-lg hover:shadow-happy-hearts/20 transition-all duration-300 bg-happy-hearts hover:bg-happy-hearts/90 text-white"
                data-oid="nx4456k"
              >
                <span className="relative z-10" data-oid="_34boe9">
                  View Projects
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-happy-hearts to-bite-tongue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-oid="gj5f92v"
                />

                <ExternalLink
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
                  data-oid="ctz9.p."
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleContactClick}
                className="group relative overflow-hidden border-copper-coin/50 hover:border-copper-coin transition-colors duration-300"
                data-oid="6i.egfo"
              >
                <span className="relative z-10" data-oid="3dy.ej-">
                  Contact Me
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-copper-coin/10 to-golden-nugget/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-oid="mib_1kh"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="group relative overflow-hidden border-copper-coin/50 hover:border-copper-coin transition-colors duration-300"
                data-oid="fem4fpb"
              >
                <a href="/AI_x1.pdf" download="AI_x1.pdf" data-oid="e1l8u-1">
                  <span
                    className="relative z-10 flex items-center"
                    data-oid="x70likq"
                  >
                    Download Resume
                    <Download
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5"
                      data-oid="wvz32wy"
                    />
                  </span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-copper-coin/10 to-golden-nugget/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="b9oxxs."
                  />
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} data-oid=":zn7o:m">
            <div
              className="flex gap-4 justify-center md:justify-start"
              data-oid="t8rep8l"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-succulent/10 transition-all duration-300 hover:scale-110"
                data-oid="27f2ra1"
              >
                <a
                  href="https://github.com/mubarakx01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  data-oid="53_xhw3"
                >
                  <Github className="h-5 w-5" data-oid="ep0j992" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                data-oid="7vqybe3"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  data-oid="sp3u1km"
                >
                  <Linkedin className="h-5 w-5" data-oid="5lz74wx" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                data-oid="a39v43o"
              >
                <a
                  href="mailto:mr1398463@gmail.com"
                  aria-label="Email"
                  data-oid="096evbl"
                >
                  <Mail className="h-5 w-5" data-oid="dbnyhfi" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column - Image */}
        <div
          className="order-1 md:order-2 flex justify-center mb-6 md:mb-0"
          data-oid="p3hwdbv"
        >
          <ScrollReveal direction="left" data-oid="z.4t7i7">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              animate={
                isClient && isHovered
                  ? {
                      x: mousePosition.x * -0.5,
                      y: mousePosition.y * -0.5,
                    }
                  : {}
              }
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              data-oid=":20_jez"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                fill
                className="object-cover"
                priority
                data-oid="4aovzl:"
              />

              {/* Decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/30 rounded-full blur-xl"
                data-oid="-_2x4kv"
              />

              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full blur-xl"
                data-oid="jvit9lz"
              />

              {/* Add a subtle pulsing glow effect */}
              {isClient && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay left-[4px] top-[4px]"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  data-oid="2kpwn.v"
                />
              )}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        {isClient && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            data-oid="zf_.ygp"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              whileHover={{ scale: 1.1 }}
              data-oid="7m6c98e"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                data-oid="a8real2"
              >
                <ArrowDown className="h-4 w-4" data-oid="wrrvwsd" />
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </CustomGradientBackground>
  );
}
