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
              data-oid="5xs54k_"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="-ku:m-a"
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
      data-oid="sel3uo6"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="dj.ynom"
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="q.nzvzn"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="7fc.3kt"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="p0:0650"
      >
        <ScrollReveal data-oid="gp6o01u">
          <div className="relative" data-oid="bygpwje">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="q47ps6w"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="u94_d51"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="5l_ych8"
              >
                <div className="p-4 text-white" data-oid="ertrd9w">
                  <p className="font-medium" data-oid="e06r:0t">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="u4aazlw">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="t3pdtbr"
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid="3sb5r15"
            />
          </div>
        </ScrollReveal>

        <div data-oid="yg-6saz">
          <StaggeredContainer data-oid=":g3xcn-">
            <StaggerItem data-oid="p3:j3u8">
              <h3 className="text-2xl font-bold mb-4" data-oid="0wx_86o">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="pwm0.9i">
              <p className="text-muted-foreground mb-6" data-oid="exscwmr">
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

            <StaggerItem data-oid="7octj-z">
              <p className="text-muted-foreground mb-6" data-oid="3walxju">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I'm dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="11y:mte">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="trcmn33">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="muj9a4j"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="je2vcjb" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="919d1v8"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="5duun-t"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="-k5lpm3"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="mm3-:ve" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="0b9lvd4">
              <Button
                onClick={handleDownload}
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                disabled={isDownloading}
                data-oid="36mz4hi"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="ktief4j"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="0t:9mwa"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="2ng2dgu"
                      ></path>
                    </svg>
                    <span data-oid="7tz8i8:">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download
                      className="h-4 w-4 group-hover:animate-bounce"
                      data-oid="w2ouyd3"
                    />
                    <span data-oid="hnt71b7">Download Resume</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="x001u09"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="ymadsx0"
                >
                  <span data-oid="op_t-sz">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="otq4my."
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
