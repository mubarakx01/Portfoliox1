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
        data-oid="b1cifg0"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid="atc6s-w"
        >
          <div className="flex items-center gap-2" data-oid="dwwxx7v">
            <div className="font-bold text-xl" data-oid="1y-cb15">
              SW
            </div>
            <div className="hidden md:block" data-oid="2r42qxm">
              <div className="font-bold" data-oid="jt16-s4">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="vgw_9l-">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid="_h8ty6e">
            <div className="h-9 w-9" data-oid="r79m6z6"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="j6sh3o4">
              <Button variant="ghost" size="icon" data-oid="fd0xeln">
                <Menu className="h-5 w-5" data-oid="9f6mdck" />
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
      data-oid="f2g_83_"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="lrojwet"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="22au8he"
        >
          <div className="flex items-center gap-2" data-oid="wyq9vzc">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid="m3wfqem"
            >
              MA
            </div>
            <div className="hidden md:block" data-oid="f:diwmk">
              <div className="font-bold" data-oid="p86fsgp">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="nha7y.m">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="-ys7:2f"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="8dgpa8:"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="fo66ea3"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="ls7t6h4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="4wk54tl"
          >
            <ThemeSwitcher data-oid="z.60rv_" />
          </motion.div>

          <div className="md:hidden" data-oid="b07g6tu">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="gkdwtzy"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="r6sbrpp" />
              ) : (
                <Menu className="h-5 w-5" data-oid="0aba::l" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="jpx8:ni">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid="be2xguy"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="uvql6iy">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="rmqatcr"
                >
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="9v5df8_"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="6qjz_bd">
                <div
                  className="flex items-center justify-between"
                  data-oid="_6qzww."
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid=".vn9dq6"
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
