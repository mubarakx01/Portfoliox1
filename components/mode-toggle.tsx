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
    <DropdownMenu data-oid="4vxw2m3">
      <DropdownMenuTrigger asChild data-oid="r3qd02g">
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden border-border bg-background hover:bg-accent/10"
          data-oid="33txoeg"
        >
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-golden-nugget"
            data-oid="6gc3p.2"
          />

          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-bite-tongue"
            data-oid="57ibvid"
          />

          <span className="sr-only" data-oid="-_53wdj">
            Toggle theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="animate-fade-in"
        data-oid="k1rc-z:"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
          data-oid="n:am_t."
        >
          <Sun className="h-4 w-4 mr-2 text-golden-nugget" data-oid="w099xro" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
          data-oid="d1-xuhg"
        >
          <Moon className="h-4 w-4 mr-2 text-bite-tongue" data-oid="lnj3csc" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
          data-oid="_9-glgr"
        >
          <span
            className="h-4 w-4 mr-2 flex items-center justify-center text-xs"
            data-oid="j-470lh"
          >
            💻
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
