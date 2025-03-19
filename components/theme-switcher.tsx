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
    icon: <Sun className="h-5 w-5" data-oid="6-3:kye" />,
  },
  {
    value: "dark",
    label: "Dark",
    icon: <Moon className="h-5 w-5" data-oid="98l0-:6" />,
  },
  {
    value: "system",
    label: "System",
    icon: <Laptop className="h-5 w-5" data-oid="e0sa0ea" />,
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
        data-oid="9j5tl63"
      >
        <span className="sr-only" data-oid="ea1dh8n">
          Toggle theme
        </span>
      </Button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} data-oid="g3354g8">
      <PopoverTrigger asChild data-oid="5fdlw5o">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="txp1ccz"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="-dqdgyp"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="s3rjdeo"
          />

          <span className="sr-only" data-oid="wb4jrpd">
            Toggle theme
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[240px] p-0" data-oid="itaj39.">
        <div className="p-1" data-oid="tp200m2">
          <Tabs
            defaultValue="mode"
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "mode" | "color")}
            data-oid="wzaaf:l"
          >
            <TabsList className="grid grid-cols-2" data-oid="m::f5cw">
              <TabsTrigger value="mode" className="text-xs" data-oid="1patsie">
                Mode
              </TabsTrigger>
              <TabsTrigger value="color" className="text-xs" data-oid="_.2wryu">
                <Palette className="h-3.5 w-3.5 mr-1" data-oid="vj2ewgk" />
                Color
              </TabsTrigger>
            </TabsList>
            <div className="p-4 pt-2" data-oid="h9s_12.">
              {activeTab === "mode" ? (
                <div className="grid grid-cols-3 gap-2" data-oid="ceqsmnz">
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
                      data-oid="m7_8jmq"
                    >
                      {option.icon}
                      <span className="text-xs" data-oid="4n65p29">
                        {option.label}
                      </span>
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2" data-oid="7.khzr7">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setColorTheme(option.value)}
                      className="relative flex flex-col items-center justify-center p-1 rounded-md hover:bg-muted transition-colors"
                      data-oid="v7gj70m"
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full bg-gradient-to-br",
                          isDark ? option.darkColor : option.color,
                        )}
                        data-oid="_h1n:9e"
                      />

                      <span className="text-xs mt-1" data-oid="d.dx04s">
                        {option.label}
                      </span>
                      {colorTheme === option.value && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-0 right-0 bg-primary text-primary-foreground rounded-full p-0.5"
                          data-oid="evzkkgt"
                        >
                          <Check className="h-3 w-3" data-oid=".7d9_s_" />
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
