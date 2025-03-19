"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  useExtendedTheme,
  type ColorTheme,
  type Theme,
} from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Sun, Moon, Laptop, Palette, Check } from "lucide-react";

interface ThemeOption {
  value: Theme;
  label: string;
  icon: React.ReactNode;
}

interface ColorOption {
  value: ColorTheme;
  label: string;
  color: string;
  darkColor: string;
}

const themeOptions: ThemeOption[] = [
  {
    value: "light",
    label: "Light",
    icon: <Sun className="h-5 w-5" data-oid="4_hu-_:" />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon className="h-5 w-5" data-oid="je:7m_2" />,
  },
  {
    value: "system",
    label: "System",
    icon: <Laptop className="h-5 w-5" data-oid="wfg37n8" />,
  },
];

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

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme, colorTheme, setColorTheme } =
    useExtendedTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"mode" | "color">("mode");
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="relative overflow-hidden"
        data-oid="b570:nj"
      >
        <span className="sr-only" data-oid="nx-gt4e">
          Toggle theme
        </span>
      </Button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} data-oid="v9bdi35">
      <PopoverTrigger asChild data-oid="r9ym-7v">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="pibaqwg"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid=".u.wfv0"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="ibbknp_"
          />

          <span className="sr-only" data-oid="fedxgs6">
            Toggle theme
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[240px] p-0" data-oid="vp.muaa">
        <div className="p-1" data-oid="6j-9em0">
          <Tabs
            defaultValue="mode"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "mode" | "color")}
            data-oid="u4ravz0"
          >
            <TabsList className="grid grid-cols-2" data-oid="8_c7a76">
              <TabsTrigger value="mode" className="text-xs" data-oid="pt-syt4">
                Mode
              </TabsTrigger>
              <TabsTrigger value="color" className="text-xs" data-oid="6dbbh6t">
                <Palette className="h-3.5 w-3.5 mr-1" data-oid="4bmf-ca" />
                Color
              </TabsTrigger>
            </TabsList>
            <div className="p-4 pt-2" data-oid="2z6wxew">
              {activeTab === "mode" ? (
                <div className="grid grid-cols-3 gap-2" data-oid="ppn2.l:">
                  {themeOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme(option.value)}
                      className={cn(
                        "justify-start gap-1",
                        theme === option.value &&
                          "border-primary bg-primary/10",
                      )}
                      data-oid=".7buk-3"
                    >
                      {option.icon}
                      <span className="text-xs" data-oid="w389si_">
                        {option.label}
                      </span>
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2" data-oid=":z66fa0">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setColorTheme(option.value)}
                      className="relative flex flex-col items-center justify-center p-1 rounded-md hover:bg-muted transition-colors"
                      data-oid="z2brb4:"
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full bg-gradient-to-br",
                          isDark ? option.darkColor : option.color,
                        )}
                        data-oid=":1ltp8a"
                      />

                      <span className="text-xs mt-1" data-oid=".vb4ym.">
                        {option.label}
                      </span>
                      {colorTheme === option.value && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-0.5"
                          data-oid="p6m3.v:"
                        >
                          <Check className="h-3 w-3" data-oid="x8t86bb" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  );
}
