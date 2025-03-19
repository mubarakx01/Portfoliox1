"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="9o2fm4c">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="x9_oj0p">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="atjq.l5"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="hbvnzjl"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="vim0e1h"
        />
        <span data-oid="a8dx_3c">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(() => import("./redesigned-skills"), {
  ssr: false,
  loading: () => <SkillsFallback data-oid="1eqw.fq" />,
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
    return <SkillsFallback data-oid="vjaxqwu" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="s3sq29k">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="15actsi">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="6vepc:4"
        >
          <p className="text-muted-foreground mb-4" data-oid="afv-2nz">
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
        <section id="skills" className="py-12" data-oid="tbkn7b5">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="3krrzt6"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="f2z.drt"
          >
            <p className="text-muted-foreground mb-4" data-oid="2_c1ec:">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="qz6rc2i"
    >
      <RedesignedSkills data-oid="swwk:q7" />
    </ErrorBoundary>
  );
}
