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
    <DropdownMenu data-oid="g_kj3op">
      <DropdownMenuTrigger asChild data-oid="map:4rp">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="z2lx8xx"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="i8_crtg"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="r9z4qd1"
          />

          <span className="sr-only" data-oid="oo-wghu">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-fade-in"
        data-oid="g6o4wrk"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          data-oid="d5.xwxy"
        >
          <Sun className="h-4 w-4 mr-2 text-golden-nugget" data-oid="yd:ue2g" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          data-oid="lydv_cy"
        >
          <Moon className="h-4 w-4 mr-2 text-bite-tongue" data-oid="ybpbxlg" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
          data-oid="-ivjcgk"
        >
          <span
            className="h-4 w-4 mr-2 flex items-center justify-center text-xs"
            data-oid="0xc.z61"
          >
            💻
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
