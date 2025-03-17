"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/ui/section-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ErrorBoundary } from "@/components/error-boundary";
import {
  Calendar,
  MapPin,
  Building,
  ChevronRight,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Users,
  Target,
} from "lucide-react";

// Experience data
const experiences = [
  {
    id: "rfc",
    title: "Technical Program Director",
    company: "Rose from Concrete",
    location: "Brooklyn, NY",
    period: "January 2021 - Present",
    type: "work",
    description:
      "Leading technical initiatives and community programs across Brooklyn, developing and implementing ML models for assessing program impact and reach.",
    responsibilities: [
      "Led multi-functional teams to develop AI-powered community tools, such as predictive models for social welfare programs benefiting over 20,000 NYC residents",
      "Architected a decentralized energy solution leveraging AWS Lambda, Docker, and cloud computing to enhance sustainability in underserved communities",
      "Created and deployed real-time monitoring tools to track the impact of community projects, providing data-driven insights for resource allocation",
      "Forged strategic partnerships with 40+ community centers across Brooklyn, deploying ML models to assess and optimize program reach",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "AWS",
      "Docker",
      "GCP",
      "Community Development",
    ],
    metrics: [
      { value: "40+", label: "Community Centers" },
      { value: "20,000+", label: "Residents impacted" },
      { value: "15", label: "Team Size" },
    ],

    color: "from-indigo-600 to-purple-600",
  },
  {
    id: "success-academy",
    title: "Lead AP Physics Teacher",
    company: "Success Academy High School of the Liberal Arts",
    location: "New York, NY",
    period: "July 2019 - 2022",
    type: "work",
    description:
      "Led physics education initiatives, applying data analysis to optimize teaching strategies for over 150 students while managing a team of 13 teachers.",
    responsibilities: [
      "Applied advanced data analysis and statistical techniques in Python, optimizing lesson plans for 150+ students",
      "Awarded the 'Teacher Excellence Award' for exceptional instructional strategies",
      "Led a team of 13 teachers, fostering a collaborative academic environment",
      "Developed innovative curriculum materials that improved student engagement and performance metrics",
    ],

    skills: [
      "Leadership",
      "Data Analysis",
      "Education",
      "Team Management",
      "Curriculum Development",
    ],
    metrics: [
      { value: "150+", label: "Students" },
      { value: "13", label: "Team Size" },
      { value: "95%", label: "Pass Rate" },
    ],

    color: "from-green-600 to-emerald-600",
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    company: "City College of New York",
    location: "New York, NY",
    period: "2017 - 2019",
    type: "education",
    description:
      "Conducted physics research focused on computational modeling of complex systems and data analysis of experimental results.",
    responsibilities: [
      "Published research on computational physics models in peer-reviewed journals",
      "Developed custom analysis algorithms for experimental data processing",
      "Presented findings at 3 national physics conferences",
      "Collaborated with interdisciplinary teams on cutting-edge research projects",
    ],

    skills: [
      "Python",
      "Data Analysis",
      "Research",
      "Scientific Computing",
      "Physics",
    ],
    metrics: [
      { value: "3", label: "Publications" },
      { value: "5", label: "Conferences" },
      { value: "2", label: "Research Grants" },
    ],

    color: "from-blue-600 to-cyan-600",
  },
];

