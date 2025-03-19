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
      data-oid="jbg0qba"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="-51bmev"
      />

      <p className="text-muted-foreground" data-oid="q1is0-h">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="4714y4l">
      <BackgroundPaths data-oid="5efe-ou" />
      <ScrollProgress data-oid="-071fdp" />
      <FloatingNav data-oid="er76lg5" />
      <FloatingThemeSwitcher data-oid=".9me9h4" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="mv1yvek" />}
        data-oid="5g2qs4r"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="bg02fkf" />}
          data-oid="gx:zti5"
        >
          <RedesignedHero data-oid="_9d-pyp" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="o.bjzns" />}
        data-oid=":x3zw_g"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid=":cljuxf" />}
          data-oid="tumojw6"
        >
          <AboutSection data-oid="srreyo5" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="iuen5dk" />}
        data-oid="bozo.21"
      >
        <SkillsSection data-oid="kp7sci0" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="_5mr2g0" />}
        data-oid="kitkvx6"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="1z72o2i" />}
          data-oid="-zolv3e"
        >
          <RedesignedExperience data-oid="5_ifqih" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="tuk9drr" />}
        data-oid="kdkleci"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="5l7sool" />}
          data-oid="j.xjdx-"
        >
          <RedesignedProjects data-oid="zn46aym" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="xma69de" />}
        data-oid="s_3feod"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="sdrcjxy" />}
          data-oid="0px7_ga"
        >
          <CaseStudies data-oid="dvxi7f." />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="yhd.ims" />}
        data-oid="466u6z."
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="4eeip-p" />}
          data-oid="pasovsu"
        >
          <Education data-oid="8x:s--l" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="4n.7cq." />}
        data-oid="oe3ixlp"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="5ja:9mx" />}
          data-oid="t02i901"
        >
          <LovedByCommunity data-oid="vkit.mu" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="l986.x:" />}
        data-oid="g1vivlu"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="5obthuk" />}
          data-oid="l4k6k5p"
        >
          <ContactForm data-oid="jme02dh" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="5p-rmz4" />
    </main>
  );
}
