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
      data-oid="6nz3gqa"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="x4cn3kp"
      />

      <p className="text-muted-foreground" data-oid="x5edyqz">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="yc:eojj">
      <BackgroundPaths data-oid="8hw23sz" />
      <ScrollProgress data-oid="3nkx.8f" />
      <FloatingNav data-oid="h9kgvca" />
      <FloatingThemeSwitcher data-oid="yl8bp6q" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="hk0xnyr" />}
        data-oid="caa6tui"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="--ao7a_" />}
          data-oid="og90hgm"
        >
          <RedesignedHero data-oid="s1iss.q" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="-0mj-.m" />}
        data-oid="f8o1v85"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="ocj3y8z" />}
          data-oid="6zrnh-9"
        >
          <AboutSection data-oid="_4dvqpv" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="x6ya9_4" />}
        data-oid=":9_wva1"
      >
        <SkillsSection data-oid="dwuj31m" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="c3q5z65" />}
        data-oid="_q9mfou"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="4y24_i4" />}
          data-oid="j75:-9i"
        >
          <RedesignedExperience data-oid="v8x1i.m" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="0::_er7" />}
        data-oid="t939-ue"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="y.u0p8s" />}
          data-oid="wfa46cx"
        >
          <RedesignedProjects data-oid="j4dssf4" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="02msuws" />}
        data-oid="bgd0_d9"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="g.6jau-" />}
          data-oid="e4y.xuu"
        >
          <CaseStudies data-oid="gxw16lr" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="1nwg4jj" />}
        data-oid="hl6ddu-"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="eh.rw7a" />}
          data-oid="aa8y.j7"
        >
          <Education data-oid="cv63v_s" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="i:496k_" />}
        data-oid="fh9a9n8"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="l6vgb:_" />}
          data-oid="nw:jgq2"
        >
          <LovedByCommunity data-oid=":gjbbdp" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="a5y2lta" />}
        data-oid="wwnq5um"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="uik1ayd" />}
          data-oid="o2znbue"
        >
          <ContactForm data-oid="vdp8:wu" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="c:hn203" />
    </main>
  );
}
