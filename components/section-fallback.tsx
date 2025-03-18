"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionFallbackProps {
  title: string;
  error?: Error | null;
  resetErrorBoundary?: () => void;
}

export function SectionFallback({
  title,
  error,
  resetErrorBoundary,
}: SectionFallbackProps) {
  return (
    <div className="py-12" data-oid="zo3t56q">
      <div className="container mx-auto px-4" data-oid="i7umjwi">
        <div
          className="flex flex-col items-center justify-center p-8 border border-destructive/20 rounded-lg bg-destructive/10 max-w-2xl mx-auto"
          data-oid="-_qvo-:"
        >
          <AlertTriangle
            className="h-12 w-12 text-destructive mb-4"
            data-oid="qxssrvm"
          />

          <h3 className="text-xl font-semibold mb-2" data-oid="iwgp15d">
            Failed to load {title} section
          </h3>
          <p
            className="text-muted-foreground mb-6 text-center"
            data-oid="96y.x2v"
          >
            {error?.message ||
              "An unexpected error occurred while rendering this section."}
          </p>
          {resetErrorBoundary && (
            <Button
              variant="outline"
              onClick={resetErrorBoundary}
              className="gap-2"
              data-oid="8v0n5eg"
            >
              <RefreshCw className="h-4 w-4" data-oid="byq_1r8" />
              Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
