"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="he:lnf.">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="1o1c_sv">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="lzcxs3o"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="6--735-"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="88qzgj8"
        />

        <span data-oid="nmk2o6_">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(() => import("./redesigned-skills"), {
  ssr: false,
  loading: () => <SkillsFallback data-oid="0y2zb_3" />,
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
    return <SkillsFallback data-oid="5u0tq2_" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="_vkjzug">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="c_q1._k">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="o7dmim6"
        >
          <p className="text-muted-foreground mb-4" data-oid="i-4wuci">
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
        <section id="skills" className="py-12" data-oid="gm0wk3r">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid="f42bfvj"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="tgqbod4"
          >
            <p className="text-muted-foreground mb-4" data-oid="3ml.8v1">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid="t1at2l3"
    >
      <RedesignedSkills data-oid="88v7gxf" />
    </ErrorBoundary>
  );
}
