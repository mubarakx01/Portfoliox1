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
              data-oid="q1zrp45"
            >
              <CheckCircle
                className="h-5 w-5 text-green-500"
                data-oid="16lulns"
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
      <div className="flex flex-col items-center" data-oid="a:y4mtf">
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          data-oid="y2j5y0j"
        >
          <Button
            onClick={() => setIsPreviewOpen(true)}
            variant="outline"
            className="gap-2"
            data-oid="mr9p7s8"
          >
            <FileText className="h-4 w-4" data-oid="6:fhjy7" />
            Preview Resume
          </Button>

          <Button
            onClick={handleDownload}
            className="gap-2 relative overflow-hidden"
            disabled={isDownloading}
            data-oid="5_piqop"
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  data-oid="4y6l:88"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    data-oid="v9njtba"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    data-oid="a0mali:"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" data-oid="tucfr4j" />
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
                data-oid="5dchl-t"
              />
            )}
          </Button>
        </div>

        <AnimatePresence data-oid="0pjptrv">
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
              data-oid="vaac0qh"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="w-full max-w-3xl max-h-[80vh] bg-card rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                data-oid="anc9nec"
              >
                <div
                  className="flex items-center justify-between p-4 border-b"
                  data-oid="mrrd0u1"
                >
                  <div className="flex items-center gap-2" data-oid="b063u85">
                    <FileText
                      className="h-5 w-5 text-primary"
                      data-oid="x.g12uc"
                    />

                    <h3 className="font-semibold" data-oid="7a_5on9">
                      Resume Preview
                    </h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close preview"
                    data-oid="kbmd79f"
                  >
                    <X className="h-4 w-4" data-oid="bbmhs_e" />
                  </Button>
                </div>

                <div
                  className="overflow-y-auto p-6 max-h-[calc(80vh-60px)]"
                  data-oid="98ict2o"
                >
                  <div className="space-y-8" data-oid="3:zx9sz">
                    <div className="text-center mb-8" data-oid="jhjq59v">
                      <h1 className="text-2xl font-bold" data-oid="z4vqy7g">
                        MUBARAK A
                      </h1>
                      <p className="text-muted-foreground" data-oid="4s09a3p">
                        AI Engineer & Community Builder
                      </p>
                      <div
                        className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground"
                        data-oid="0qdix9n"
                      >
                        <span data-oid="lb4gr56">mr1398463@gmail.com</span>
                        <span data-oid="i_u:kz7">|</span>
                        <span data-oid="wj06mnx">(+91)9500255291</span>
                        <span data-oid="h6b8z9h">|</span>
                        <span data-oid=":_6:1jd">India,Chennai</span>
                        <span data-oid="w.-n-nh">|</span>
                        <a
                          href="https://www.linkedin.com/in/mubarak-a-xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          data-oid="sl._x:a"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <ResumeSection
                      icon={
                        <Briefcase
                          className="h-5 w-5 text-primary"
                          data-oid="t6tvwz5"
                        />
                      }
                      title="Professional Experience"
                      type="work"
                      data-oid="rb3cjol"
                    >
                      <div className="space-y-4" data-oid=":ciqcpq">
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
                          data-oid="-zvvlc9"
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
                          data-oid="2-yksq4"
                        />
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      icon={
                        <GraduationCap
                          className="h-5 w-5 text-primary"
                          data-oid="d9_-ds0"
                        />
                      }
                      title="Education"
                      type="education"
                      data-oid="ff1d1fm"
                    >
                      <ResumeItem
                        title="Bachelor of Engineering"
                        organization="City College of Thirvannamalai"
                        period="2015 - 2019"
                        location="India,Chennai"
                        description={["GPA: 3.8", "Honors: Magna Cum Laude"]}
                        data-oid="qjif7e5"
                      />
                    </ResumeSection>

                    <ResumeSection
                      type="skills"
                      icon={
                        <Code
                          className="h-5 w-5 text-primary"
                          data-oid="ymo0e03"
                        />
                      }
                      title="Technical Skills"
                      data-oid="511o8zz"
                    >
                      <div
                        className="grid grid-cols-2 gap-4"
                        data-oid=".5_ag51"
                      >
                        <div data-oid="7rrq2q4">
                          <h4 className="font-medium mb-2" data-oid="i30o8gk">
                            Programming Languages
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="dt-cept"
                          >
                            <li data-oid="rxv1jtt">Python (Expert)</li>
                            <li data-oid="wjimic1">
                              JavaScript/TypeScript (Expert)
                            </li>
                            <li data-oid=".so_3k8">C++ (Advanced)</li>
                            <li data-oid=".apj82n">R (Intermediate)</li>
                            <li data-oid="t1ge4_s">SQL (Advanced)</li>
                          </ul>
                        </div>

                        <div data-oid="4l49rnn">
                          <h4 className="font-medium mb-2" data-oid=":4vpfuq">
                            Frameworks & Tools
                          </h4>
                          <ul
                            className="list-disc list-inside text-muted-foreground"
                            data-oid="pqg1dma"
                          >
                            <li data-oid="x4_lyp9">PyTorch (Expert)</li>
                            <li data-oid="i2o29ot">TensorFlow (Expert)</li>
                            <li data-oid="z3y5q1q">Scikit-learn (Expert)</li>
                            <li data-oid="5ll8.wf">Docker (Advanced)</li>
                            <li data-oid="6t:mu2k">AWS/GCP (Advanced)</li>
                          </ul>
                        </div>
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      type="awards"
                      icon={
                        <Award
                          className="h-5 w-5 text-primary"
                          data-oid="b78kkig"
                        />
                      }
                      title="Awards & Publications"
                      data-oid="h.gvlnr"
                    >
                      <ul
                        className="space-y-2 text-muted-foreground"
                        data-oid="ut009jw"
                      >
                        <li data-oid="w3143qt">
                          <span
                            className="font-medium text-foreground"
                            data-oid="ffqy_cg"
                          >
                            Efficient Voice Cloning with Reduced Computational
                            Resources
                          </span>{" "}
                          - IEEE Transactions on Audio Processing, 2022
                        </li>
                        <li data-oid="2hk2wec">
                          <span
                            className="font-medium text-foreground"
                            data-oid="_dft04s"
                          >
                            Community-Centered AI: Bridging Technology and
                            Social Impact
                          </span>{" "}
                          - NeurIPS Workshop on AI for Social Good, 2021
                        </li>
                        <li data-oid="fu4n-du">
                          <span
                            className="font-medium text-foreground"
                            data-oid="l3:fj.b"
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
                          data-oid="pt8o7j5"
                        />
                      }
                      title="Languages"
                      data-oid="6jgextk"
                    >
                      <div
                        className="flex gap-4 text-muted-foreground"
                        data-oid="8rcosql"
                      >
                        <span data-oid="n7fqmq1">English (Native)</span>
                        <span data-oid="apo8l9x">Spanish (Conversational)</span>
                      </div>
                    </ResumeSection>
                  </div>
                </div>

                <div
                  className="border-t p-4 flex justify-between items-center"
                  data-oid="2.:37h8"
                >
                  <span
                    className="text-sm text-muted-foreground"
                    data-oid="4orcoao"
                  >
                    Last updated: March 2025
                  </span>
                  <Button
                    onClick={handleDownload}
                    className="gap-2"
                    data-oid="d0o8c56"
                  >
                    <Download className="h-4 w-4" data-oid="j6xn:nl" />
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
    <section className="space-y-4" data-oid="scp8ylu">
      <div className="flex items-center gap-2" data-oid="m2b9s48">
        {icon}
        <h2 className="text-lg font-semibold" data-oid="b5tkiv9">
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
    <div className="space-y-2" data-oid="vhjw:d-">
      <div className="flex justify-between items-start" data-oid="anspbej">
        <div data-oid="qui1uec">
          <h3 className="font-medium" data-oid="_00uw:2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-oid="nfc20if">
            {organization}
          </p>
        </div>
        <div
          className="text-sm text-right text-muted-foreground"
          data-oid="k9f4mbn"
        >
          <p data-oid="7_fk08d">{period}</p>
          <p data-oid="du4qwj8">{location}</p>
        </div>
      </div>
      <ul
        className="list-disc list-inside text-sm space-y-1"
        data-oid="1sbpw5."
      >
        {description.map((item, index) => (
          <li key={index} data-oid="jch34ld">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
