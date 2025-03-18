"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useExtendedTheme, type ColorTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Palette, Check } from "lucide-react";

interface ThemePreviewProps {
  className?: string;
}

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

export function ThemePreview({ className }: ThemePreviewProps) {
  const { theme, setTheme, resolvedTheme, colorTheme, setColorTheme } =
    useExtendedTheme();
  const [hoveredTheme, setHoveredTheme] = useState<ColorTheme | null>(null);
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely access theme information
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Card
        className={cn(
          "border-none bg-background/50 backdrop-blur-sm",
          className,
        )}
        data-oid="h:dymg."
      >
        <CardContent className="p-4" data-oid="-ou:1kf">
          <div
            className="h-[150px] flex items-center justify-center"
            data-oid="r4.je.-"
          >
            <div className="animate-pulse" data-oid="i5tdo4j">
              Loading theme options...
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Card
      className={cn("border-none bg-background/50 backdrop-blur-sm", className)}
      data-oid="dax4p.z"
    >
      <CardContent className="p-4" data-oid="ex2:0ze">
        <div className="flex items-center gap-2 mb-3" data-oid="6cp1jl0">
          <Palette className="h-4 w-4 text-primary" data-oid="ibds-rr" />
          <h3 className="text-sm font-medium" data-oid="rlhd8vz">
            Theme Customization
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-3" data-oid="z1hhqww">
          <Button
            variant={isDark ? "default" : "outline"}
            size="sm"
            className="text-xs h-8"
            onClick={() => setTheme("dark")}
            data-oid="pn7fxk0"
          >
            Dark Mode
          </Button>
          <Button
            variant={!isDark ? "default" : "outline"}
            size="sm"
            className="text-xs h-8"
            onClick={() => setTheme("light")}
            data-oid="7rxv-0n"
          >
            Light Mode
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2" data-oid="j7lg_v2">
          {colorOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => setColorTheme(option.value)}
              onMouseEnter={() => setHoveredTheme(option.value)}
              onMouseLeave={() => setHoveredTheme(null)}
              whileHover={{ scale: 1.05 }}
              className="relative flex flex-col items-center justify-center p-1 rounded-md hover:bg-muted transition-colors"
              data-oid="4y3dr1b"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full bg-gradient-to-br transition-transform duration-300",
                  isDark ? option.darkColor : option.color,
                  (hoveredTheme === option.value ||
                    colorTheme === option.value) &&
                    "scale-110",
                )}
                data-oid="kwnbjy5"
              />

              <span className="text-xs mt-1" data-oid="kbk:o8s">
                {option.label}
              </span>
              {colorTheme === option.value && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-0.5"
                  data-oid="be-044b"
                >
                  <Check className="h-3 w-3" data-oid="962:dks" />
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
