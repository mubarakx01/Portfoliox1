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
    <html lang="en" suppressHydrationWarning data-oid="rk7ysyk">
      <head data-oid="hdv3sj5">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="9l.4jh-"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="ccmht3:"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="m6bnm67"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid="h_amcqs"
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="ab307ql"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="lcf2c:c"
        />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="oo32vc2"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          data-oid="2cb-ryd"
        >
          <ResponsiveHeader data-oid=":13yk4b" />
          {children}
          <Toaster data-oid="y299rc1" />
          <ClientDiagnosticWrapper data-oid="bbmqa.r" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
