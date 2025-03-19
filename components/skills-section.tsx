"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="_433j21">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="y38xze2">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="wevy38y"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="_:bkdv3"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="uo3cebm"
        />

        <span data-oid="c8xdm9v">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(() => import("./redesigned-skills"), {
  ssr: false,
  loading: () => <SkillsFallback data-oid="1uae4_w" />,
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
    return <SkillsFallback data-oid="yx65d8:" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="ux9.jl-">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="0xq4m7i">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="p8u2hcq"
        >
          <p className="text-muted-foreground mb-4" data-oid="upuq0ot">
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
        <section id="skills" className="py-12" data-oid="-3io3d7">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="nqwk5hu"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="lv3-hob"
          >
            <p className="text-muted-foreground mb-4" data-oid="mjf4:3u">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="btty7jo"
    >
      <RedesignedSkills data-oid="wf9046c" />
    </ErrorBoundary>
  );
}
