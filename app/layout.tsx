import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ResponsiveHeader from "@/components/responsive-header";
import ClientDiagnosticWrapper from "@/components/client-diagnostic-wrapper";
import EnhancedFooter from "@/components/enhanced-footer";
import { ProgressiveLoadingProvider } from "@/components/progressive-loading-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
});

export const metadata: Metadata = {
  title: "Mubarak A - Software Engineer",
  description: "Software Engineer specializing in AI and machine learning",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="soys7f.">
      <head data-oid="08bxo38">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="-:er9.t"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="zqpwrt2"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="6bd-q8r"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid="9j55u9_"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="c1e0-zj"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="k7wf_:0"
        />

        <meta name="darkreader" content="disable" data-oid="2bbp-da" />
        <meta name="darkreader-lock" content="true" data-oid="nk7s3zy" />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="ag-axkh"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={true}
          data-oid="10jje9y"
        >
          <ProgressiveLoadingProvider data-oid="z-b781w">
            <ResponsiveHeader data-oid="kb5m-2a" />
            {children}
            <EnhancedFooter data-oid="1roear_" />
            <Toaster data-oid="63eq.sb" />
            <ClientDiagnosticWrapper data-oid="v7spysf" />
          </ProgressiveLoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
