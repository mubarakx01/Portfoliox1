"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/error-boundary";
import { useIsClient } from "@/hooks/use-is-client";

// Static fallback component that works server-side
function SkillsFallback() {
  return (
    <section id="skills" className="py-12" data-oid="t:z:fi_">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="1:ovda2">
        Technical Skills
      </h2>
      <p
        className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        data-oid="_k3820y"
      >
        A comprehensive overview of my technical expertise across various
        domains, from machine learning and AI to software development and
        research.
      </p>
      <div
        className="flex justify-center items-center py-20"
        data-oid="0wasgrt"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary mr-2"
          data-oid="::.bikx"
        />

        <span data-oid="kbgccup">Loading skills visualization...</span>
      </div>
    </section>
  );
}

// Dynamically import the skills component with no SSR
const RedesignedSkills = dynamic(
  () =>
    import("@/components/redesigned-skills").catch((err) => {
      console.error("Failed to load RedesignedSkills:", err);
      return () => <SkillsFallback data-oid="1wwej4-" />;
    }),
  {
    ssr: false,
    loading: () => <SkillsFallback data-oid="twqd-s9" />,
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
    return <SkillsFallback data-oid="2o9hx0f" />;
  }

  if (hasError) {
    return (
      <section id="skills" className="py-12" data-oid="70fxt70">
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="18_bg:o">
          Technical Skills
        </h2>
        <div
          className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
          data-oid="_5wx5c-"
        >
          <p className="text-muted-foreground mb-4" data-oid="35tpbif">
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
        <section id="skills" className="py-12" data-oid="2p11qd.">
          <h2
            className="text-3xl font-bold text-center mb-4"
            data-oid=".e5gq-t"
          >
            Technical Skills
          </h2>
          <div
            className="flex flex-col items-center justify-center p-6 border border-destructive/20 rounded-lg bg-destructive/10 my-4 max-w-2xl mx-auto"
            data-oid="kj3ajjr"
          >
            <p className="text-muted-foreground mb-4" data-oid="d49uncj">
              We encountered an issue loading the skills visualization. Please
              refresh the page to try again.
            </p>
          </div>
        </section>
      }
      data-oid=":sgex.-"
    >
      <RedesignedSkills data-oid="yvbj20w" />
    </ErrorBoundary>
  );
}
