"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent",
      )}
      data-oid="r00kl0r"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="86oter2"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="hg9eqzm"
        >
          <div className="flex items-center gap-2" data-oid="h4cj_ll">
            <div
              className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              data-oid="comc4v6"
            >
              SW
            </div>
            <div className="hidden md:block" data-oid="k8hxl3w">
              <div className="font-bold" data-oid="s0vbol0">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="zf-bf-h">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="ro8:l:w"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="z:97wp3"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  pathname === item.href ? "font-medium" : "",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="dduyvxo"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4" data-oid="86i:lvo">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="7z:keig"
          >
            <ModeToggle data-oid="vg3d1i-" />
          </motion.div>

          <div className="md:hidden" data-oid="hfc9qsk">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="5c6ymxg"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="y6sihz3" />
              ) : (
                <Menu className="h-5 w-5" data-oid="o-4x4i6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="inwp3rc">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden"
            data-oid="blkq6q_"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="af6xcwd">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="f.nn:8h"
                >
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "font-medium" : ""}
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="k49fgc_"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
