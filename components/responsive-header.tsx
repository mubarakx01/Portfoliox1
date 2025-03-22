"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ResponsiveHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Function to determine which section is currently in view
  const determineActiveSection = useCallback(() => {
    const sections = ["home", "skills", "experience", "projects", "contact"];

    // Check if we're at the top of the page (home section)
    if (window.scrollY < 100) {
      setActiveSection("");
      return;
    }

    // Find which section is currently in view
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the section is in the viewport (with some buffer for better UX)
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          return;
        }
      }
    }
  }, []);

  // Handle scroll effect
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      determineActiveSection();
    };

    // Only add event listener client-side
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [determineActiveSection]);

  const navItems = [
    { name: "Home", href: "#", id: "" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // If not mounted yet, render a simpler version to avoid hydration issues
  if (!isMounted) {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        data-oid="da-n02p"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid=".ws9sa3"
        >
          <div className="flex items-center gap-2" data-oid="6-8fk.d">
            <div className="font-bold text-xl" data-oid="gxuq8b8">
              SW
            </div>
            <div className="hidden md:block" data-oid="c3qdbi.">
              <div className="font-bold" data-oid="vglv4uk">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="zilb:qg">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid="ywmyuo-">
            <div className="h-9 w-9" data-oid="_t6aeh7"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="malz_oz">
              <Button variant="ghost" size="icon" data-oid="dq5ib6x">
                <Menu className="h-5 w-5" data-oid="i7hajct" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
      style={{ "--primary-rgb": "14, 165, 233" } as React.CSSProperties}
      data-oid="spvqu_g"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="yfwzihi"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="vo5jsc4"
        >
          <div className="flex items-center gap-2" data-oid="xeb_a_0">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid="x8_itkr"
            >
              MA
            </div>
            <div className="hidden md:block" data-oid="3gdk223">
              <div className="font-bold" data-oid="a_ftast">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="04h7.-q">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="e-6:3si"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="v3n:y2z"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-primary after:transition-all",
                  activeSection === item.id
                    ? "text-primary font-medium after:w-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.3)]"
                    : "after:w-0 hover:after:w-full",
                )}
                data-oid="t5.be:y"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="3bgu4xm">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="m57sa6c"
          >
            <ThemeSwitcher data-oid="diz8n7s" />
          </motion.div>

          <div className="md:hidden" data-oid="1_fg7cp">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="4hoee7."
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="jpuc9kv" />
              ) : (
                <Menu className="h-5 w-5" data-oid="vmbzky6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="vdf:o2x">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid=".6s_bm6"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="4vjg0k6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="k9p0cq3"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 transition-colors",
                      activeSection === item.id
                        ? "text-primary font-medium bg-primary/10 px-3 rounded-md"
                        : "hover:text-primary",
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="5-yb66t"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="ljtdiaq">
                <div
                  className="flex items-center justify-between"
                  data-oid="ib_pmjw"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="-.-w6jf"
                  >
                    Theme settings
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
