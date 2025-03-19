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
        data-oid="zj:gsxv"
      >
        <div
          className="container flex h-16 items-center justify-between"
          data-oid="kqi51d3"
        >
          <div className="flex items-center gap-2" data-oid="6rlc7sr">
            <div className="font-bold text-xl" data-oid="s7357.r">
              SW
            </div>
            <div className="hidden md:block" data-oid="5yairsp">
              <div className="font-bold" data-oid="y95svk8">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="bgtyp1b">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4" data-oid=".l_gc5s">
            <div className="h-9 w-9" data-oid="163saox"></div>{" "}
            {/* Placeholder for theme toggle */}
            <div className="md:hidden" data-oid="4taaql6">
              <Button variant="ghost" size="icon" data-oid=".vrd0pb">
                <Menu className="h-5 w-5" data-oid="e.-fshe" />
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
      data-oid="cqju92v"
    >
      <div
        className="container flex h-16 items-center justify-between px-4"
        data-oid="q5kl5uw"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="j1m27e9"
        >
          <div className="flex items-center gap-2" data-oid="2x9f6ql">
            <div
              className="font-bold text-xl bg-gradient-to-r from-happy-hearts to-golden-nugget text-transparent bg-clip-text"
              data-oid=":c21fwu"
            >
              MA
            </div>
            <div className="hidden md:block" data-oid="::t4nuf">
              <div className="font-bold" data-oid=":b_506z">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="tygo-ys">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          data-oid="zydfb41"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="kk:_.8j"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="x7tk8a9"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4" data-oid="tuj0js0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid=".zzrkts"
          >
            <ThemeSwitcher data-oid="oohgyj3" />
          </motion.div>

          <div className="md:hidden" data-oid="r00wybw">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="h5ogkys"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="ib10jqq" />
              ) : (
                <Menu className="h-5 w-5" data-oid=".18vcl8" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="5:vk12h">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden bg-background/95 backdrop-blur-md"
            data-oid=".autnyc"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="2w95b9e">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="zvxzm13"
                >
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="dvn31rz"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 border-t border-border" data-oid="_z8oj6n">
                <div
                  className="flex items-center justify-between"
                  data-oid="r50ut88"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="7p29z5i"
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
