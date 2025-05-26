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
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />

      <p className="text-muted-foreground">Loading {name} section...</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-16">
      <BackgroundPaths />
      <ScrollProgress />
      <FloatingNav />
      <FloatingThemeSwitcher />

      <ErrorBoundary fallback={<SectionFallback title="Hero" />}>
        <Suspense fallback={<LoadingSection name="Hero" />}>
          <RedesignedHero />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="About" />}>
        <Suspense fallback={<LoadingSection name="About" />}>
          <AboutSection />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Skills" />}>
        <Suspense fallback={<LoadingSection name="Skills" />}>
          <SkillsSectionWrapper />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Experience" />}>
        <Suspense fallback={<LoadingSection name="Experience" />}>
          <RedesignedExperience />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Projects" />}>
        <Suspense fallback={<LoadingSection name="Projects" />}>
          <RedesignedProjects />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Testimonial" />}>
        <Suspense fallback={<LoadingSection name="Testimonial" />}>
          <LovedByCommunity />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<SectionFallback title="Contact" />}>
        <Suspense fallback={<LoadingSection name="Contact" />}>
          <ContactForm />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
