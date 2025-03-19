import { Suspense } from "react";
import RedesignedHero from "@/components/redesigned-hero";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import RedesignedExperience from "@/components/redesigned-experience";
import RedesignedProjects from "@/components/redesigned-projects";
import CaseStudies from "@/components/case-studies";
import Education from "@/components/education";
import LovedByCommunity from "@/components/loved-by-community";
import ContactForm from "@/components/contact-form";
import EnhancedFooter from "@/components/enhanced-footer";
import FloatingNav from "@/components/floating-nav";
import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher";
import ScrollProgress from "@/components/scroll-progress";
import BackgroundPaths from "@/components/background-paths";
import { ErrorBoundary } from "@/components/error-boundary";
import { SectionFallback } from "@/components/section-fallback";
import { Loader2 } from "lucide-react";
import Loading from "@/components/loading";

// Simple loading component
function LoadingSection({ name }: { name: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      data-oid="57ic:wk"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="s2fat0d"
      />

      <p className="text-muted-foreground" data-oid=":u7h:-6">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="8.0b9e9">
      <BackgroundPaths data-oid="68eaq7p" />
      <ScrollProgress data-oid="6phqz:c" />
      <FloatingNav data-oid="kn1ez1x" />
      <FloatingThemeSwitcher data-oid="gt2i0j9" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="p2scki_" />}
        data-oid="3vgq2:k"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="u_4co7f" />}
          data-oid="0yk0f0v"
        >
          <RedesignedHero data-oid="0-hga7p" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="watlwsv" />}
        data-oid="9op9cn8"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="dkbzxwq" />}
          data-oid="olgxydq"
        >
          <AboutSection data-oid="onv:zze" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="nz4q9b8" />}
        data-oid="n2jprp9"
      >
        <SkillsSection data-oid="t4r07_z" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="h0-4umb" />}
        data-oid="n:ki:6d"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="er6o0o4" />}
          data-oid="9z:xnn8"
        >
          <RedesignedExperience data-oid="cy5hjw7" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="mrm:nrd" />}
        data-oid="f9f6q51"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="3b3drb0" />}
          data-oid="pco4gjg"
        >
          <RedesignedProjects data-oid="mu6-jj4" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="8erv7u5" />}
        data-oid="0sqqzbr"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid=":84l19d" />}
          data-oid="hw2ie5z"
        >
          <CaseStudies data-oid="srn7t-e" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="8sjdhze" />}
        data-oid="jraw95e"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="q9tbu6f" />}
          data-oid="7.clckx"
        >
          <Education data-oid="52km9m7" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="e:8dc5o" />}
        data-oid="jha7j1e"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="m4.va68" />}
          data-oid="h9wels-"
        >
          <LovedByCommunity data-oid="qpz5l2a" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="y_6euo6" />}
        data-oid="scrqnmd"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="c259_-t" />}
          data-oid="6_og-27"
        >
          <ContactForm data-oid="vmfuk4v" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="nvj.-v:" />
    </main>
  );
}
