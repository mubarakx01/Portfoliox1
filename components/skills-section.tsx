"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="xkqc5o:">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="zkqkfjp">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid=":mv3.lo"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="jieokb8"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="tcfbarq"
        />

        <span data-oid="3nab3-_">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(() => import("./redesigned-skills"), {
  ssr: false,
  loading: () => <SkillsFallback data-oid="z028c4w" />,
});

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
    return <SkillsFallback data-oid="u5g9e7s" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="rftxbv4">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="kk5bj.t">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="7e926cw"
        >
          <p className="text-muted-foreground mb-4" data-oid="q82ecxc">
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
        <section id="skills" className="py-12" data-oid="2ug8wb7">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="utoifop"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="2lqa0c7"
          >
            <p className="text-muted-foreground mb-4" data-oid=":gqyekn">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="skdi_0r"
    >
      <RedesignedSkills data-oid="xd9xyrq" />
    </ErrorBoundary>
  );
}
