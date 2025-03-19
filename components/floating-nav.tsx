"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Code,
  Briefcase,
  GraduationCap,
  Book,
  Send,
  Menu,
  X,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "#",
    icon: <Home className="h-[18px] w-[18px]" data-oid="sviq9br" />,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: <Code className="h-[18px] w-[18px]" data-oid="yp_95an" />,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: <Briefcase className="h-[18px] w-[18px]" data-oid="s_pmew6" />,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: <Code className="h-[18px] w-[18px] rotate-90" data-oid="hxsvrzj" />,
  },
  {
    name: "Education",
    href: "#education",
    icon: <GraduationCap className="h-[18px] w-[18px]" data-oid="rdrb4f0" />,
  },
  {
    name: "Publications",
    href: "#publications",
    icon: <Book className="h-[18px] w-[18px]" data-oid="ow7us8." />,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: <Send className="h-[18px] w-[18px]" data-oid="p74myif" />,
  },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      // Hide the floating nav completely
      setIsVisible(false);

      // Show back to top button after scrolling down further
      if (window.scrollY > 800) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Determine active section
      const sections = navItems
        .map((item) => item.href.slice(1))
        .filter(Boolean);

      const currentSection = sections.reduce((current, section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section active if it's in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            return section;
          }
        }
        return current;
      }, "");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    } else {
      toast({
        title: "Section not found",
        description: `The section "${href}" could not be found on the page.`,
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* Desktop floating navigation */}
      <AnimatePresence data-oid="7-j.:si">
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
            data-oid="2h843y6"
          >
            <div
              className="backdrop-blur-md bg-background/80 rounded-full border shadow-lg p-1.5"
              data-oid=".lsaduv"
            >
              <nav className="flex items-center gap-1" data-oid="m4xd-h7">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleItemClick(e, item.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300",
                      activeSection === item.href.slice(1)
                        ? "text-white bg-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent",
                    )}
                    data-oid=".s137d6"
                  >
                    {item.icon}
                    <span data-oid="_e54k8z">{item.name}</span>

                    {activeSection === item.href.slice(1) && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-primary -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        data-oid="zbmhuq."
                      />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating navigation button */}
      <AnimatePresence data-oid="hgza20l">
        {showBackToTop && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 md:hidden"
            data-oid="kewm:z5"
          >
            <Button
              size="icon"
              className="h-12 w-12 rounded-full shadow-lg bg-primary text-white"
              onClick={() => setIsOpen(!isOpen)}
              data-oid="mrlxvo2"
            >
              {isOpen ? (
                <X className="h-5 w-5" data-oid="wbrq5q0" />
              ) : (
                <Menu className="h-5 w-5" data-oid="5l51287" />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile navigation menu */}
      <AnimatePresence data-oid="27un:sd">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-4 z-50 md:hidden"
            data-oid="_7yq.oz"
          >
            <div
              className="bg-background/95 backdrop-blur-lg rounded-lg border shadow-lg p-2 flex flex-col gap-1 w-48"
              data-oid="32oad55"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleItemClick(e, item.href)}
                  className={cn(
                    "px-3 py-2 rounded-md flex items-center gap-3 transition-all duration-200",
                    activeSection === item.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent text-muted-foreground hover:text-foreground",
                  )}
                  data-oid="q39m254"
                >
                  {item.icon}
                  <span data-oid="pbx9dt8">{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence data-oid="g:g254e">
        {showBackToTop && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 left-4 z-50"
            data-oid="ls4fkd."
          >
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full shadow-md bg-background/80 backdrop-blur-sm hover:bg-accent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="Back to top"
              data-oid="s8sopi4"
            >
              <ChevronUp className="h-5 w-5" data-oid="q9h_m1j" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
