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
    <div className="fixed bottom-4 right-4 z-50" data-oid="4o-kurp">
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
        data-oid=".e_r1a:"
      >
        {diagnostics.errors.length > 0 ? (
          <AlertTriangle className="h-4 w-4" data-oid="fs7q7u4" />
        ) : diagnostics.warnings && diagnostics.warnings.length > 0 ? (
          <Activity className="h-4 w-4 text-amber-500" data-oid="-t_0fz1" />
        ) : (
          <CheckCircle className="h-4 w-4 text-green-500" data-oid="pe6ttah" />
        )}
        Diagnostics
        {isOpen ? (
          <ChevronDown className="h-4 w-4" data-oid="ru165sv" />
        ) : (
          <ChevronUp className="h-4 w-4" data-oid="jf2.dpx" />
        )}
      </Button>

      {isOpen && (
        <Card
          className="absolute bottom-12 right-0 w-80 shadow-xl"
          data-oid="2.z-a.b"
        >
          <CardHeader className="py-3" data-oid="e8dexdx">
            <div
              className="flex justify-between items-center"
              data-oid="7c9wcrg"
            >
              <CardTitle className="text-sm" data-oid="j3dczlp">
                System Diagnostics
              </CardTitle>
              <div className="flex gap-2" data-oid="7.8e5ez">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-6 px-2 text-xs",
                    activeTab === "system" ? "bg-muted" : "",
                  )}
                  onClick={() => setActiveTab("system")}
                  data-oid="eyj8cu4"
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
                  data-oid="9:ous6z"
                >
                  Performance
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsOpen(false)}
                  data-oid="04btgz."
                >
                  <X className="h-4 w-4" data-oid="vf2x8.5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent
            className="text-xs space-y-3 max-h-96 overflow-y-auto"
            data-oid="sx20_:m"
          >
            {activeTab === "system" ? (
              <>
                <div data-oid="w2j3xp6">
                  <div className="font-medium mb-1" data-oid="dvtq8-6">
                    Browser Info:
                  </div>
                  <div
                    className="text-muted-foreground break-words"
                    data-oid=":knkv7_"
                  >
                    {diagnostics.browserInfo}
                  </div>
                </div>

                <div className="space-y-1" data-oid="40kkl.g">
                  <div className="font-medium" data-oid="0_jm2_:">
                    Environment Checks:
                  </div>
                  <div className="flex items-center gap-2" data-oid=".s.7z8m">
                    <div
                      className={
                        diagnostics.windowDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="cm.bo7d"
                    >
                      {diagnostics.windowDefined ? "✓" : "✗"} Window
                    </div>
                    <div
                      className={
                        diagnostics.documentDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="rajb1xo"
                    >
                      {diagnostics.documentDefined ? "✓" : "✗"} Document
                    </div>
                    <div
                      className={
                        diagnostics.localStorageAvailable
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="mpt_bbv"
                    >
                      {diagnostics.localStorageAvailable ? "✓" : "✗"}{" "}
                      LocalStorage
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-oid="in_z4is">
                    <div
                      className={
                        diagnostics.webGLSupported
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="eecm1_8"
                    >
                      {diagnostics.webGLSupported ? "✓" : "✗"} WebGL
                    </div>
                  </div>
                </div>

                {diagnostics.errors && diagnostics.errors.length > 0 && (
                  <div data-oid="h0conic">
                    <div
                      className="font-medium text-destructive mb-1"
                      data-oid="zmb8t9m"
                    >
                      Errors:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="005gr_b">
                      {diagnostics.errors.map((error, i) => (
                        <li
                          key={i}
                          className="text-destructive"
                          data-oid="viuq.ni"
                        >
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {diagnostics.warnings && diagnostics.warnings.length > 0 && (
                  <div data-oid="eiui3v8">
                    <div
                      className="font-medium text-amber-500 mb-1"
                      data-oid="legb54i"
                    >
                      Warnings:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="mrp7zrh">
                      {diagnostics.warnings.map((warning, i) => (
                        <li
                          key={i}
                          className="text-amber-500"
                          data-oid="b:p06-r"
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
                  data-oid="kll-hxz"
                >
                  <div className="flex items-center gap-2" data-oid="6:w:obg">
                    <Zap
                      className="h-4 w-4 text-amber-500"
                      data-oid="xr0ca0b"
                    />

                    <span className="font-medium" data-oid="3g2emd7">
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
                    data-oid="-fabsr6"
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
                  data-oid="mjwo:6p"
                />

                {performanceMetrics.memory && (
                  <>
                    <div
                      className="flex items-center justify-between mt-4"
                      data-oid=":a6c:z5"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid="dailou2"
                      >
                        <Cpu
                          className="h-4 w-4 text-blue-500"
                          data-oid="7ad6cp7"
                        />

                        <span className="font-medium" data-oid="9-p-_9g">
                          Memory Usage:
                        </span>
                      </div>
                      <span data-oid="vv:lbtf">
                        {formatBytes(performanceMetrics.memory.usedJSHeapSize)}{" "}
                        /{" "}
                        {formatBytes(performanceMetrics.memory.jsHeapSizeLimit)}
                      </span>
                    </div>
                    <Progress
                      value={performanceMetrics.memory.usedJSHeapSize}
                      max={performanceMetrics.memory.jsHeapSizeLimit}
                      className="h-1.5"
                      data-oid="gkyp0ik"
                    />
                  </>
                )}

                <div
                  className="flex items-center justify-between mt-4"
                  data-oid="0:894js"
                >
                  <div className="flex items-center gap-2" data-oid="awbmlsv">
                    <Database
                      className="h-4 w-4 text-purple-500"
                      data-oid="gs:zu21"
                    />

                    <span className="font-medium" data-oid="ypf5dlz">
                      DOM Nodes:
                    </span>
                  </div>
                  <span data-oid="6_ku9ko">{performanceMetrics.domNodes}</span>
                </div>

                <div className="space-y-1 mt-4" data-oid="vt2wvn1">
                  <div className="font-medium" data-oid="eope-1t">
                    Timing:
                  </div>
                  <div className="flex justify-between" data-oid="xv-m97j">
                    <span data-oid="uekat7o">Page Load:</span>
                    <span data-oid="lvxivgn">
                      {(performanceMetrics.loadTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="kod72my">
                    <span data-oid="jsozoi3">Resources:</span>
                    <span data-oid="hxmo1lf">
                      {performanceMetrics.resourceCount}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="voeh8lz">
                    <span data-oid="ok8858s">Render Time:</span>
                    <span data-oid="mm0fe-1">
                      {(performanceMetrics.renderTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2 border-t flex gap-2" data-oid="78y.xc0">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => window.location.reload()}
                data-oid="teboruq"
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
                data-oid="kyrodkv"
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
