import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import ResponsiveHeader from "@/components/responsive-header";
import ClientDiagnosticWrapper from "@/components/client-diagnostic-wrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
});

export const metadata: Metadata = {
  title: "Shaquille Williams | AI Engineer & Community Builder",
  description:
    "Portfolio of Shaquille Williams, AI Engineer and Community Builder specializing in machine learning, generative AI, and STEM education",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="2ghczl4">
      <head data-oid="ctb78_w">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="pfvpp0b"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="onyhci3"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="..w999b"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid="s67_ts1"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="g6:-h7e"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="_:hpkzv"
        />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="y64cm_k"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          data-oid="_-hpn5o"
        >
          <ResponsiveHeader data-oid="irag:xb" />
          {children}
          <Toaster data-oid="wqfox1z" />
          <ClientDiagnosticWrapper data-oid="gp2jgwl" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
