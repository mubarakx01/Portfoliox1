"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp,
  Activity,
  Cpu,
  Database,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePerformanceMonitor } from "@/hooks/use-performance-monitor";
import { Progress } from "@/components/ui/progress";

export function DiagnosticTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"system" | "performance">(
    "system",
  );
  const [diagnostics, setDiagnostics] = useState<{
    browserInfo: string;
    windowDefined: boolean;
    documentDefined: boolean;
    localStorageAvailable: boolean;
    webGLSupported: boolean;
    errors: string[];
    warnings: string[];
  }>({
    browserInfo: "",
    windowDefined: false,
    documentDefined: false,
    localStorageAvailable: false,
    webGLSupported: false,
    errors: [],
    warnings: [],
  });

  // Get performance metrics
  const performanceMetrics = usePerformanceMonitor(isOpen);

  useEffect(() => {
    try {
      // Collect diagnostic information
      const errors: string[] = [];
      const warnings: string[] = [];

      // Check if window is defined
      const windowDefined = typeof window !== "undefined";
      if (!windowDefined) {
        errors.push("Window object is not defined");
      }

      // Check if document is defined
      const documentDefined = typeof document !== "undefined";
      if (!documentDefined) {
        errors.push("Document object is not defined");
      }

      // Check localStorage availability
      let localStorageAvailable = false;
      try {
        localStorageAvailable = !!window.localStorage;
        window.localStorage.setItem("test", "test");
        window.localStorage.removeItem("test");
      } catch (e) {
        warnings.push("LocalStorage is not available: " + (e as Error).message);
      }

      // Get browser info
      const browserInfo = windowDefined
        ? `${navigator.userAgent} | ${window.innerWidth}x${window.innerHeight}`
        : "Unknown browser";

      // Check for WebGL support (needed for 3D)
      let webGLSupported = false;
      if (windowDefined && documentDefined) {
        try {
          const canvas = document.createElement("canvas");
          const gl =
            canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl");
          webGLSupported = !!gl;
          if (!gl) {
            warnings.push(
              "WebGL is not supported - 3D visualizations may not work",
            );
          }
        } catch (e) {
          warnings.push(
            "Error checking WebGL support: " + (e as Error).message,
          );
        }
      }

      // Check for animation performance issues
      if (performanceMetrics.fps < 30 && performanceMetrics.fps > 0) {
        warnings.push(
          `Low FPS detected (${performanceMetrics.fps}). Animations may not be smooth.`,
        );
      }

      // Check for memory issues
      if (
        performanceMetrics.memory &&
        performanceMetrics.memory.usedJSHeapSize >
          0.8 * performanceMetrics.memory.jsHeapSizeLimit
      ) {
        warnings.push(
          "High memory usage detected. This may cause performance issues.",
        );
      }

      // Update state with diagnostic info
      setDiagnostics({
        browserInfo,
        windowDefined,
        documentDefined,
        localStorageAvailable,
        webGLSupported,
        errors,
        warnings,
      });
    } catch (error) {
      console.error("Error running diagnostics:", error);
    }
  }, [performanceMetrics.fps, performanceMetrics.memory]);

  if (!diagnostics.windowDefined) {
    return null; // Don't render anything server-side
  }

  // Format bytes to human-readable format
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" data-oid="8v0pbyt">
      <Button
        variant="outline"
        size="sm"
        className={cn(
          "gap-2 shadow-lg",
          diagnostics.errors.length > 0
            ? "bg-destructive text-destructive-foreground"
            : "bg-background",
        )}
        onClick={() => setIsOpen(!isOpen)}
        data-oid=".h2i.ca"
      >
        {diagnostics.errors.length > 0 ? (
          <AlertTriangle className="h-4 w-4" data-oid="t0:yoql" />
        ) : diagnostics.warnings.length > 0 ? (
          <Activity className="h-4 w-4 text-amber-500" data-oid="x5pzgki" />
        ) : (
          <CheckCircle className="h-4 w-4 text-green-500" data-oid="dnmqt.t" />
        )}
        Diagnostics
        {isOpen ? (
          <ChevronDown className="h-4 w-4" data-oid="ju74f7v" />
        ) : (
          <ChevronUp className="h-4 w-4" data-oid="cuy:dar" />
        )}
      </Button>

      {isOpen && (
        <Card
          className="absolute bottom-12 right-0 w-80 shadow-xl"
          data-oid="24meb.9"
        >
          <CardHeader className="py-3" data-oid="v8ox6iw">
            <div
              className="flex justify-between items-center"
              data-oid="mydmiay"
            >
              <CardTitle className="text-sm" data-oid="6kxqzsv">
                System Diagnostics
              </CardTitle>
              <div className="flex gap-2" data-oid="7nih7l9">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-6 px-2 text-xs",
                    activeTab === "system" ? "bg-muted" : "",
                  )}
                  onClick={() => setActiveTab("system")}
                  data-oid="iozvb_6"
                >
                  System
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-6 px-2 text-xs",
                    activeTab === "performance" ? "bg-muted" : "",
                  )}
                  onClick={() => setActiveTab("performance")}
                  data-oid="hro0zzy"
                >
                  Performance
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsOpen(false)}
                  data-oid="xdq._xq"
                >
                  <X className="h-4 w-4" data-oid="mvg6:.r" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent
            className="text-xs space-y-3 max-h-96 overflow-y-auto"
            data-oid="05esk4c"
          >
            {activeTab === "system" ? (
              <>
                <div data-oid=".3sm5r7">
                  <div className="font-medium mb-1" data-oid="inqm0u0">
                    Browser Info:
                  </div>
                  <div
                    className="text-muted-foreground break-words"
                    data-oid="co.:e-5"
                  >
                    {diagnostics.browserInfo}
                  </div>
                </div>

                <div className="space-y-1" data-oid="pfgztgc">
                  <div className="font-medium" data-oid="4r51utz">
                    Environment Checks:
                  </div>
                  <div className="flex items-center gap-2" data-oid="tj.:hc0">
                    <div
                      className={
                        diagnostics.windowDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="7beu_5."
                    >
                      {diagnostics.windowDefined ? "✓" : "✗"} Window
                    </div>
                    <div
                      className={
                        diagnostics.documentDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="hj3amp:"
                    >
                      {diagnostics.documentDefined ? "✓" : "✗"} Document
                    </div>
                    <div
                      className={
                        diagnostics.localStorageAvailable
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid=":66t8j2"
                    >
                      {diagnostics.localStorageAvailable ? "✓" : "✗"}{" "}
                      LocalStorage
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-oid="6m1_ao1">
                    <div
                      className={
                        diagnostics.webGLSupported
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="tghw9yg"
                    >
                      {diagnostics.webGLSupported ? "✓" : "✗"} WebGL
                    </div>
                  </div>
                </div>

                {diagnostics.errors.length > 0 && (
                  <div data-oid="b75azkj">
                    <div
                      className="font-medium text-destructive mb-1"
                      data-oid="58h2g_-"
                    >
                      Errors:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="y0u5iti">
                      {diagnostics.errors.map((error, i) => (
                        <li
                          key={i}
                          className="text-destructive"
                          data-oid="m8c43aw"
                        >
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {diagnostics.warnings.length > 0 && (
                  <div data-oid="jdd169r">
                    <div
                      className="font-medium text-amber-500 mb-1"
                      data-oid="-lqv4t2"
                    >
                      Warnings:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="kaon652">
                      {diagnostics.warnings.map((warning, i) => (
                        <li
                          key={i}
                          className="text-amber-500"
                          data-oid="vojbzz:"
                        >
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="flex items-center justify-between"
                  data-oid="xoh65ht"
                >
                  <div className="flex items-center gap-2" data-oid="w2d0a:9">
                    <Zap
                      className="h-4 w-4 text-amber-500"
                      data-oid="fqp9xtp"
                    />
                    <span className="font-medium" data-oid="bhze.:q">
                      FPS:
                    </span>
                  </div>
                  <span
                    className={cn(
                      performanceMetrics.fps < 30
                        ? "text-red-500"
                        : performanceMetrics.fps < 50
                          ? "text-amber-500"
                          : "text-green-500",
                    )}
                    data-oid="qyh_eqi"
                  >
                    {performanceMetrics.fps.toFixed(0)}
                  </span>
                </div>
                <Progress
                  value={performanceMetrics.fps}
                  max={60}
                  className="h-1.5"
                  indicatorClassName={cn(
                    performanceMetrics.fps < 30
                      ? "bg-red-500"
                      : performanceMetrics.fps < 50
                        ? "bg-amber-500"
                        : "bg-green-500",
                  )}
                  data-oid="ok.6pp-"
                />

                {performanceMetrics.memory && (
                  <>
                    <div
                      className="flex items-center justify-between mt-4"
                      data-oid="8dp0nlx"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid="4_qd-a7"
                      >
                        <Cpu
                          className="h-4 w-4 text-blue-500"
                          data-oid="fj:es4e"
                        />
                        <span className="font-medium" data-oid="ldr-sg1">
                          Memory Usage:
                        </span>
                      </div>
                      <span data-oid="fd-:r43">
                        {formatBytes(performanceMetrics.memory.usedJSHeapSize)}{" "}
                        /{" "}
                        {formatBytes(performanceMetrics.memory.jsHeapSizeLimit)}
                      </span>
                    </div>
                    <Progress
                      value={performanceMetrics.memory.usedJSHeapSize}
                      max={performanceMetrics.memory.jsHeapSizeLimit}
                      className="h-1.5"
                      data-oid="3g5l0nq"
                    />
                  </>
                )}

                <div
                  className="flex items-center justify-between mt-4"
                  data-oid="uisbkhk"
                >
                  <div className="flex items-center gap-2" data-oid="4i:v2_e">
                    <Database
                      className="h-4 w-4 text-purple-500"
                      data-oid="v6b_lsu"
                    />
                    <span className="font-medium" data-oid="876ekq1">
                      DOM Nodes:
                    </span>
                  </div>
                  <span data-oid="zmkz7y-">{performanceMetrics.domNodes}</span>
                </div>

                <div className="space-y-1 mt-4" data-oid="9gp.ay5">
                  <div className="font-medium" data-oid="ac1zb_f">
                    Timing:
                  </div>
                  <div className="flex justify-between" data-oid="8xbl36r">
                    <span data-oid="m-i_n1v">Page Load:</span>
                    <span data-oid="f_9y-uc">
                      {(performanceMetrics.loadTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="1d0t:e1">
                    <span data-oid="_yct9xr">Resources:</span>
                    <span data-oid="eimxt_d">
                      {performanceMetrics.resourceCount}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="feb8n:q">
                    <span data-oid="y4swuje">Render Time:</span>
                    <span data-oid="b876ocv">
                      {(performanceMetrics.renderTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2 border-t flex gap-2" data-oid=":bef4sm">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => window.location.reload()}
                data-oid="miu:i9q"
              >
                Refresh Page
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => {
                  // Clear localStorage
                  try {
                    localStorage.clear();
                    sessionStorage.clear();
                    window.location.reload();
                  } catch (e) {
                    console.error("Failed to clear storage:", e);
                  }
                }}
                data-oid="2ey.rgw"
              >
                Clear Cache
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
