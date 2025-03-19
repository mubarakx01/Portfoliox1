"use client";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/ui/section-container";
import {
  ScrollReveal,
  StaggeredContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function AboutSection() {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    try {
      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = "/AI_x1.pdf";
      link.download = "AI_x1.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message after a brief delay
      setTimeout(() => {
        setIsDownloading(false);
        toast({
          title: "Resume Downloaded Successfully",
          description: "Your resume has been downloaded to your device.",
          action: (
            <div
              className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center"
              data-oid="nb9x.sm"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="t-h.r_c"
              />
            </div>
          ),
        });
      }, 1500);
    } catch (error) {
      setIsDownloading(false);
      toast({
        title: "Download Failed",
        description:
          "There was an error downloading the resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <SectionContainer
      id="about"
      className="relative overflow-hidden"
      data-oid="z6pvgu2"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="mb9p.1i"
      />

      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="jmh237t"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="-3m4byp"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="9lm5.3:"
      >
        <ScrollReveal data-oid="rjkdoou">
          <div className="relative" data-oid="fx.5e5e">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="yfhfh:k"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="0ws_jaw"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="n6guhhd"
              >
                <div className="p-4 text-white" data-oid="riyugvp">
                  <p className="font-medium" data-oid="54ps5a_">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="y5bph8j">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="p60ysdh"
            />

            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid="_05html"
            />
          </div>
        </ScrollReveal>

        <div data-oid="smttm:e">
          <StaggeredContainer data-oid=".ddo3hn">
            <StaggerItem data-oid="cgzd1-o">
              <h3 className="text-2xl font-bold mb-4" data-oid="lt0l40c">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="cci52f0">
              <p className="text-muted-foreground mb-6" data-oid="f5s2xoe">
                I'm a passionate Software Engineer and AI Enthusiast with a
                robust foundation in Electronics and Communication Engineering.
                My expertise spans machine learning, web development, and data
                science, empowering me to craft innovative, user-friendly
                solutions that tackle real-world challenges. I specialize in
                designing visually appealing, high-performance websites and
                AI-driven systems that prioritize usability and practical
                impact.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="6jyjyn1">
              <p className="text-muted-foreground mb-6" data-oid="66:0vc9">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I'm dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="op23j9e">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="6s4le.j">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="8x76v8v"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="u__lq49" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="sp-6lnz"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="5f1l2gh"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid=":htc260"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="plriyw_" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="u7lmt21">
              <Button
                onClick={handleDownload}
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                disabled={isDownloading}
                data-oid="8:c0sdu"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="8ibrz:4"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="yy:wz0b"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="87gnn3u"
                      ></path>
                    </svg>
                    <span data-oid="vcymrlz">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download
                      className="h-4 w-4 group-hover:animate-bounce"
                      data-oid="f1kzq.w"
                    />

                    <span data-oid="e7-7-oh">Download Resume</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="94fdhx6"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="-ux33d0"
                >
                  <span data-oid="n7qam2i">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="chbt5f-"
                  />
                </a>
              </Button>
            </StaggerItem>
          </StaggeredContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
