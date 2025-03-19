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
    <div className="py-12" data-oid="gb33-.v">
      <div className="container mx-auto px-4" data-oid="hk-0ego">
        <div
          className="flex flex-col items-center justify-center p-8 border border-destructive/20 rounded-lg bg-destructive/10 max-w-2xl mx-auto"
          data-oid="2af3zhf"
        >
          <AlertTriangle
            className="h-12 w-12 text-destructive mb-4"
            data-oid="x0xandf"
          />

          <h3 className="text-xl font-semibold mb-2" data-oid="k5ygruq">
            Failed to load {title} section
          </h3>
          <p
            className="text-muted-foreground mb-6 text-center"
            data-oid="fyl3oyl"
          >
            {error?.message ||
              "An unexpected error occurred while rendering this section."}
          </p>
          {resetErrorBoundary && (
            <Button
              variant="outline"
              onClick={resetErrorBoundary}
              className="gap-2"
              data-oid="lmfb6fc"
            >
              <RefreshCw className="h-4 w-4" data-oid="hda:y_6" />
              Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
