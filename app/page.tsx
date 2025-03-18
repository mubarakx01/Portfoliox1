import { Suspense } from "react";
import RedesignedHero from "@/components/redesigned-hero";
import AboutSection from "@/components/about-section";
import SkillsSectionWrapper from "@/components/skills-section-wrapper";
import RedesignedExperience from "@/components/redesigned-experience";
import RedesignedProjects from "@/components/redesigned-projects";
import CaseStudies from "@/components/case-studies";
import Education from "@/components/education";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import EnhancedFooter from "@/components/enhanced-footer";
import FloatingNav from "@/components/floating-nav";
import ScrollProgress from "@/components/scroll-progress";
import { FloatingThemeSwitcher } from "@/components/floating-theme-switcher";
import { ErrorBoundary } from "@/components/error-boundary";
import { SectionFallback } from "@/components/section-fallback";
import { Loader2 } from "lucide-react";

// Simple loading component
function LoadingSection({ name }: { name: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      data-oid="j-1otl3"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="jugthjj"
      />

      <p className="text-muted-foreground" data-oid="bn0_0j7">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="na7hykl">
      <ScrollProgress data-oid="wz_q0uf" />
      <FloatingNav data-oid="zg_dkq_" />
      <FloatingThemeSwitcher data-oid="dw.oqy1" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="k9o5qha" />}
        data-oid="4k9-9ne"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="socaj66" />}
          data-oid="hqpym7p"
        >
          <RedesignedHero data-oid="ddf_:rt" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="tetdhh." />}
        data-oid="zevjufw"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="4fzdtv." />}
          data-oid="h9if41j"
        >
          <AboutSection data-oid="zg9k.yu" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="_hl9t2b" />}
        data-oid="jk_4_50"
      >
        <SkillsSectionWrapper data-oid="nzyudiw" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="30wbd8y" />}
        data-oid="k_7w9hl"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="kniczu2" />}
          data-oid="ezb996r"
        >
          <RedesignedExperience data-oid="c09zb5q" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="kss.fpd" />}
        data-oid="xap61-w"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="p7wv62z" />}
          data-oid="2rtmbhd"
        >
          <RedesignedProjects data-oid="cspjow0" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="cz94593" />}
        data-oid="zhbxxpx"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="u9jay2e" />}
          data-oid="3q0znjd"
        >
          <CaseStudies data-oid="__nxpo6" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="08jxeb3" />}
        data-oid="kmz6v0y"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="zxnlr2s" />}
          data-oid=".pow5w."
        >
          <Education data-oid="-km48on" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonials" data-oid="et46os2" />}
        data-oid=".nj3kph"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonials" data-oid="vg3v:5s" />}
          data-oid="cde9g5w"
        >
          <Testimonials data-oid="f54:fkw" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="jvty00d" />}
        data-oid="hmwdh06"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="z88vq0x" />}
          data-oid="_:o.ucd"
        >
          <ContactForm data-oid="rd4xdk8" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="ew8b63n" />
    </main>
  );
}
