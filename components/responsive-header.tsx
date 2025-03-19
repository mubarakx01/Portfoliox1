"use client";

import { useState, useEffect } from "react";
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

  // Handle scroll effect
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Only add event listener client-side
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // If not mounted yet, render a simpler version to avoid hydration issues
  if (!isMounted) {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        data-oid="6db8qym"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid=":p5olvf"
        >
          <div className="flex items-center gap-2" data-oid="us5l:e2">
            <div className="font-bold text-xl" data-oid=".rje8h9">
              SW
            </div>
            <div className="hidden md:block" data-oid="p727:r-">
              <div className="font-bold" data-oid=":7se3if">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="0cym4wu">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid="ttfl07-">
            <div className="h-9 w-9" data-oid="jur:3-i"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="_8hiced">
              <Button variant="ghost" size="icon" data-oid="cm-dtfo">
                <Menu className="h-5 w-5" data-oid="qbb91s:" />
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
      data-oid=":xsf5_j"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="ccg7qgk"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="sqrrb_."
        >
          <div className="flex items-center gap-2" data-oid=".41gayx">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid="uw9lnbj"
            >
              MA
            </div>
            <div className="hidden md:block" data-oid="5ajykga">
              <div className="font-bold" data-oid="3uc05:b">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="gjx_lm9">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="u06tnzs"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid=":pqq_pq"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid=".2mc-ez"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="bx2i0av">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="_25kp2r"
          >
            <ThemeSwitcher data-oid="vdvwh4k" />
          </motion.div>

          <div className="md:hidden" data-oid="wxhbe0.">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="663ahhh"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="-:1dmsv" />
              ) : (
                <Menu className="h-5 w-5" data-oid="r0zh4a9" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="cnr6fl5">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid="yzalpj:"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="eeq32tm">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="eylp3ei"
                >
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="x.-dy3:"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="rt2y6r4">
                <div
                  className="flex items-center justify-between"
                  data-oid="2:p-f09"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="1:ipe2z"
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
