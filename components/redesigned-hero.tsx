"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CustomGradientBackground } from "@/components/custom-gradient-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
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
      data-oid="ozbcs.5"
    >
      <motion.div
        ref={containerRef}
        style={isClient ? { opacity, scale, y } : {}}
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="90vx68x"
      >
        {/* Left column - Text content */}
        <div
          className="order-2 md:order-1 text-center md:text-left"
          data-oid="8-knjvu"
        >
          <ScrollReveal data-oid="lt-:dnr">
            <Badge
              className="mb-4 px-3 py-1.5 text-sm bg-primary/20 border-primary/30 text-primary"
              data-oid="7c60sf0"
            >
              Software Engineer
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1} data-oid="n4crc-l">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 tracking-tight"
              data-oid="vqtva34"
            >
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-happy-hearts to-golden-nugget"
                data-oid="u36pn:a"
              >
                MUBARAK A
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2} data-oid="-ev8hjs">
            <p
              className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 leading-relaxed"
              data-oid="3r_-n0b"
            >
              {isClient && displayedText.length === fullText.length ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightText(displayedText),
                  }}
                  data-oid="vyxai:t"
                />
              ) : (
                <>
                  {displayedText}
                  {isClient && (
                    <span className="animate-pulse" data-oid="8f1mryk">
                      |
                    </span>
                  )}
                </>
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} data-oid="147t23t">
            <div
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-6 md:mb-8"
              data-oid="9jbmq.."
            >
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-estragon/30 hover:bg-estragon/10 transition-colors"
                data-oid="ndiq53r"
              >
                Machine Learning
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-estragon/30 hover:bg-estragon/10 transition-colors"
                data-oid="ofbss52"
              >
                Generative AI
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-colors"
                data-oid="v424av-"
              >
                Computer Vision
              </Badge>
              <Badge
                variant="outline"
                className="px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-colors"
                data-oid="-bkws4:"
              >
                NLP
              </Badge>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4} data-oid="gspe2z4">
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 md:mb-8"
              data-oid=":dlvshb"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group relative overflow-hidden shadow-lg hover:shadow-happy-hearts/20 transition-all duration-300 bg-happy-hearts hover:bg-happy-hearts/90 text-white"
                data-oid="di9m5iy"
              >
                <span className="relative z-10" data-oid="wegsc_w">
                  View Projects
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-happy-hearts to-bite-tongue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-oid="2v7470t"
                />

                <ExternalLink
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10"
                  data-oid="k-_8ee1"
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleContactClick}
                className="group relative overflow-hidden border-copper-coin/50 hover:border-copper-coin transition-colors duration-300"
                data-oid=":yayo12"
              >
                <span className="relative z-10" data-oid="-_dn.op">
                  Contact Me
                </span>
                <span
                  className="absolute inset-0 bg-gradient-to-r from-copper-coin/10 to-golden-nugget/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-oid="j27s-km"
                />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5} data-oid="c-:5891">
            <div
              className="flex gap-4 justify-center md:justify-start"
              data-oid="x88_ltw"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-succulent/10 transition-all duration-300 hover:scale-110"
                data-oid="f6ukm.5"
              >
                <a
                  href="https://github.com/mubarakx01"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  data-oid="z:7nv7c"
                >
                  <Github className="h-5 w-5" data-oid="wd5_5uv" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                data-oid=":laqzc2"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  data-oid="mayhtl4"
                >
                  <Linkedin className="h-5 w-5" data-oid="ph9-p19" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
                data-oid="-cbtb9b"
              >
                <a
                  href="mailto:mr1398463@gmail.com"
                  aria-label="Email"
                  data-oid="6e9txgu"
                >
                  <Mail className="h-5 w-5" data-oid="rrswl81" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column - Image */}
        <div
          className="order-1 md:order-2 flex justify-center mb-6 md:mb-0"
          data-oid="_t1thg2"
        >
          <ScrollReveal direction="left" data-oid="rf83dpt">
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
              data-oid="r0q3qmk"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                fill
                className="object-cover"
                priority
                data-oid="ojo1.bu"
              />

              {/* Decorative elements */}
              <div
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/30 rounded-full blur-xl"
                data-oid="sh29e0d"
              />

              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/30 rounded-full blur-xl"
                data-oid="qvkiiyn"
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
                  data-oid="kyrq3ua"
                />
              )}
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        {isClient && (
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            data-oid="y3xpp5."
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              whileHover={{ scale: 1.1 }}
              data-oid="plvf6ze"
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
                data-oid="d9356tw"
              >
                <ArrowDown className="h-4 w-4" data-oid="f6sne_1" />
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </CustomGradientBackground>
  );
}
