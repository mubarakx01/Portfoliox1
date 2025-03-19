"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4"
            data-oid="ueh5fys"
          >
            <AlertTriangle
              className="h-10 w-10 text-destructive mb-4"
              data-oid=".n_oosa"
            />

            <h3 className="text-lg font-semibold mb-2" data-oid="k50lmxk">
              Something went wrong
            </h3>
            <p
              className="text-muted-foreground mb-4 text-center max-w-md"
              data-oid=".jjsfc."
            >
              {this.state.error?.message ||
                "An unexpected error occurred while rendering this section"}
            </p>
            <Button
              variant="outline"
              onClick={() => this.setState({ hasError: false, error: null })}
              data-oid="857w_5o"
            >
              Try again
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode,
): React.FC<P> {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback} data-oid="x1za9h1">
        <Component {...props} data-oid="k-ohgsq" />
      </ErrorBoundary>
    );
  };
}
