"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="oj9pcor">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="4kbxy6n">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid=":trqw:k"
      >
        A comprehensive overview of my technical expertise across various
        domains, from web design and machine learning to software development
        and data science, honed through academic projects and internships.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="wql5y_e"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="phfi__b"
        />

        <span data-oid="6437r6b">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(
  () =>
    import("@/components/redesigned-skills").catch((err) => {
      console.error("Failed to load RedesignedSkills:", err);
      return () => <SkillsFallback data-oid="gr6kb21" />;
    }),
  {
    ssr: false,
    loading: () => <SkillsFallback data-oid="24c5c50" />,
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
    return <SkillsFallback data-oid="e3f8s91" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid=".78:4u_">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="ch9zw4x">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid=":diot7_"
        >
          <p className="text-muted-foreground mb-4" data-oid="lqwxslw">
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
        <section id="skills" className="py-12" data-oid="rr_f0r5">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="6uuk:_m"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="8yh22nj"
          >
            <p className="text-muted-foreground mb-4" data-oid="5ecjj2e">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="sf0636i"
    >
      <RedesignedSkills data-oid="am-dl5_" />
    </ErrorBoundary>
  );
}
