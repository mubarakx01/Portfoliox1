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
              data-oid="-2q6188"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="ek3oupw"
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
      <div className="flex flex-col items-center" data-oid="s:04j64">
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          data-oid="4h2u_2-"
        >
          <Button
            onClick={() => setIsPreviewOpen(true)}
            variant="outline"
            className="gap-2"
            data-oid=":0c-znw"
          >
            <FileText className="h-4 w-4" data-oid="pydpa9j" />
            Preview Resume
          </Button>

          <Button
            onClick={handleDownload}
            className="gap-2 relative overflow-hidden"
            disabled={isDownloading}
            data-oid="8_vai6m"
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid=":hz9wp_"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="7xsiq_3"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="ag8omxa"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" data-oid="wv28hth" />
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
                data-oid="8ykd4u:"
              />
            )}
          </Button>
        </div>

        <AnimatePresence data-oid="24oliz9">
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
              data-oid="rxlwqs9"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="w-full max-w-3xl max-h-[80vh] bg-card rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                data-oid="pa:op3v"
              >
                <div
                  className="flex items-center justify-between p-4 border-b"
                  data-oid=".px2l_l"
                >
                  <div className="flex items-center gap-2" data-oid="laz99_6">
                    <FileText
                      className="h-5 w-5 text-primary"
                      data-oid="z.l0d2d"
                    />

                    <h3 className="font-semibold" data-oid="zquh:5t">
                      Resume Preview
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close preview"
                    data-oid="5ocx9o_"
                  >
                    <X className="h-4 w-4" data-oid="i1ofw7u" />
                  </Button>
                </div>

                <div
                  className="overflow-y-auto p-6 max-h-[calc(80vh-60px)]"
                  data-oid="rytnnri"
                >
                  <div className="space-y-8" data-oid="4ghj8bz">
                    <div className="text-center mb-8" data-oid="zotfja5">
                      <h1 className="text-2xl font-bold" data-oid=":bj5cj8">
                        MUBARAK A
                      </h1>
                      <p className="text-muted-foreground" data-oid="yarf8kr">
                        AI Engineer & Community Builder
                      </p>
                      <div
                        className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground"
                        data-oid="aca3xcy"
                      >
                        <span data-oid="f.fi6ev">mr1398463@gmail.com</span>
                        <span data-oid="o_gulr9">|</span>
                        <span data-oid="761cfqu">(+91)9500255291</span>
                        <span data-oid="_biipgm">|</span>
                        <span data-oid="eio6pto">India,Chennai</span>
                        <span data-oid="a6-dzst">|</span>
                        <a
                          href="https://www.linkedin.com/in/mubarak-a-xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          data-oid="jmom31x"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <ResumeSection
                      icon={
                        <Briefcase
                          className="h-5 w-5 text-primary"
                          data-oid=":kvmxi4"
                        />
                      }
                      title="Professional Experience"
                      type="work"
                      data-oid="5jy92za"
                    >
                      <div className="space-y-4" data-oid="x0:9fix">
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
                          data-oid="2z6r4r9"
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
                          data-oid="kc7zvkr"
                        />
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      icon={
                        <GraduationCap
                          className="h-5 w-5 text-primary"
                          data-oid="r6375gj"
                        />
                      }
                      title="Education"
                      type="education"
                      data-oid="j61j_-y"
                    >
                      <ResumeItem
                        title="Bachelor of Engineering"
                        organization="City College of Thirvannamalai"
                        period="2015 - 2019"
                        location="India,Chennai"
                        description={["GPA: 3.8", "Honors: Magna Cum Laude"]}
                        data-oid="_kra87w"
                      />
                    </ResumeSection>

                    <ResumeSection
                      type="skills"
                      icon={
                        <Code
                          className="h-5 w-5 text-primary"
                          data-oid="uog.cf9"
                        />
                      }
                      title="Technical Skills"
                      data-oid="a_-xmmq"
                    >
                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid=".g7qrtd"
                      >
                        <div data-oid="qawvdo6">
                          <h4 className="font-medium mb-2" data-oid="sell-u0">
                            Programming Languages
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid=".s3:11i"
                          >
                            <li data-oid="0ywtk0r">Python (Expert)</li>
                            <li data-oid="yaadcl8">
                              JavaScript/TypeScript (Expert)
                            </li>
                            <li data-oid="urqw.:y">C++ (Advanced)</li>
                            <li data-oid="dzvs-:3">R (Intermediate)</li>
                            <li data-oid="qy7h9_z">SQL (Advanced)</li>
                          </ul>
                        </div>

                        <div data-oid="5rn:m6a">
                          <h4 className="font-medium mb-2" data-oid="4ujvwvg">
                            Frameworks & Tools
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="v_dbdr6"
                          >
                            <li data-oid="u8-tknf">PyTorch (Expert)</li>
                            <li data-oid="4sxsgla">TensorFlow (Expert)</li>
                            <li data-oid="-75aiis">Scikit-learn (Expert)</li>
                            <li data-oid="ld4451i">Docker (Advanced)</li>
                            <li data-oid="kkhzf78">AWS/GCP (Advanced)</li>
                          </ul>
                        </div>
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      type="awards"
                      icon={
                        <Award
                          className="h-5 w-5 text-primary"
                          data-oid="l_k0:xr"
                        />
                      }
                      title="Awards & Publications"
                      data-oid="te.-cz0"
                    >
                      <ul
                        className="space-y-2 text-muted-foreground"
                        data-oid="r8aynn6"
                      >
                        <li data-oid="eivagqe">
                          <span
                            className="font-medium text-foreground"
                            data-oid="4ucm_88"
                          >
                            Efficient Voice Cloning with Reduced Computational
                            Resources
                          </span>{" "}
                          - IEEE Transactions on Audio Processing, 2022
                        </li>
                        <li data-oid="_ae_sat">
                          <span
                            className="font-medium text-foreground"
                            data-oid="vkg6aqv"
                          >
                            Community-Centered AI: Bridging Technology and
                            Social Impact
                          </span>{" "}
                          - NeurIPS Workshop on AI for Social Good, 2021
                        </li>
                        <li data-oid="606mbku">
                          <span
                            className="font-medium text-foreground"
                            data-oid="6shpw_2"
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
                          data-oid="527c3vl"
                        />
                      }
                      title="Languages"
                      data-oid="dvmx3b9"
                    >
                      <div
                        className="flex gap-4 text-muted-foreground"
                        data-oid="7-ecxqp"
                      >
                        <span data-oid="8g2n1uq">English (Native)</span>
                        <span data-oid="wbw5qx8">Spanish (Conversational)</span>
                      </div>
                    </ResumeSection>
                  </div>
                </div>

                <div
                  className="border-t p-4 flex justify-between items-center"
                  data-oid="ku0l:tz"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="y:epcix"
                  >
                    Last updated: March 2025
                  </span>
                  <Button
                    onClick={handleDownload}
                    className="gap-2"
                    data-oid="25.hnqy"
                  >
                    <Download className="h-4 w-4" data-oid="n6zc0om" />
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
    <section className="space-y-4" data-oid="puc.38r">
      <div className="flex items-center gap-2" data-oid="vos_v:-">
        {icon}
        <h2 className="text-lg font-semibold" data-oid="piuq9c:">
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
    <div className="space-y-2" data-oid="4_kx-g9">
      <div className="flex justify-between items-start" data-oid="p1ktwj4">
        <div data-oid="v0w6h6w">
          <h3 className="font-medium" data-oid="v55zx0.">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-oid="-3vaf_p">
            {organization}
          </p>
        </div>
        <div
          className="text-sm text-right text-muted-foreground"
          data-oid=":h6o_di"
        >
          <p data-oid=":p6i.a1">{period}</p>
          <p data-oid="qdr45oy">{location}</p>
        </div>
      </div>
      <ul
        className="list-disc list-inside text-sm space-y-1"
        data-oid="owblvcy"
      >
        {description.map((item, index) => (
          <li key={index} data-oid="bi-ep4o">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
