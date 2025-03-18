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
        data-oid="fxg:0z4"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid=".xdkbeo"
        >
          <div className="flex items-center gap-2" data-oid="jii74-z">
            <div className="font-bold text-xl" data-oid="6:c-:g5">
              SW
            </div>
            <div className="hidden md:block" data-oid="lgal1pg">
              <div className="font-bold" data-oid="::2oe3o">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="q2fqk:1">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid="cqehu:q">
            <div className="h-9 w-9" data-oid="nnrlpg4"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="vcqaaiu">
              <Button variant="ghost" size="icon" data-oid="azyombb">
                <Menu className="h-5 w-5" data-oid="jozdij0" />
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
      data-oid="jw0hlgu"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="1:er6da"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="7:ho0-o"
        >
          <div className="flex items-center gap-2" data-oid="9:wq.f_">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid="jzp5tj-"
            >
              MA
            </div>
            <div className="hidden md:block" data-oid="q-v8ty:">
              <div className="font-bold" data-oid="3wlpu:d">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="fgzay_x">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="gfyepah"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="sjbis:e"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="_nap5yo"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="l6f.s34">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="3:01hi5"
          >
            <ThemeSwitcher data-oid="8rqh.md" />
          </motion.div>

          <div className="md:hidden" data-oid="uucnbvj">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="in7g.eq"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="s2yq_vj" />
              ) : (
                <Menu className="h-5 w-5" data-oid="nufw9cg" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="3daz8pr">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid="lzah3l0"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="b0b_pm8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="58d_o_n"
                >
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="ukmk.6l"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="qkmb46h">
                <div
                  className="flex items-center justify-between"
                  data-oid="rbdehmo"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="mwn24n:"
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
