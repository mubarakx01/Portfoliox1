import { Suspense } from "react";
import RedesignedHero from "@/components/redesigned-hero";
import AboutSection from "@/components/about-section";
import SkillsSectionWrapper from "@/components/skills-section-wrapper";
import RedesignedExperience from "@/components/redesigned-experience";
import RedesignedProjects from "@/components/redesigned-projects";
import CaseStudies from "@/components/case-studies";
import Education from "@/components/education";
import Publications from "@/components/publications";
import Testimonials from "@/components/testimonials";
import BlogPreview from "@/components/blog-preview";
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
      data-oid="9wu952s"
    >
      <Loader2
        className="h-8 w-8 animate-spin text-primary mb-4"
        data-oid="4p-m15h"
      />

      <p className="text-muted-foreground" data-oid="z5-set5">
        Loading {name} section...
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16" data-oid="vquoww0">
      <ScrollProgress data-oid="yse8g7x" />
      <FloatingNav data-oid="_40y0oo" />
      <FloatingThemeSwitcher data-oid="q65u617" />

      <ErrorBoundary
        fallback={<SectionFallback title="Hero" data-oid="kwsjhpa" />}
        data-oid="g_m_zxk"
      >
        <Suspense
          fallback={<LoadingSection name="Hero" data-oid="iail9ce" />}
          data-oid="pojwfug"
        >
          <RedesignedHero data-oid="vx0pigi" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="About" data-oid="qa.9e0u" />}
        data-oid="gm1v:6c"
      >
        <Suspense
          fallback={<LoadingSection name="About" data-oid="jnr6a40" />}
          data-oid="3_gxb1j"
        >
          <AboutSection data-oid="e_egry_" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Skills" data-oid="w.q-j8r" />}
        data-oid="b_u:hkp"
      >
        <SkillsSectionWrapper data-oid="syb2j3n" />
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Experience" data-oid="jly05gu" />}
        data-oid="lx.5jqw"
      >
        <Suspense
          fallback={<LoadingSection name="Experience" data-oid="we1x7gv" />}
          data-oid="53ts_3z"
        >
          <RedesignedExperience data-oid="75t.1sn" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Projects" data-oid=":0q25vo" />}
        data-oid="qi_.cs9"
      >
        <Suspense
          fallback={<LoadingSection name="Projects" data-oid="7tekl4v" />}
          data-oid="szs1sya"
        >
          <RedesignedProjects data-oid="xu6oiey" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Case Studies" data-oid="zi-_n.s" />}
        data-oid="4t-_f1b"
      >
        <Suspense
          fallback={<LoadingSection name="Case Studies" data-oid="3cax724" />}
          data-oid="8ht0j_s"
        >
          <CaseStudies data-oid="gixv2.4" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Education" data-oid="sw3-4pt" />}
        data-oid="dq-4yim"
      >
        <Suspense
          fallback={<LoadingSection name="Education" data-oid="1jiy4tc" />}
          data-oid="ust1js."
        >
          <Education data-oid="4943udi" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Publications" data-oid="srg0kk8" />}
        data-oid="2xi4ma2"
      >
        <Suspense
          fallback={<LoadingSection name="Publications" data-oid="sl9xz9p" />}
          data-oid="9s9kh00"
        >
          <Publications data-oid="sra6f-9" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Testimonials" data-oid="8ph3.84" />}
        data-oid="qm3cdd2"
      >
        <Suspense
          fallback={<LoadingSection name="Testimonials" data-oid="kse.zms" />}
          data-oid="d6ky0ix"
        >
          <Testimonials data-oid="qpg6n7t" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Blog" data-oid="ks2xozb" />}
        data-oid="31xxe2o"
      >
        <Suspense
          fallback={<LoadingSection name="Blog" data-oid="daljnpi" />}
          data-oid="p8b3o6q"
        >
          <BlogPreview data-oid="uyopo6n" />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<SectionFallback title="Contact" data-oid="al4ro0k" />}
        data-oid="b5ljg7r"
      >
        <Suspense
          fallback={<LoadingSection name="Contact" data-oid="hs_4e9y" />}
          data-oid="lffjd6r"
        >
          <ContactForm data-oid="8aiot_n" />
        </Suspense>
      </ErrorBoundary>

      <EnhancedFooter data-oid="brgrma4" />
    </main>
  );
}
