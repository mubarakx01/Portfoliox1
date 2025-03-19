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
    <DropdownMenu data-oid="1qj0egu">
      <DropdownMenuTrigger asChild data-oid="kynk61d">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="uafp752"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="bofwodt"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="8decqva"
          />

          <span className="sr-only" data-oid=".gf37kw">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-fade-in"
        data-oid="t.r0x0y"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          data-oid="yex1lbz"
        >
          <Sun className="h-4 w-4 mr-2 text-golden-nugget" data-oid="mf_e1p2" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          data-oid="rm2sgn."
        >
          <Moon className="h-4 w-4 mr-2 text-bite-tongue" data-oid="eqcsuyd" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
          data-oid="aq.yivo"
        >
          <span
            className="h-4 w-4 mr-2 flex items-center justify-center text-xs"
            data-oid="eh:b993"
          >
            💻
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
