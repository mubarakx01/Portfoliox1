"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExtendedTheme, type ColorTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Palette, Sun, Moon, X, Check } from "lucide-react";

interface ColorOption {
  value: ColorTheme;
  label: string;
  color: string;
  darkColor: string;
}

const colorOptions: ColorOption[] = [
  {
    value: "default",
    label: "Default",
    color: "from-[#d6665d] to-[#db8b40]",
    darkColor: "from-[#d6665d] to-[#db8b40]",
  },
  {
    value: "ocean",
    label: "Ocean",
    color: "from-blue-500 to-cyan-500",
    darkColor: "from-blue-600 to-cyan-600",
  },
  {
    value: "forest",
    label: "Forest",
    color: "from-green-500 to-emerald-500",
    darkColor: "from-green-600 to-emerald-600",
  },
  {
    value: "sunset",
    label: "Sunset",
    color: "from-orange-500 to-red-500",
    darkColor: "from-orange-600 to-red-600",
  },
  {
    value: "lavender",
    label: "Lavender",
    color: "from-purple-500 to-pink-500",
    darkColor: "from-purple-600 to-pink-600",
  },
  {
    value: "monochrome",
    label: "Monochrome",
    color: "from-gray-400 to-gray-600",
    darkColor: "from-gray-600 to-gray-800",
  },
];

export function FloatingThemeSwitcher() {
  const { theme, setTheme, resolvedTheme, colorTheme, setColorTheme } =
    useExtendedTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Safely determine the current theme
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="fixed bottom-20 right-4 z-40" data-oid="jtqgdo2">
      <AnimatePresence data-oid=".wbo36y">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-2 p-3 bg-background/95 backdrop-blur-md rounded-lg border shadow-lg"
            data-oid="l8vy8-."
          >
            <div
              className="flex justify-between items-center mb-2"
              data-oid="pzafaoc"
            >
              <h3 className="text-sm font-medium" data-oid="qwablnz">
                Theme
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0"
                onClick={() => setIsOpen(false)}
                data-oid="185-qgl"
              >
                <X className="h-4 w-4" data-oid="svsjeau" />
              </Button>
            </div>

            <div className="flex gap-2 mb-3" data-oid="rlst100">
              <Button
                variant={isDark ? "default" : "outline"}
                size="sm"
                className="gap-1"
                onClick={() => setTheme("dark")}
                data-oid="6yezgei"
              >
                <Moon className="h-3.5 w-3.5" data-oid="rohv32l" />
                <span className="text-xs" data-oid="-3unpz4">
                  Dark
                </span>
              </Button>
              <Button
                variant={!isDark ? "default" : "outline"}
                size="sm"
                className="gap-1"
                onClick={() => setTheme("light")}
                data-oid="oqh6di0"
              >
                <Sun className="h-3.5 w-3.5" data-oid="p8qfszv" />
                <span className="text-xs" data-oid="a-q49yd">
                  Light
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2" data-oid="ryezsub">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setColorTheme(option.value)}
                  className="relative flex flex-col items-center justify-center p-1 rounded-md hover:bg-muted transition-colors"
                  data-oid="uq40ioy"
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-gradient-to-br",
                      isDark ? option.darkColor : option.color,
                    )}
                    data-oid="4aovck7"
                  />

                  <span className="text-xs mt-1" data-oid="207nuxa">
                    {option.label}
                  </span>
                  {colorTheme === option.value && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-0.5"
                      data-oid="h.g0d7."
                    >
                      <Check className="h-3 w-3" data-oid="sg3-wbk" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={cn(
          "h-10 w-10 rounded-full shadow-lg",
          isOpen ? "bg-primary text-primary-foreground" : "bg-background",
        )}
        onClick={() => setIsOpen(!isOpen)}
        data-oid="tkb8nh-"
      >
        <Palette className="h-5 w-5" data-oid="27b1eox" />
      </Button>
    </div>
  );
}
