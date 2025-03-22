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
    <div className="py-12" data-oid="k12m5d_">
      <div className="container mx-auto px-4" data-oid="7e_pmvq">
        <div
          className="flex flex-col items-center justify-center p-8 border border-destructive/20 rounded-lg bg-destructive/10 max-w-2xl mx-auto"
          data-oid="b7b17lt"
        >
          <AlertTriangle
            className="h-12 w-12 text-destructive mb-4"
            data-oid="l5dz3.a"
          />

          <h3 className="text-xl font-semibold mb-2" data-oid="1415-08">
            Failed to load {title} section
          </h3>
          <p
            className="text-muted-foreground mb-6 text-center"
            data-oid="m0a3bj1"
          >
            {error?.message ||
              "An unexpected error occurred while rendering this section."}
          </p>
          {resetErrorBoundary && (
            <Button
              variant="outline"
              onClick={resetErrorBoundary}
              className="gap-2"
              data-oid="j2hwn32"
            >
              <RefreshCw className="h-4 w-4" data-oid="82ko:ok" />
              Try again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
