"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="wf9vd95">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="93uue_z">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="qk7yi-k"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="uy58m5v"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="2zc-vmr"
        />
        <span data-oid="1ga1rck">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(() => import("./redesigned-skills"), {
  ssr: false,
  loading: () => <SkillsFallback data-oid="3epw4b1" />,
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
    return <SkillsFallback data-oid="nt2w8t7" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="5.lcty2">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="wnesw2x">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="6mhwphz"
        >
          <p className="text-muted-foreground mb-4" data-oid="i3x2ahr">
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
        <section id="skills" className="py-12" data-oid="yjjkbd-">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="qj9z70c"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="mtq3u8p"
          >
            <p className="text-muted-foreground mb-4" data-oid="2_luxpy">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="v9vdzu9"
    >
      <RedesignedSkills data-oid="4w01awx" />
    </ErrorBoundary>
  );
}
