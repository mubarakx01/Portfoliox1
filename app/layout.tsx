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
  title: "MUBARAK A | AI Engineer & Community Builder",
  description:
    "Portfolio of MUBARAK A, AI Engineer and Community Builder specializing in machine learning, generative AI, and STEM education",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-oid="v1m9ft4">
      <head data-oid="7nkm1v7">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="dreflem"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="ileqc15"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="ihscctc"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid=".lulg2i"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="erhmnc4"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="7vrhuiq"
        />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="8m2msv5"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          data-oid="oq5_mxd"
        >
          <ResponsiveHeader data-oid="vs:y2mu" />
          {children}
          <Toaster data-oid=":u6u_ku" />
          <ClientDiagnosticWrapper data-oid="npsu-zd" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
