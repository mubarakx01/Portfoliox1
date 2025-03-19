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
      data-oid="3.zafg5"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="10z7j51"
      />

      <p className="text-muted-foreground" data-oid="c_hp:.u">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="2yn7217">
      <BackgroundPaths data-oid="_i:irb1" />
      <ScrollProgress data-oid="ukxk.ru" />
      <FloatingNav data-oid="-69efwu" />
      <FloatingThemeSwitcher data-oid="q926228" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="_8f.jby" />}
        data-oid="0i40vs8"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="em-xgtu" />}
          data-oid="jvqc221"
        >
          <RedesignedHero data-oid="8jg7bqs" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="nov964o" />}
        data-oid="2tpjioy"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="snbb_sh" />}
          data-oid="21k2fjh"
        >
          <AboutSection data-oid="n2u3ks5" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="0lgh:n." />}
        data-oid="1ilm804"
      >
        <SkillsSection data-oid="q.fwl1i" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="jaubjls" />}
        data-oid="rvflatq"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="azie4-v" />}
          data-oid="00_titp"
        >
          <RedesignedExperience data-oid="_sf0xzj" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid="f:jvxt_" />}
        data-oid="9qdcdle"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="o0prned" />}
          data-oid="9zd63c5"
        >
          <RedesignedProjects data-oid="lhy8otb" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="u26::09" />}
        data-oid="zd61s3q"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="599133." />}
          data-oid="eoxd37a"
        >
          <CaseStudies data-oid="n5tiah0" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="drnr_cf" />}
        data-oid="osg2l3:"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="s5g24vq" />}
          data-oid="kik5kx-"
        >
          <Education data-oid="mkp4400" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonial" data-oid="ll0j6_s" />}
        data-oid="qjlc31-"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonial" data-oid="sg3w515" />}
          data-oid="vk5p0ky"
        >
          <LovedByCommunity data-oid="s15b.si" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="s4nx_kb" />}
        data-oid="-u8nkcw"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="ump4.8z" />}
          data-oid=".ojm_n0"
        >
          <ContactForm data-oid="dw5w:aw" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="tcfcsma" />
    </main>
  );
}
