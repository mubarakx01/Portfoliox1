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
      data-oid="z2e_2p-"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="dk54o16"
      />

      <p className="text-muted-foreground" data-oid="hiwlkca">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="mcux_pj">
      <BackgroundPaths data-oid="b3r9d6d" />
      <ScrollProgress data-oid="r5pldrq" />
      <FloatingNav data-oid="mvp0:4i" />
      <FloatingThemeSwitcher data-oid="qprkmmp" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="8_d-5c:" />}
        data-oid="zfszgs0"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="e70q2v7" />}
          data-oid="cctf415"
        >
          <RedesignedHero data-oid="dzy15yt" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid=":z4vfzo" />}
        data-oid="wrqwh4e"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="qfx9thj" />}
          data-oid="kf_d6hx"
        >
          <AboutSection data-oid="06:rqs3" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="agt8qw2" />}
        data-oid="fr3vc90"
      >
        <SkillsSection data-oid="8ywte71" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="0e8_s7." />}
        data-oid="s2cblec"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="ab_pbi5" />}
          data-oid="sk57fvg"
        >
          <RedesignedExperience data-oid="-whbdwz" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="z1pcg3u" />}
        data-oid="sdhzx-4"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="698irq9" />}
          data-oid="ujt6pgn"
        >
          <RedesignedProjects data-oid="1awx6km" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="038pfgh" />}
        data-oid="zc6t9.."
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="7p0jwiz" />}
          data-oid="0fvy.1i"
        >
          <CaseStudies data-oid="s.oegmj" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="hbirofr" />}
        data-oid="4dth5v_"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="hzc2xyc" />}
          data-oid="jx18ubr"
        >
          <Education data-oid="bxzrx8j" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="92yalq5" />}
        data-oid="0tlg71t"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="_huk1kt" />}
          data-oid="lq62ko9"
        >
          <LovedByCommunity data-oid="4k:-j0f" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid=":brdv4r" />}
        data-oid="5h--7ii"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="bdhe:h0" />}
          data-oid="1mcwe_v"
        >
          <ContactForm data-oid="h2soqpz" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="d4p4rg." />
    </main>
  );
}
