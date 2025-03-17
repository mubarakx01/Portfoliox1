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
        data-oid="y_fz29i"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid="m64bvr_"
        >
          <div className="flex items-center gap-2" data-oid="vfgdqnu">
            <div className="font-bold text-xl" data-oid="-2fyp21">
              SW
            </div>
            <div className="hidden md:block" data-oid="u9df.w-">
              <div className="font-bold" data-oid="0coctp4">
                Shaquille Williams
              </div>
              <div className="text-xs text-muted-foreground" data-oid="xbs:aun">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid="7puun64">
            <div className="h-9 w-9" data-oid="x_09j8h"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="1.5haqc">
              <Button variant="ghost" size="icon" data-oid="8d0irqc">
                <Menu className="h-5 w-5" data-oid="_6y4vlh" />
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
      data-oid="te3.os4"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="3iui_5a"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="5r6tp34"
        >
          <div className="flex items-center gap-2" data-oid="j.0h75h">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid="nrmgcv7"
            >
              SW
            </div>
            <div className="hidden md:block" data-oid="63dhc4t">
              <div className="font-bold" data-oid="w0nwltl">
                Shaquille Williams
              </div>
              <div className="text-xs text-muted-foreground" data-oid="nfk.ue_">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="48_z-cz"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="p:y2j3i"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="2ld3ut:"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="4ayk305">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="62fyrz4"
          >
            <ThemeSwitcher data-oid="tjvyzts" />
          </motion.div>

          <div className="md:hidden" data-oid="3t-d3ap">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="06cam01"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="zhglj-x" />
              ) : (
                <Menu className="h-5 w-5" data-oid="d7:km3s" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="cj36-ye">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid="ks-ioug"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="kkesanf">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="zr9uieg"
                >
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="tgfkqj9"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="ycg::_j">
                <div
                  className="flex items-center justify-between"
                  data-oid="ev.jow1"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid=":g-p904"
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
