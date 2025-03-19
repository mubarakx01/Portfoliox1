import type React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "card" | "text" | "circular" | "rectangular";
  count?: number;
  gap?: number;
}

export function Skeleton({
  className,
  variant = "default",
  count = 1,
  gap = 4,
  ...props
}: SkeletonProps & React.HTMLAttributes<HTMLDivElement>) {
  const renderSkeleton = () => {
    switch (variant) {
      case "card":
        return (
          <div
            className={cn("rounded-lg bg-muted/60 animate-pulse", className)}
            {...props}
            data-oid="h9p.zwo"
          />
        );

      case "text":
        return (
          <div
            className={cn(
              "h-4 w-full rounded-md bg-muted/60 animate-pulse",
              className,
            )}
            {...props}
            data-oid="phntemn"
          />
        );

      case "circular":
        return (
          <div
            className={cn("rounded-full bg-muted/60 animate-pulse", className)}
            {...props}
            data-oid="1qz-.5l"
          />
        );

      case "rectangular":
        return (
          <div
            className={cn("rounded-md bg-muted/60 animate-pulse", className)}
            {...props}
            data-oid="aiwvn7g"
          />
        );

      default:
        return (
          <div
            className={cn(
              "h-5 w-full rounded-md bg-muted/60 animate-pulse",
              className,
            )}
            {...props}
            data-oid="9ghtiz_"
          />
        );
    }
  };

  if (count === 1) {
    return renderSkeleton();
  }

  return (
    <div className={`space-y-${gap}`} data-oid=":x9lppk">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} data-oid="k6t-m1m">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
}
