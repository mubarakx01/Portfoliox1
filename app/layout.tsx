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
    <html lang="en" suppressHydrationWarning data-oid=":5al:qm">
      <head data-oid="pf65auu">
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/placeholder.svg?height=400&width=400"
          as="image"
          data-oid="txti-k7"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          data-oid="2-l:cmn"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
          data-oid="cfyt5.p"
        />

        {/* Add preload hints for critical JavaScript */}
        <link
          rel="preload"
          href="/_next/static/chunks/framework.js"
          as="script"
          data-oid="id60mp."
        />

        {/* Add meta tags for better performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          data-oid="xc7v669"
        />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
          data-oid="tnwb7p0"
        />
      </head>
      <body
        className={`${inter.className} theme-transition`}
        data-oid="odnje1c"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          data-oid="1k7t1j7"
        >
          <ResponsiveHeader data-oid="u06hhts" />
          {children}
          <Toaster data-oid="tw4a.0b" />
          <ClientDiagnosticWrapper data-oid="zxilt67" />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