export default function RedesignedExperience() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>(
    null,
  );
  const [experienceType, setExperienceType] = useState<
    "all" | "work" | "education"
  >("all");

  const toggleExpand = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  // Filter experiences based on type
  const filteredExperiences =
    experienceType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === experienceType);

  return (
    <SectionContainer
      id="experience"
      className="bg-gradient-to-b from-background/95 to-background"
      data-oid="ohlwmlm"
    >
      <SectionHeader
        title="Professional Journey"
        subtitle="My professional experiences and career highlights in AI development, education, and community building."
        data-oid="jgic5l8"
      />

      <ScrollReveal data-oid="jpmvtvw">
        <Tabs
          defaultValue="all"
          onValueChange={(value) =>
            setExperienceType(value as "all" | "work" | "education")
          }
          className="w-full"
          data-oid="ic8wjrm"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar" data-oid="6c0mikp">
            <TabsList
              className="flex justify-center gap-2 mb-8 bg-transparent w-fit mx-auto"
              data-oid="36bhmme"
            >
              <TabsTrigger
                value="all"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80",
                )}
                data-oid="wc00ski"
              >
                <div className="flex items-center gap-2" data-oid="9h_8fey">
                  <span data-oid="6n64oxd">All Experience</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="work"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "work"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80",
                )}
                data-oid="_2qf9wb"
              >
                <div className="flex items-center gap-2" data-oid="1v63qii">
                  <Briefcase className="h-4 w-4" data-oid="pe5.0nm" />
                  <span data-oid="-a:f1rq">Work Experience</span>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="education"
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all data-[state=active]:shadow-lg",
                  experienceType === "education"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80",
                )}
                data-oid="kvqoxkj"
              >
                <div className="flex items-center gap-2" data-oid="61x6-is">
                  <GraduationCap className="h-4 w-4" data-oid="pnpi_yj" />
                  <span data-oid="jh:swpf">Education</span>
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="space-y-6" data-oid="3ggp.97">
            {filteredExperiences.map((experience, index) => (
              <ErrorBoundary key={experience.id} data-oid="9ji92o7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-oid="gw5d06h"
                >
                  <Card
                    className={cn(
                      "overflow-hidden border-none shadow-lg",
                      `bg-gradient-to-br ${experience.color}/10`,
                    )}
                    data-oid="42poukd"
                  >
                    <CardContent className="p-0" data-oid="i:xtxl4">
                      <div
                        className={cn(
                          "p-4 sm:p-6 cursor-pointer transition-all duration-300",
                          expandedExperience === experience.id ? "pb-3" : "",
                        )}
                        onClick={() => toggleExpand(experience.id)}
                        data-oid="42wdd-8"
                      >
                        <div
                          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"
                          data-oid="drmsnuk"
                        >
                          <div data-oid=":8z4ja0">
                            <Badge
                              className={cn(
                                "mb-2 px-3 py-1",
                                experience.type === "work"
                                  ? "bg-blue-500/20 text-blue-500 border-blue-500/30"
                                  : "bg-amber-500/20 text-amber-500 border-amber-500/30",
                              )}
                              data-oid="u:b2z1d"
                            >
                              {experience.type === "work" ? (
                                <Briefcase
                                  className="h-3 w-3 mr-1"
                                  data-oid="dabr1r."
                                />
                              ) : (
                                <GraduationCap
                                  className="h-3 w-3 mr-1"
                                  data-oid="7blsr.8"
                                />
                              )}
                              {experience.type === "work"
                                ? "Work Experience"
                                : "Education"}
                            </Badge>
                            <h3
                              className="text-xl font-semibold flex items-center gap-2"
                              data-oid="0-zxomp"
                            >
                              {experience.title}
                              <motion.div
                                animate={{
                                  rotate:
                                    expandedExperience === experience.id
                                      ? 180
                                      : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                data-oid="79kbtjk"
                              >
                                {expandedExperience === experience.id ? (
                                  <ChevronDown
                                    className="h-4 w-4 text-muted-foreground"
                                    data-oid="sd4w:ya"
                                  />
                                ) : (
                                  <ChevronRight
                                    className="h-4 w-4 text-muted-foreground"
                                    data-oid="c5jpka."
                                  />
                                )}
                              </motion.div>
                            </h3>
                            <div
                              className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-muted-foreground"
                              data-oid="xr70c_a"
                            >
                              <div
                                className="flex items-center gap-1"
                                data-oid="d9f1-gv"
                              >
                                <Building
                                  className="h-4 w-4"
                                  data-oid="c:tuvw2"
                                />
                                <span data-oid="uvuurr0">
                                  {experience.company}
                                </span>
                              </div>
                              <div
                                className="flex items-center gap-1"
                                data-oid="2gc0ghw"
                              >
                                <MapPin
                                  className="h-4 w-4"
                                  data-oid="_4l3i1t"
                                />
                                <span data-oid="6qchkfu">
                                  {experience.location}
                                </span>
                              </div>
                              <div
                                className="flex items-center gap-1"
                                data-oid="19g9nf3"
                              >
                                <Calendar
                                  className="h-4 w-4"
                                  data-oid="33gp7r."
                                />
                                <span data-oid="wpx0q77">
                                  {experience.period}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground" data-oid="w-vd0m5">
                          {experience.description}
                        </p>
                      </div>

                      <AnimatePresence data-oid="cftd0c5">
                        {expandedExperience === experience.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                            data-oid="xzy5ewx"
                          >
                            <div
                              className="px-4 sm:px-6 pb-6"
                              data-oid="iei-ron"
                            >
                              <div
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t"
                                data-oid="2mi::1."
                              >
                                <div data-oid="2a2j_er">
                                  <h4
                                    className="text-lg font-semibold mb-4 flex items-center gap-2"
                                    data-oid="msdp3kc"
                                  >
                                    <Award
                                      className="h-5 w-5 text-primary"
                                      data-oid="392omgi"
                                    />
                                    Key Responsibilities
                                  </h4>
                                  <ul className="space-y-2" data-oid="do8ze-j">
                                    {experience.responsibilities.map(
                                      (responsibility, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2"
                                          data-oid="ewu96wn"
                                        >
                                          <div
                                            className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                                            data-oid="qfyd7c6"
                                          >
                                            <span
                                              className="text-xs text-primary"
                                              data-oid="x17082k"
                                            >
                                              ✓
                                            </span>
                                          </div>
                                          <span
                                            className="text-sm sm:text-base"
                                            data-oid="n_e3y9f"
                                          >
                                            {responsibility}
                                          </span>
                                        </li>
                                      ),
                                    )}
                                  </ul>

                                  <div className="mt-6" data-oid="zlqm0xa">
                                    <h4
                                      className="text-lg font-semibold mb-4 flex items-center gap-2"
                                      data-oid="oog3wpc"
                                    >
                                      <Users
                                        className="h-5 w-5 text-primary"
                                        data-oid="yxc-fgm"
                                      />
                                      Skills Applied
                                    </h4>
                                    <div
                                      className="flex flex-wrap gap-2"
                                      data-oid="ld.-xz:"
                                    >
                                      {experience.skills.map((skill, i) => (
                                        <Badge
                                          key={i}
                                          variant="secondary"
                                          data-oid="en6ruku"
                                        >
                                          {skill}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div data-oid="byasuuj">
                                  <h4
                                    className="text-lg font-semibold mb-4 flex items-center gap-2"
                                    data-oid="t_fr541"
                                  >
                                    <Target
                                      className="h-5 w-5 text-primary"
                                      data-oid="x1pvcl1"
                                    />
                                    Key Metrics & Achievements
                                  </h4>

                                  <div
                                    className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6"
                                    data-oid="35tl-_e"
                                  >
                                    {experience.metrics.map((metric, i) => (
                                      <div
                                        key={i}
                                        className="bg-primary/10 rounded-lg p-3 text-center"
                                        data-oid="riqa0li"
                                      >
                                        <div
                                          className="text-xl sm:text-2xl font-bold"
                                          data-oid="_:fknru"
                                        >
                                          {metric.value}
                                        </div>
                                        <div
                                          className="text-xs sm:text-sm text-muted-foreground"
                                          data-oid="nr2_69-"
                                        >
                                          {metric.label}
                                        </div>
                                      </div>
                                    ))}
                                  </div>

                                  {experience.type === "work" && (
                                    <div className="mt-4" data-oid="r853yxz">
                                      <Button
                                        variant="outline"
                                        className="w-full"
                                        data-oid="ahn-thz"
                                      >
                                        View Reference Letter
                                      </Button>
                                    </div>
                                  )}

                                  {experience.type === "education" && (
                                    <div className="mt-4" data-oid="xn:muuo">
                                      <Button
                                        variant="outline"
                                        className="w-full"
                                        data-oid="xd1y--:"
                                      >
                                        View Transcript
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </ErrorBoundary>
            ))}
          </div>
        </Tabs>
      </ScrollReveal>
    </SectionContainer>
  );
}
