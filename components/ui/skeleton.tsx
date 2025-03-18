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
            data-oid="cx_hobj"
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
            data-oid="lw0zb:g"
          />
        );

      case "circular":
        return (
          <div
            className={cn("rounded-full bg-muted/60 animate-pulse", className)}
            {...props}
            data-oid="v3pfkdf"
          />
        );

      case "rectangular":
        return (
          <div
            className={cn("rounded-md bg-muted/60 animate-pulse", className)}
            {...props}
            data-oid="trm668f"
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
            data-oid="d99vsrw"
          />
        );
    }
  };

  if (count === 1) {
    return renderSkeleton();
  }

  return (
    <div className={`space-y-${gap}`} data-oid="1cvvsau">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} data-oid="0cpo2li">
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
}
