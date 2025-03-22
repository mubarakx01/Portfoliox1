import { Suspense } from "react";
import RedesignedHero from "@/components/redesigned-hero";
import AboutSection from "@/components/about-section";
import RedesignedExperience from "@/components/redesigned-experience";
import RedesignedProjects from "@/components/redesigned-projects";
import LovedByCommunity from "@/components/loved-by-community";
import ContactForm from "@/components/contact-form";
import FloatingNav from "@/components/floating-nav";
import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher";
import ScrollProgress from "@/components/scroll-progress";
import BackgroundPaths from "@/components/background-paths";
import { ErrorBoundary } from "@/components/error-boundary";
import { SectionFallback } from "@/components/section-fallback";
import { Loader2 } from "lucide-react";
import Loading from "@/components/loading";
import SkillsSectionWrapper from "@/components/skills-section-wrapper";

// Simple loading component
function LoadingSection({ name }: { name: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      data-oid="fceq9kl"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="kkgab87"
      />
      <p className="text-muted-foreground" data-oid="shkoirg">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="g2yoi:f">
      <BackgroundPaths data-oid="5-ktc:6" />
      <ScrollProgress data-oid=".df4qdt" />
      <FloatingNav data-oid="ob0st.e" />
      <FloatingThemeSwitcher data-oid="ybe:x:n" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="fog4:lx" />}
        data-oid="f9s8:01"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="v_-gp2y" />}
          data-oid="ox:.itd"
        >
          <RedesignedHero data-oid="rp-s09s" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="7sjx-e0" />}
        data-oid="m4tv827"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="44m6sd." />}
          data-oid="yw21ryi"
        >
          <AboutSection data-oid="06vr.g1" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="rrebxbf" />}
        data-oid="4gq3rg7"
      >
        <Suspense
          fallback={<LoadingSection name="Skills" data-oid="ql4lv5y" />}
          data-oid="69.oipu"
        >
          <SkillsSectionWrapper data-oid="ooqd67k" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="3tdaptc" />}
        data-oid="2lv2f:c"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="5m59h:a" />}
          data-oid="pledz5d"
        >
          <RedesignedExperience data-oid="cef_r6v" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="dec-7y5" />}
        data-oid="ij8zrma"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="dt.:kx9" />}
          data-oid=".khiakt"
        >
          <RedesignedProjects data-oid="1ig8.q5" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="2pc1:_f" />}
        data-oid="8c8l2hz"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="ifgu_-i" />}
          data-oid="yad:vj6"
        >
          <LovedByCommunity data-oid="8bfyw86" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="ka46_2p" />}
        data-oid="leflz1v"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="lz0mtup" />}
          data-oid="zvvof04"
        >
          <ContactForm data-oid="5lsv0cy" />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
