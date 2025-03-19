"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Languages,
  X,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ResumeDownload() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);

    try {
      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = "/AI_x1.pdf"; // Path relative to the public directory
      link.download = "AI_x1.pdf";
      document.body.appendChild(link);

      // Trigger download
      link.click();
      document.body.removeChild(link);

      // Show loading animation and success message
      setTimeout(() => {
        setIsDownloading(false);
        toast({
          title: "Resume Downloaded",
          description: "Your resume has been downloaded successfully.",
          action: (
            <div
              className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center"
              data-oid="0-v3ffr"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="41v0znj"
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

    return (
      <div className="flex flex-col items-center" data-oid="vrd:ztf">
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          data-oid="a0mpnop"
        >
          <Button
            onClick={() => setIsPreviewOpen(true)}
            variant="outline"
            className="gap-2"
            data-oid="s5eo0gs"
          >
            <FileText className="h-4 w-4" data-oid="shfck5v" />
            Preview Resume
          </Button>

          <Button
            onClick={handleDownload}
            className="gap-2 relative overflow-hidden"
            disabled={isDownloading}
            data-oid="5y9-us1"
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid="4:9ghra"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="_s_5ud1"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="7a3_rpr"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" data-oid="yv7_0re" />
                Download Resume
              </>
            )}

            {/* Download progress animation */}
            {isDownloading && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                data-oid="iw2c4oe"
              />
            )}
          </Button>
        </div>

        <AnimatePresence data-oid="fvhrcu3">
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
              data-oid="8_r:_cf"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="w-full max-w-3xl max-h-[80vh] bg-card rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                data-oid="mde0w:l"
              >
                <div
                  className="flex items-center justify-between p-4 border-b"
                  data-oid="69gxjn0"
                >
                  <div className="flex items-center gap-2" data-oid="klc7n8s">
                    <FileText
                      className="h-5 w-5 text-primary"
                      data-oid="3yy6c2j"
                    />

                    <h3 className="font-semibold" data-oid="d6w4kqo">
                      Resume Preview
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close preview"
                    data-oid="sfsqw60"
                  >
                    <X className="h-4 w-4" data-oid="dz9c.6u" />
                  </Button>
                </div>

                <div
                  className="overflow-y-auto p-6 max-h-[calc(80vh-60px)]"
                  data-oid="6b4p2cl"
                >
                  <div className="space-y-8" data-oid="2n6f410">
                    <div className="text-center mb-8" data-oid="mjg89z8">
                      <h1 className="text-2xl font-bold" data-oid="hcaix4d">
                        MUBARAK A
                      </h1>
                      <p className="text-muted-foreground" data-oid="4cvhx1:">
                        AI Engineer & Community Builder
                      </p>
                      <div
                        className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground"
                        data-oid="0h2sv9z"
                      >
                        <span data-oid="hf9q0-g">mr1398463@gmail.com</span>
                        <span data-oid="fwj26j5">|</span>
                        <span data-oid="imaa_37">(+91)9500255291</span>
                        <span data-oid="-9txnyc">|</span>
                        <span data-oid="sjnan-t">India,Chennai</span>
                        <span data-oid="uy1:g-y">|</span>
                        <a
                          href="https://www.linkedin.com/in/mubarak-a-xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          data-oid="aa1irbs"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <ResumeSection
                      icon={
                        <Briefcase
                          className="h-5 w-5 text-primary"
                          data-oid="ab50a0:"
                        />
                      }
                      title="Professional Experience"
                      type="work"
                      data-oid="xp.h9gq"
                    >
                      <div className="space-y-4" data-oid="j.csod-">
                        <ResumeItem
                          title="Web Designer Internship"
                          organization="Kshitiksha Foundation"
                          period="04/2024"
                          location="remote"
                          description={[
                            "Designed responsive website layouts tailored for Gen Z audiences, enhancing user engagement",
                            "Implemented interactive features like scrolling animations and 3D effects using modern design tools",
                            "Optimized website performance and accessibility to improve load times and reach",
                          ]}
                          data-oid="g_wzu9b"
                        />

                        <ResumeItem
                          title="Data Science Internship"
                          organization="Shiash Info Solutions Private Limited"
                          period="11/2023"
                          location="Tamil Nadu,Chennai"
                          description={[
                            "Analyzed datasets using Python and SQL to uncover actionable business insights",
                            "Developed machine learning models to enhance predictive analytics capabilities",
                            "Collaborated with a team to produce data visualizations for stakeholder insights",
                          ]}
                          data-oid="330byne"
                        />
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      icon={
                        <GraduationCap
                          className="h-5 w-5 text-primary"
                          data-oid="zeimscs"
                        />
                      }
                      title="Education"
                      type="education"
                      data-oid="8_vrvoq"
                    >
                      <ResumeItem
                        title="Bachelor of Engineering"
                        organization="City College of Thirvannamalai"
                        period="2015 - 2019"
                        location="India,Chennai"
                        description={["GPA: 3.8", "Honors: Magna Cum Laude"]}
                        data-oid="ie30d3i"
                      />
                    </ResumeSection>

                    <ResumeSection
                      type="skills"
                      icon={
                        <Code
                          className="h-5 w-5 text-primary"
                          data-oid="d1mixfi"
                        />
                      }
                      title="Technical Skills"
                      data-oid=":.n6h1f"
                    >
                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid=".zjb79z"
                      >
                        <div data-oid="0il8uyp">
                          <h4 className="font-medium mb-2" data-oid="2oa0:e:">
                            Programming Languages
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="qggxsm0"
                          >
                            <li data-oid="n2lff5s">Python (Expert)</li>
                            <li data-oid="vf9b2wg">
                              JavaScript/TypeScript (Expert)
                            </li>
                            <li data-oid="xs9rou7">C++ (Advanced)</li>
                            <li data-oid=".pgbiua">R (Intermediate)</li>
                            <li data-oid="c9a-8s3">SQL (Advanced)</li>
                          </ul>
                        </div>

                        <div data-oid="hdjtjvx">
                          <h4 className="font-medium mb-2" data-oid=":.finw1">
                            Frameworks & Tools
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="bvdyck6"
                          >
                            <li data-oid="6y6:.tb">PyTorch (Expert)</li>
                            <li data-oid="gb5t_4u">TensorFlow (Expert)</li>
                            <li data-oid="hltvx9l">Scikit-learn (Expert)</li>
                            <li data-oid="athmw2:">Docker (Advanced)</li>
                            <li data-oid="692jjkr">AWS/GCP (Advanced)</li>
                          </ul>
                        </div>
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      type="awards"
                      icon={
                        <Award
                          className="h-5 w-5 text-primary"
                          data-oid="cs3jhbd"
                        />
                      }
                      title="Awards & Publications"
                      data-oid="eykybhl"
                    >
                      <ul
                        className="space-y-2 text-muted-foreground"
                        data-oid="4169wkm"
                      >
                        <li data-oid="57:pj-z">
                          <span
                            className="font-medium text-foreground"
                            data-oid="teqh65k"
                          >
                            Efficient Voice Cloning with Reduced Computational
                            Resources
                          </span>{" "}
                          - IEEE Transactions on Audio Processing, 2022
                        </li>
                        <li data-oid="nb-qano">
                          <span
                            className="font-medium text-foreground"
                            data-oid="hjxcx3x"
                          >
                            Community-Centered AI: Bridging Technology and
                            Social Impact
                          </span>{" "}
                          - NeurIPS Workshop on AI for Social Good, 2021
                        </li>
                        <li data-oid="3b-fslr">
                          <span
                            className="font-medium text-foreground"
                            data-oid="fubfpoh"
                          >
                            Teacher Excellence Award
                          </span>{" "}
                          - Success Academy, 2020
                        </li>
                      </ul>
                    </ResumeSection>

                    <ResumeSection
                      type="languages"
                      icon={
                        <Languages
                          className="h-5 w-5 text-primary"
                          data-oid="dipp.pz"
                        />
                      }
                      title="Languages"
                      data-oid="jf9vmnl"
                    >
                      <div
                        className="flex gap-4 text-muted-foreground"
                        data-oid="xy97ast"
                      >
                        <span data-oid="r2cnl4q">English (Native)</span>
                        <span data-oid="b9_edoc">Spanish (Conversational)</span>
                      </div>
                    </ResumeSection>
                  </div>
                </div>

                <div
                  className="border-t p-4 flex justify-between items-center"
                  data-oid="lbjfa5-"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="h3h6.cy"
                  >
                    Last updated: March 2025
                  </span>
                  <Button
                    onClick={handleDownload}
                    className="gap-2"
                    data-oid="wry_4e:"
                  >
                    <Download className="h-4 w-4" data-oid="t1em-n_" />
                    Download PDF
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  interface ResumeSectionProps {
    icon: React.ReactNode;
    title: string;
    type: "work" | "education" | "skills" | "awards" | "languages";
    children: React.ReactNode;
  }

  const ResumeSection: React.FC<ResumeSectionProps> = ({
    icon,
    title,
    type,
    children,
  }) => (
    <section className="space-y-4" data-oid="rnv8aqw">
      <div className="flex items-center gap-2" data-oid="-9m3z1h">
        {icon}
        <h2 className="text-lg font-semibold" data-oid="od5n0i1">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );

  interface ResumeItemProps {
    title: string;
    organization: string;
    period: string;
    location: string;
    description: string[];
  }

  const ResumeItem: React.FC<ResumeItemProps> = ({
    title,
    organization,
    period,
    location,
    description,
  }) => (
    <div className="space-y-2" data-oid="ni-wi.f">
      <div className="flex justify-between items-start" data-oid="ocnpu89">
        <div data-oid="qdocko-">
          <h3 className="font-medium" data-oid="03819u8">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-oid=":zvleo2">
            {organization}
          </p>
        </div>
        <div
          className="text-sm text-right text-muted-foreground"
          data-oid="yvq2_wk"
        >
          <p data-oid="n7k_r1:">{period}</p>
          <p data-oid="mub4q8i">{location}</p>
        </div>
      </div>
      <ul
        className="list-disc list-inside text-sm space-y-1"
        data-oid="gg3c6ay"
      >
        {description.map((item, index) => (
          <li key={index} data-oid="j:dudhr">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
