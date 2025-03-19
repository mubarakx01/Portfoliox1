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
              data-oid="waeglhb"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="b5lvz4q"
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
      data-oid="b4_8r9m"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="ntbc0d2"
      />

      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="g:hzi9j"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="3q7vysd"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="yd3:8rc"
      >
        <ScrollReveal data-oid="6519wgd">
          <div className="relative" data-oid="q4ve9b8">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="r6ghrrp"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="s1haepv"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="8k0wtpi"
              >
                <div className="p-4 text-white" data-oid="jfoo3:q">
                  <p className="font-medium" data-oid="_dvvvju">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="qtozjsj">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="lv5nhgk"
            />

            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid="2hmncfc"
            />
          </div>
        </ScrollReveal>

        <div data-oid="ohangh:">
          <StaggeredContainer data-oid="-d_q5rd">
            <StaggerItem data-oid="2b:d-v0">
              <h3 className="text-2xl font-bold mb-4" data-oid="x.z.52:">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="befi2qo">
              <p className="text-muted-foreground mb-6" data-oid="0a2gs25">
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

            <StaggerItem data-oid="nysxrae">
              <p className="text-muted-foreground mb-6" data-oid="jcz0tmp">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I'm dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="ag7a_xh">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="vb0i26n">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="8dzw3v8"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="o977cwr" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="8-t_0z4"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="7mvn:y0"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="a-pte87"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="tnv-ah2" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="ik9m5ey">
              <Button
                onClick={handleDownload}
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                disabled={isDownloading}
                data-oid="9lh8_.8"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="hu35m-0"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="eyy5axh"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="51xcwfc"
                      ></path>
                    </svg>
                    <span data-oid="0s9mze:">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download
                      className="h-4 w-4 group-hover:animate-bounce"
                      data-oid="562s55y"
                    />

                    <span data-oid="1p9iuf3">Download Resume</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="0bfb22m"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="0i_0ytd"
                >
                  <span data-oid="ryxhg1f">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="6j7dy2n"
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
