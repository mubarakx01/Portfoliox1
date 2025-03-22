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
      data-oid="sd4n44g"
    >
      <div
        className="container flex h-16 items-center justify-between"
        data-oid="4.duwpg"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
          data-oid="8e6by:q"
        >
          <div className="flex items-center gap-2" data-oid="ix7wunx">
            <div
              className="font-bold text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
              data-oid="_tb9irk"
            >
              SW
            </div>
            <div className="hidden md:block" data-oid="4ts2ge1">
              <div className="font-bold" data-oid="005gi5f">
                MUBARAK A
              </div>
              <div className="text-xs text-muted-foreground" data-oid="zebuuhb">
                AI Engineer & Community Builder
              </div>
            </div>
          </div>
        </motion.div>

        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="xigjk15"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              data-oid="rzou:i8"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-primary",
                  pathname === item.href ? "font-medium" : "",
                  "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                )}
                data-oid="lwpd8zd"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4" data-oid="fh1-f3g">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            data-oid="8h-.6pf"
          >
            <ModeToggle data-oid="p0vj5lf" />
          </motion.div>

          <div className="md:hidden" data-oid="e86yrv_">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-oid="gd-7-wc"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" data-oid="xrbr6qb" />
              ) : (
                <Menu className="h-5 w-5" data-oid="nmv93kf" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence data-oid="7t9lsxr">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t overflow-hidden"
            data-oid="ei:resi"
          >
            <div className="flex flex-col space-y-3 p-4" data-oid="zb4.4h9">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  data-oid="05g:qnp"
                >
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "font-medium" : ""}
                    onClick={() => setMobileMenuOpen(false)}
                    data-oid="7g.6x4k"
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
