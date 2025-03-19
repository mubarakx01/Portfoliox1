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
    <div className="fixed bottom-4 right-4 z-50" data-oid="-n6-qaa">
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
        data-oid="r.55.a7"
      >
        {diagnostics.errors.length > 0 ? (
          <AlertTriangle className="h-4 w-4" data-oid="76qcjxb" />
        ) : diagnostics.warnings && diagnostics.warnings.length > 0 ? (
          <Activity className="h-4 w-4 text-amber-500" data-oid="3ccf8f3" />
        ) : (
          <CheckCircle className="h-4 w-4 text-green-500" data-oid="qgl0_.n" />
        )}
        Diagnostics
        {isOpen ? (
          <ChevronDown className="h-4 w-4" data-oid="lvcnytc" />
        ) : (
          <ChevronUp className="h-4 w-4" data-oid="j1zrh_c" />
        )}
      </Button>

      {isOpen && (
        <Card
          className="absolute bottom-12 right-0 w-80 shadow-xl"
          data-oid="xzgrk1w"
        >
          <CardHeader className="py-3" data-oid="d7r0yz7">
            <div
              className="flex justify-between items-center"
              data-oid="g.49o-i"
            >
              <CardTitle className="text-sm" data-oid="a.s:h8q">
                System Diagnostics
              </CardTitle>
              <div className="flex gap-2" data-oid="0pcs18v">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-6 px-2 text-xs",
                    activeTab === "system" ? "bg-muted" : "",
                  )}
                  onClick={() => setActiveTab("system")}
                  data-oid="sgow:5f"
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
                  data-oid="bftef6h"
                >
                  Performance
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsOpen(false)}
                  data-oid="f6axygk"
                >
                  <X className="h-4 w-4" data-oid="tsj4rqd" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent
            className="text-xs space-y-3 max-h-96 overflow-y-auto"
            data-oid="lels0_q"
          >
            {activeTab === "system" ? (
              <>
                <div data-oid="9n34.m2">
                  <div className="font-medium mb-1" data-oid="2-v.2ts">
                    Browser Info:
                  </div>
                  <div
                    className="text-muted-foreground break-words"
                    data-oid="qnmoh7u"
                  >
                    {diagnostics.browserInfo}
                  </div>
                </div>

                <div className="space-y-1" data-oid="lftmxez">
                  <div className="font-medium" data-oid="_s4.vg:">
                    Environment Checks:
                  </div>
                  <div className="flex items-center gap-2" data-oid="l0basm-">
                    <div
                      className={
                        diagnostics.windowDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="ybnhw-6"
                    >
                      {diagnostics.windowDefined ? "✓" : "✗"} Window
                    </div>
                    <div
                      className={
                        diagnostics.documentDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="a8f9sx8"
                    >
                      {diagnostics.documentDefined ? "✓" : "✗"} Document
                    </div>
                    <div
                      className={
                        diagnostics.localStorageAvailable
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="vyckwkz"
                    >
                      {diagnostics.localStorageAvailable ? "✓" : "✗"}{" "}
                      LocalStorage
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-oid="2ki6my5">
                    <div
                      className={
                        diagnostics.webGLSupported
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="md5o3ku"
                    >
                      {diagnostics.webGLSupported ? "✓" : "✗"} WebGL
                    </div>
                  </div>
                </div>

                {diagnostics.errors && diagnostics.errors.length > 0 && (
                  <div data-oid="l7w:_.0">
                    <div
                      className="font-medium text-destructive mb-1"
                      data-oid="7rl.5t0"
                    >
                      Errors:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="6a7n367">
                      {diagnostics.errors.map((error, i) => (
                        <li
                          key={i}
                          className="text-destructive"
                          data-oid="fl6th58"
                        >
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {diagnostics.warnings && diagnostics.warnings.length > 0 && (
                  <div data-oid="sx40pbd">
                    <div
                      className="font-medium text-amber-500 mb-1"
                      data-oid="i186fk1"
                    >
                      Warnings:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="bbm6xev">
                      {diagnostics.warnings.map((warning, i) => (
                        <li
                          key={i}
                          className="text-amber-500"
                          data-oid="p45ki9e"
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
                  data-oid="iuwb9f2"
                >
                  <div className="flex items-center gap-2" data-oid="94g94.-">
                    <Zap
                      className="h-4 w-4 text-amber-500"
                      data-oid="5naogkn"
                    />

                    <span className="font-medium" data-oid="p6-3r:c">
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
                    data-oid="od_awfl"
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
                  data-oid="m_z3o5i"
                />

                {performanceMetrics.memory && (
                  <>
                    <div
                      className="flex items-center justify-between mt-4"
                      data-oid="ocxnshk"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid=":pri:02"
                      >
                        <Cpu
                          className="h-4 w-4 text-blue-500"
                          data-oid="k7jskss"
                        />

                        <span className="font-medium" data-oid="zkmbilg">
                          Memory Usage:
                        </span>
                      </div>
                      <span data-oid="m7n_5sd">
                        {formatBytes(performanceMetrics.memory.usedJSHeapSize)}{" "}
                        /{" "}
                        {formatBytes(performanceMetrics.memory.jsHeapSizeLimit)}
                      </span>
                    </div>
                    <Progress
                      value={performanceMetrics.memory.usedJSHeapSize}
                      max={performanceMetrics.memory.jsHeapSizeLimit}
                      className="h-1.5"
                      data-oid="cxots6p"
                    />
                  </>
                )}

                <div
                  className="flex items-center justify-between mt-4"
                  data-oid="3-qjylt"
                >
                  <div className="flex items-center gap-2" data-oid="jn08m4e">
                    <Database
                      className="h-4 w-4 text-purple-500"
                      data-oid="pdjsqjv"
                    />

                    <span className="font-medium" data-oid="sxes.-g">
                      DOM Nodes:
                    </span>
                  </div>
                  <span data-oid="rmvxu90">{performanceMetrics.domNodes}</span>
                </div>

                <div className="space-y-1 mt-4" data-oid="lsi9p2g">
                  <div className="font-medium" data-oid="tmel83x">
                    Timing:
                  </div>
                  <div className="flex justify-between" data-oid="ggg1i2g">
                    <span data-oid="xx:24ik">Page Load:</span>
                    <span data-oid="n57p9c4">
                      {(performanceMetrics.loadTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="ijfb9ac">
                    <span data-oid="03d0m7k">Resources:</span>
                    <span data-oid="fs7ic5-">
                      {performanceMetrics.resourceCount}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="m4uj_de">
                    <span data-oid="62u:ay3">Render Time:</span>
                    <span data-oid="_zqp3_z">
                      {(performanceMetrics.renderTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2 border-t flex gap-2" data-oid="11mll4e">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => window.location.reload()}
                data-oid="0_:be7h"
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
                data-oid="bzdux8j"
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
