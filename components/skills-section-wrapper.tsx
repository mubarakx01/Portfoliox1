"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="frg-57e">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="otx7q-.">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="hgki:r6"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="seoko1a"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid=":4w:hqw"
        />
        <span data-oid="bw8y7.k">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(
  () =>
    import("@/components/redesigned-skills").catch((err) => {
      console.error("Failed to load RedesignedSkills:", err);
      return () => <SkillsFallback data-oid="vq0g8j0" />;
    }),
  {
    ssr: false,
    loading: () => <SkillsFallback data-oid="pg25-xc" />,
  },
);

export default function SkillsSectionWrapper() {
  const isClient = useIsClient();
  const [hasError, setHasError] = useState(false);

  // Reset error state when client state changes
  useEffect(() => {
    if (isClient) {
      setHasError(false);
    }
  }, [isClient]);

  if (!isClient) {
    return <SkillsFallback data-oid="1ux4qiw" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="uf33hs_">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="o.x50ga">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="58hvx1-"
        >
          <p className="text-muted-foreground mb-4" data-oid="x-cwg_9">
            We encountered an issue loading the skills visualization. Please
            refresh the page to try again.
          </p>
        </div>
      </section>
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <section id="skills" className="py-12" data-oid="4jja.xb">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="a:139.y"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid=".2kwfbd"
          >
            <p className="text-muted-foreground mb-4" data-oid="p:q-:gj">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid=".waxxr3"
    >
      <RedesignedSkills data-oid="1l-.msq" />
    </ErrorBoundary>
  );
}
