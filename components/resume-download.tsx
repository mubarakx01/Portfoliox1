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
            <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-500" />
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
      <div className="flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            onClick={() => setIsPreviewOpen(true)}
            variant="outline"
            className="gap-2"
          >
            <FileText className="h-4 w-4" />
            Preview Resume
          </Button>

          <Button
            onClick={handleDownload}
            className="gap-2 relative overflow-hidden"
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
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
              />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsPreviewOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="w-full max-w-3xl max-h-[80vh] bg-card rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />

                    <h3 className="font-semibold">Resume Preview</h3>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsPreviewOpen(false)}
                    aria-label="Close preview"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="overflow-y-auto p-6 max-h-[calc(80vh-60px)]">
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold">MUBARAK A</h1>
                      <p className="text-muted-foreground">
                        AI Engineer & Community Builder
                      </p>
                      <div className="flex justify-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>mr1398463@gmail.com</span>
                        <span>|</span>
                        <span>(+91)9500255291</span>
                        <span>|</span>
                        <span>India,Chennai</span>
                        <span>|</span>
                        <a
                          href="https://www.linkedin.com/in/mubarak-a-xyz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>

                    <ResumeSection
                      icon={<Briefcase className="h-5 w-5 text-primary" />}
                      title="Professional Experience"
                      type="work"
                    >
                      <div className="space-y-4">
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
                        />
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      icon={<GraduationCap className="h-5 w-5 text-primary" />}
                      title="Education"
                      type="education"
                    >
                      <ResumeItem
                        title="Bachelor of Engineering"
                        organization="City College of Thirvannamalai"
                        period="2015 - 2019"
                        location="India,Chennai"
                        description={["GPA: 3.8", "Honors: Magna Cum Laude"]}
                      />
                    </ResumeSection>

                    <ResumeSection
                      type="skills"
                      icon={<Code className="h-5 w-5 text-primary" />}
                      title="Technical Skills"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">
                            Programming Languages
                          </h4>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>Python (Expert)</li>
                            <li>JavaScript/TypeScript (Expert)</li>
                            <li>C++ (Advanced)</li>
                            <li>R (Intermediate)</li>
                            <li>SQL (Advanced)</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">
                            Frameworks & Tools
                          </h4>
                          <ul className="list-disc list-inside text-muted-foreground">
                            <li>PyTorch (Expert)</li>
                            <li>TensorFlow (Expert)</li>
                            <li>Scikit-learn (Expert)</li>
                            <li>Docker (Advanced)</li>
                            <li>AWS/GCP (Advanced)</li>
                          </ul>
                        </div>
                      </div>
                    </ResumeSection>

                    <ResumeSection
                      type="awards"
                      icon={<Award className="h-5 w-5 text-primary" />}
                      title="Awards & Publications"
                    >
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <span className="font-medium text-foreground">
                            Efficient Voice Cloning with Reduced Computational
                            Resources
                          </span>{" "}
                          - IEEE Transactions on Audio Processing, 2022
                        </li>
                        <li>
                          <span className="font-medium text-foreground">
                            Community-Centered AI: Bridging Technology and
                            Social Impact
                          </span>{" "}
                          - NeurIPS Workshop on AI for Social Good, 2021
                        </li>
                        <li>
                          <span className="font-medium text-foreground">
                            Teacher Excellence Award
                          </span>{" "}
                          - Success Academy, 2020
                        </li>
                      </ul>
                    </ResumeSection>

                    <ResumeSection
                      type="languages"
                      icon={<Languages className="h-5 w-5 text-primary" />}
                      title="Languages"
                    >
                      <div className="flex gap-4 text-muted-foreground">
                        <span>English (Native)</span>
                        <span>Spanish (Conversational)</span>
                      </div>
                    </ResumeSection>
                  </div>
                </div>

                <div className="border-t p-4 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Last updated: March 2025
                  </span>
                  <Button onClick={handleDownload} className="gap-2">
                    <Download className="h-4 w-4" />
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
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        {icon}
        <h2 className="text-lg font-semibold">{title}</h2>
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
    <div className="space-y-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
        <div className="text-sm text-right text-muted-foreground">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="list-disc list-inside text-sm space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
