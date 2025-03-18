"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="44sshed">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="03bd8jr">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="rn39de1"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="fwbaws3"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="77pa8bv"
        />

        <span data-oid="n1io4oc">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(
  () =>
    import("@/components/redesigned-skills").catch((err) => {
      console.error("Failed to load RedesignedSkills:", err);
      return () => <SkillsFallback data-oid="s250iy:" />;
    }),
  {
    ssr: false,
    loading: () => <SkillsFallback data-oid="4:5q07." />,
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
    return <SkillsFallback data-oid="mxr:av:" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid=":du3mt.">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="suiy.kq">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="pf8dnr."
        >
          <p className="text-muted-foreground mb-4" data-oid="pt-j.r6">
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
        <section id="skills" className="py-12" data-oid="njac:42">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="q2ejem2"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="jg_kmuc"
          >
            <p className="text-muted-foreground mb-4" data-oid="lh.61ca">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="28sr:xp"
    >
      <RedesignedSkills data-oid="e_9r4.6" />
    </ErrorBoundary>
  );
}
