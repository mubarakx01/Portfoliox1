"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu data-oid="vbn:ge.">
      <DropdownMenuTrigger asChild data-oid="_wju8li">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="xnm_kqi"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="lc:i1os"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="mw01mnj"
          />

          <span className="sr-only" data-oid="ea38jxd">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-fade-in"
        data-oid="3.7fwm_"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          data-oid="4wjg8lf"
        >
          <Sun className="h-4 w-4 mr-2 text-golden-nugget" data-oid="wrwn.m6" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          data-oid="y0p2oe1"
        >
          <Moon className="h-4 w-4 mr-2 text-bite-tongue" data-oid="lt.wxxk" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
          data-oid="ndzjcc3"
        >
          <span
            className="h-4 w-4 mr-2 flex items-center justify-center text-xs"
            data-oid="m2e7x.d"
          >
            💻
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
