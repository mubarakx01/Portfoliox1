"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="qsqk.66">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="r7dhz_-">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="nvwzl5p"
      >
        A comprehensive overview of my technical expertise across various
        domains, from web design and machine learning to software development
        and data science, honed through academic projects and internships.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="l9prk72"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="5u2:a9w"
        />

        <span data-oid="b:q8p4s">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(
  () =>
    import("@/components/redesigned-skills").catch((err) => {
      console.error("Failed to load RedesignedSkills:", err);
      return () => <SkillsFallback data-oid="yhuvwat" />;
    }),
  {
    ssr: false,
    loading: () => <SkillsFallback data-oid="sm9:qir" />,
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
    return <SkillsFallback data-oid="zire5ey" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="qt78f2z">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="b10_:x3">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="whrf8uk"
        >
          <p className="text-muted-foreground mb-4" data-oid="jc591sh">
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
        <section id="skills" className="py-12" data-oid="_.ngpv7">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="xt6_p3:"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="loxqkp."
          >
            <p className="text-muted-foreground mb-4" data-oid="pa22c76">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="9dmbv86"
    >
      <RedesignedSkills data-oid="zhfffu7" />
    </ErrorBoundary>
  );
}
