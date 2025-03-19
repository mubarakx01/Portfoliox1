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
              data-oid="vt3po-r"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="a6ayf.7"
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
      data-oid="jv.oc.a"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="v-s74zb"
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="1:k:5h0"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="ravs6g."
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="2_mu6n5"
      >
        <ScrollReveal data-oid="0zsqvic">
          <div className="relative" data-oid="x_ocef4">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="3optpmm"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="j:cybta"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="382g9zp"
              >
                <div className="p-4 text-white" data-oid="9h9xxda">
                  <p className="font-medium" data-oid="tzny5yp">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="_9z1ahe">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="xo-1wfy"
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid=":sae5y1"
            />
          </div>
        </ScrollReveal>

        <div data-oid="j_szl6z">
          <StaggeredContainer data-oid="78a8ke9">
            <StaggerItem data-oid="g.5.joj">
              <h3 className="text-2xl font-bold mb-4" data-oid="kjqumha">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="ju9zd7w">
              <p className="text-muted-foreground mb-6" data-oid="hnh.gzc">
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

            <StaggerItem data-oid="y7ndzwr">
              <p className="text-muted-foreground mb-6" data-oid="yfxcyza">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I'm dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="2w6f9vv">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="ydj0i6r">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="hje95p0"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid=".s-g2zn" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="gn-du2y"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="8q73hgz"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="kchk0c1"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="1bc5k5t" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="snfqun0">
              <Button
                onClick={handleDownload}
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                disabled={isDownloading}
                data-oid=":3_t-0w"
              >
                {isDownloading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      data-oid="wnh3-8n"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        data-oid="eaqz7mr"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        data-oid="q0vj3dv"
                      ></path>
                    </svg>
                    <span data-oid="46fi-uj">Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download
                      className="h-4 w-4 group-hover:animate-bounce"
                      data-oid="d7k5hba"
                    />
                    <span data-oid=":et7l.b">Download Resume</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="mvpzy5a"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="v553igo"
                >
                  <span data-oid="w0-0x0a">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="1yetyu."
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
