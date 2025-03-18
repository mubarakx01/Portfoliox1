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
    <html lang="en" suppressHydrationWarning data-oid="64.jg_f">
      <head data-oid="ytysm:5">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="xf84vy2"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="diqmsr3"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="5:in4sn"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid="fji4wtl"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="gpc4zp5"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="2e24lyj"
        />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="kp00vex"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          data-oid=":6u3nj4"
        >
          <ResponsiveHeader data-oid="m93ilml" />
          {children}
          <Toaster data-oid="-gv:v_5" />
          <ClientDiagnosticWrapper data-oid="od9ckb:" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
