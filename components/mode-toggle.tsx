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
    <DropdownMenu data-oid="wslxszj">
      <DropdownMenuTrigger asChild data-oid="5ssm9m8">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="dky1ik4"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="i3kmt0r"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="f-au60r"
          />

          <span className="sr-only" data-oid="vf1usb2">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-fade-in"
        data-oid="38ptndp"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          data-oid="8m:tkiu"
        >
          <Sun className="h-4 w-4 mr-2 text-golden-nugget" data-oid="0rn7x5d" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          data-oid="4bup1i0"
        >
          <Moon className="h-4 w-4 mr-2 text-bite-tongue" data-oid="l-6qj-:" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
          data-oid="cps1ih6"
        >
          <span
            className="h-4 w-4 mr-2 flex items-center justify-center text-xs"
            data-oid="sadequ."
          >
            💻
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
