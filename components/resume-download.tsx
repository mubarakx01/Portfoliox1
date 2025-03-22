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
              data-oid="5fivi7f"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="el3:1rx"
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
      <div className="flex flex-col items-center" data-oid="8eq_vnj">
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          data-oid="35s27u9"
        >
          <Button
            onClick={() => setIsPreviewOpen(true)}
            variant="outline"
            className="gap-2"
            data-oid="b173.pt"
          >
            <FileText className="h-4 w-4" data-oid="h_zgvrz" />
            Preview Resume
          </Button>

          <Button
            onClick={handleDownload}
            className="gap-2 relative overflow-hidden"
            disabled={isDownloading}
            data-oid="4i-p12z"
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid="v2yr:hg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="ogku4oj"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid=":l:bguj"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" data-oid="nez0pk." />
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
                data-oid="9s1hgln"
              />
            )}
          </Button>
        </div>

        <AnimatePresence data-oid="yb73igz">
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
              data-oid="tvzb5ck"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="w-full max-w-3xl max-h-[80vh] bg-card rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                data-oid="xi2ucl7"
              >
                <div
                  className="flex items-center justify-between p-4 border-b"
                  data-oid="sybj0ns"
                >
                  <div className="flex items-center gap-2" data-oid="ij_w_pz">
                    <FileText
                      className="h-5 w-5 text-primary"
                      data-oid="rlgy_bq"
                    />

                    <h3 className="font-semibold" data-oid="w62849w">
                      Resume Preview
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close preview"
                    data-oid="m:8z73b"
                  >
                    <X className="h-4 w-4" data-oid="_rbn5tb" />
                  </Button>
                </div>

                <div
                  className="overflow-y-auto p-6 max-h-[calc(80vh-60px)]"
                  data-oid="g.d1l23"
                >
                  <div className="space-y-8" data-oid="hmanlj4">
                    <div className="text-center mb-8" data-oid="lj1yw1p">
                      <h1 className="text-2xl font-bold" data-oid="_do5ots">
                        MUBARAK A
                      </h1>
                      <p className="text-muted-foreground" data-oid="3.vnzz8">
                        AI Engineer & Community Builder
                      </p>
                      <div
                        className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground"
                        data-oid="itluiwh"
                      >
                        <span data-oid="qc06k0p">mr1398463@gmail.com</span>
                        <span data-oid="9kfiu6j">|</span>
                        <span data-oid="f9u8_20">(+91)9500255291</span>
                        <span data-oid="im6rdid">|</span>
                        <span data-oid="crm5e8m">India,Chennai</span>
                        <span data-oid="pf98r_s">|</span>
                        <a
                          href="https://www.linkedin.com/in/mubarak-a-xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          data-oid="s_j-5oy"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <ResumeSection
                      icon={
                        <Briefcase
                          className="h-5 w-5 text-primary"
                          data-oid="8twubjy"
                        />
                      }
                      title="Professional Experience"
                      type="work"
                      data-oid="7vxfnb8"
                    >
                      <div className="space-y-4" data-oid="l8ncujz">
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
                          data-oid="fv6ecvg"
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
                          data-oid="_frk52p"
                        />
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      icon={
                        <GraduationCap
                          className="h-5 w-5 text-primary"
                          data-oid="wneukmd"
                        />
                      }
                      title="Education"
                      type="education"
                      data-oid=".m1.cn3"
                    >
                      <ResumeItem
                        title="Bachelor of Engineering"
                        organization="City College of Thirvannamalai"
                        period="2015 - 2019"
                        location="India,Chennai"
                        description={["GPA: 3.8", "Honors: Magna Cum Laude"]}
                        data-oid="kffreg7"
                      />
                    </ResumeSection>

                    <ResumeSection
                      type="skills"
                      icon={
                        <Code
                          className="h-5 w-5 text-primary"
                          data-oid="5phlbrk"
                        />
                      }
                      title="Technical Skills"
                      data-oid="r9lc.br"
                    >
                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid="_:e8h6_"
                      >
                        <div data-oid="i:d-c4u">
                          <h4 className="font-medium mb-2" data-oid="9.605zx">
                            Programming Languages
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="k1bn5th"
                          >
                            <li data-oid=".4qdj3b">Python (Expert)</li>
                            <li data-oid="9fu5-x.">
                              JavaScript/TypeScript (Expert)
                            </li>
                            <li data-oid="okdahfe">C++ (Advanced)</li>
                            <li data-oid="_llt3_t">R (Intermediate)</li>
                            <li data-oid="nzo39nd">SQL (Advanced)</li>
                          </ul>
                        </div>

                        <div data-oid="3wsxrr:">
                          <h4 className="font-medium mb-2" data-oid="zye3pfk">
                            Frameworks & Tools
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="h2qnb3i"
                          >
                            <li data-oid="eubrbhx">PyTorch (Expert)</li>
                            <li data-oid="rrrj4mp">TensorFlow (Expert)</li>
                            <li data-oid="411xzkh">Scikit-learn (Expert)</li>
                            <li data-oid="q8arewp">Docker (Advanced)</li>
                            <li data-oid="oxua-qv">AWS/GCP (Advanced)</li>
                          </ul>
                        </div>
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      type="awards"
                      icon={
                        <Award
                          className="h-5 w-5 text-primary"
                          data-oid="kl7w_-."
                        />
                      }
                      title="Awards & Publications"
                      data-oid="y.8o:yi"
                    >
                      <ul
                        className="space-y-2 text-muted-foreground"
                        data-oid="serh1zw"
                      >
                        <li data-oid="usv67al">
                          <span
                            className="font-medium text-foreground"
                            data-oid="e2gtgwa"
                          >
                            Efficient Voice Cloning with Reduced Computational
                            Resources
                          </span>{" "}
                          - IEEE Transactions on Audio Processing, 2022
                        </li>
                        <li data-oid="yxg6._.">
                          <span
                            className="font-medium text-foreground"
                            data-oid="z_6s49k"
                          >
                            Community-Centered AI: Bridging Technology and
                            Social Impact
                          </span>{" "}
                          - NeurIPS Workshop on AI for Social Good, 2021
                        </li>
                        <li data-oid="8hwkoqc">
                          <span
                            className="font-medium text-foreground"
                            data-oid="l8fi5bm"
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
                          data-oid="zlku70l"
                        />
                      }
                      title="Languages"
                      data-oid="xn2ag-3"
                    >
                      <div
                        className="flex gap-4 text-muted-foreground"
                        data-oid="25t0:p7"
                      >
                        <span data-oid="5nmen.4">English (Native)</span>
                        <span data-oid="t1ov319">Spanish (Conversational)</span>
                      </div>
                    </ResumeSection>
                  </div>
                </div>

                <div
                  className="border-t p-4 flex justify-between items-center"
                  data-oid="q8km0xq"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="f0kn1-r"
                  >
                    Last updated: March 2025
                  </span>
                  <Button
                    onClick={handleDownload}
                    className="gap-2"
                    data-oid="_6r9ed0"
                  >
                    <Download className="h-4 w-4" data-oid="g7pbacm" />
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
    <section className="space-y-4" data-oid="sav_7_x">
      <div className="flex items-center gap-2" data-oid="t6o6auq">
        {icon}
        <h2 className="text-lg font-semibold" data-oid="top0ap8">
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
    <div className="space-y-2" data-oid="uy_17o5">
      <div className="flex justify-between items-start" data-oid="9pk0clp">
        <div data-oid="nhra4mi">
          <h3 className="font-medium" data-oid=".id47_2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-oid="utfbc34">
            {organization}
          </p>
        </div>
        <div
          className="text-sm text-right text-muted-foreground"
          data-oid="fzvmbg5"
        >
          <p data-oid="rkrbl1v">{period}</p>
          <p data-oid="cs5eid-">{location}</p>
        </div>
      </div>
      <ul
        className="list-disc list-inside text-sm space-y-1"
        data-oid="53f5usz"
      >
        {description.map((item, index) => (
          <li key={index} data-oid="nqszy4j">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
