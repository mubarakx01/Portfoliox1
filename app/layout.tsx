import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ResponsiveHeader from "@/components/responsive-header";
import ClientDiagnosticWrapper from "@/components/client-diagnostic-wrapper";
import EnhancedFooter from "@/components/enhanced-footer";
import { ProgressiveLoadingProvider } from "@/components/progressive-loading-provider";
export const metadata: Metadata = {
  title: "Mubarak A - Software Engineer",
  description: "Software Engineer specializing in AI and machine learning",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="darkreader" content="disable" />
        <meta name="darkreader-lock" content="true" />
      </head>
      <body className="theme-transition">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <ProgressiveLoadingProvider>
            <ResponsiveHeader />
            {children}
            <EnhancedFooter />
            <Toaster />
            <ClientDiagnosticWrapper />
          </ProgressiveLoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
import "./globals.css";
