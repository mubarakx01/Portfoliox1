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
    <div className="fixed bottom-4 right-4 z-50" data-oid="mt9_f11">
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
        data-oid="v50gjpl"
      >
        {diagnostics.errors.length > 0 ? (
          <AlertTriangle className="h-4 w-4" data-oid="-xlzcff" />
        ) : diagnostics.warnings && diagnostics.warnings.length > 0 ? (
          <Activity className="h-4 w-4 text-amber-500" data-oid="bfr9-rm" />
        ) : (
          <CheckCircle className="h-4 w-4 text-green-500" data-oid="2w167e3" />
        )}
        Diagnostics
        {isOpen ? (
          <ChevronDown className="h-4 w-4" data-oid="rx0-n-x" />
        ) : (
          <ChevronUp className="h-4 w-4" data-oid="qde06-t" />
        )}
      </Button>

      {isOpen && (
        <Card
          className="absolute bottom-12 right-0 w-80 shadow-xl"
          data-oid="r6e9lu-"
        >
          <CardHeader className="py-3" data-oid="6hdyyf3">
            <div
              className="flex justify-between items-center"
              data-oid="uwz-.j6"
            >
              <CardTitle className="text-sm" data-oid="zhrc7h0">
                System Diagnostics
              </CardTitle>
              <div className="flex gap-2" data-oid="amff8y2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "h-6 px-2 text-xs",
                    activeTab === "system" ? "bg-muted" : "",
                  )}
                  onClick={() => setActiveTab("system")}
                  data-oid="_7px15v"
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
                  data-oid="80dgqzo"
                >
                  Performance
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => setIsOpen(false)}
                  data-oid="8le_qhw"
                >
                  <X className="h-4 w-4" data-oid="bwp61zk" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent
            className="text-xs space-y-3 max-h-96 overflow-y-auto"
            data-oid="syhq53e"
          >
            {activeTab === "system" ? (
              <>
                <div data-oid="u7k.0jq">
                  <div className="font-medium mb-1" data-oid="ojrbre2">
                    Browser Info:
                  </div>
                  <div
                    className="text-muted-foreground break-words"
                    data-oid="wd3ujk3"
                  >
                    {diagnostics.browserInfo}
                  </div>
                </div>

                <div className="space-y-1" data-oid="boj7rrc">
                  <div className="font-medium" data-oid="it5dprv">
                    Environment Checks:
                  </div>
                  <div className="flex items-center gap-2" data-oid="l_4ivpd">
                    <div
                      className={
                        diagnostics.windowDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid=":fvk2nd"
                    >
                      {diagnostics.windowDefined ? "✓" : "✗"} Window
                    </div>
                    <div
                      className={
                        diagnostics.documentDefined
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="55rfk:b"
                    >
                      {diagnostics.documentDefined ? "✓" : "✗"} Document
                    </div>
                    <div
                      className={
                        diagnostics.localStorageAvailable
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="if6z5_y"
                    >
                      {diagnostics.localStorageAvailable ? "✓" : "✗"}{" "}
                      LocalStorage
                    </div>
                  </div>
                  <div className="flex items-center gap-2" data-oid="-un54vi">
                    <div
                      className={
                        diagnostics.webGLSupported
                          ? "text-green-500"
                          : "text-red-500"
                      }
                      data-oid="_39kx:e"
                    >
                      {diagnostics.webGLSupported ? "✓" : "✗"} WebGL
                    </div>
                  </div>
                </div>

                {diagnostics.errors && diagnostics.errors.length > 0 && (
                  <div data-oid="8fz0.zr">
                    <div
                      className="font-medium text-destructive mb-1"
                      data-oid="h6m8wv7"
                    >
                      Errors:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="g63k26e">
                      {diagnostics.errors.map((error, i) => (
                        <li
                          key={i}
                          className="text-destructive"
                          data-oid="pp2q5xg"
                        >
                          {error}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {diagnostics.warnings && diagnostics.warnings.length > 0 && (
                  <div data-oid="t361251">
                    <div
                      className="font-medium text-amber-500 mb-1"
                      data-oid="sezss1v"
                    >
                      Warnings:
                    </div>
                    <ul className="list-disc pl-4 space-y-1" data-oid="_keizsl">
                      {diagnostics.warnings.map((warning, i) => (
                        <li
                          key={i}
                          className="text-amber-500"
                          data-oid="sf4bkwm"
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
                  data-oid="locw:lj"
                >
                  <div className="flex items-center gap-2" data-oid="ha.0t:7">
                    <Zap
                      className="h-4 w-4 text-amber-500"
                      data-oid="u45qhb0"
                    />

                    <span className="font-medium" data-oid="vnpty48">
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
                    data-oid="ckd.0pz"
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
                  data-oid="0.:qq:q"
                />

                {performanceMetrics.memory && (
                  <>
                    <div
                      className="flex items-center justify-between mt-4"
                      data-oid="rizegmd"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid="j_:em5g"
                      >
                        <Cpu
                          className="h-4 w-4 text-blue-500"
                          data-oid="_7-xb2z"
                        />

                        <span className="font-medium" data-oid="tnf:-v9">
                          Memory Usage:
                        </span>
                      </div>
                      <span data-oid="fe6hy01">
                        {formatBytes(performanceMetrics.memory.usedJSHeapSize)}{" "}
                        /{" "}
                        {formatBytes(performanceMetrics.memory.jsHeapSizeLimit)}
                      </span>
                    </div>
                    <Progress
                      value={performanceMetrics.memory.usedJSHeapSize}
                      max={performanceMetrics.memory.jsHeapSizeLimit}
                      className="h-1.5"
                      data-oid="to.d_hr"
                    />
                  </>
                )}

                <div
                  className="flex items-center justify-between mt-4"
                  data-oid="gcjj4wi"
                >
                  <div className="flex items-center gap-2" data-oid="u5e0rn0">
                    <Database
                      className="h-4 w-4 text-purple-500"
                      data-oid="n.3pw0_"
                    />

                    <span className="font-medium" data-oid="0aroi.-">
                      DOM Nodes:
                    </span>
                  </div>
                  <span data-oid="q24u4x.">{performanceMetrics.domNodes}</span>
                </div>

                <div className="space-y-1 mt-4" data-oid="o553-.i">
                  <div className="font-medium" data-oid="xlrfhn_">
                    Timing:
                  </div>
                  <div className="flex justify-between" data-oid="x.lqi_6">
                    <span data-oid="aezleag">Page Load:</span>
                    <span data-oid="wq544-1">
                      {(performanceMetrics.loadTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="8hfi5tb">
                    <span data-oid="6hmipch">Resources:</span>
                    <span data-oid="lee5388">
                      {performanceMetrics.resourceCount}
                    </span>
                  </div>
                  <div className="flex justify-between" data-oid="zrv4ris">
                    <span data-oid="o-vft28">Render Time:</span>
                    <span data-oid="f7.p-9f">
                      {(performanceMetrics.renderTime / 1000).toFixed(2)}s
                    </span>
                  </div>
                </div>
              </>
            )}

            <div className="pt-2 border-t flex gap-2" data-oid="q53p_:k">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => window.location.reload()}
                data-oid=":27uhox"
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
                data-oid="tft_72c"
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
