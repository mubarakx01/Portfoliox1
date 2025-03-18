"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  color: string;
  logo?: string;
  type?: string;
  metrics?: Array<{ value: string; label: string }>;
}

const timelineData: TimelineEvent[] = [
  {
    id: "rfc",
    title: "Web Designer Internship",
    company: "Kshitiksha Foundation",
    location: "remote",
    period: "04/2024",
    description:
      "Contributed to web design projects, creating visually appealing and user-friendly digital solutions to enhance the foundation’s online presence and engagement.",
    achievements: [
      "Designed responsive website layouts optimized for Gen Z audiences, boosting user interaction",
      "Implemented interactive features like scrolling animations and 3D effects using modern design tools",
      "Improved website performance and accessibility, enhancing load times and usability",
      "Worked remotely with a team to deliver designs aligned with the foundation’s mission",
    ],

    skills: [
      "Figma",
      "Webflow",
      "HTML/CSS",
      "JavaScript",
      "Graphic Design (Photoshop, Illustrator)",
      "SEO",
    ],

    color: "bg-gradient-to-r from-indigo-600 to-purple-600",
  },
  {
    id: "success-academy",
    title: "Data Science Internship",
    company: "Shiash Info Solutions Private Limited",
    location: "Tamil Nadu,Chennai",
    period: "11/2023",
    description:
      "Contributed to data science projects, leveraging analytical tools and machine learning to derive insights and support business solutions during a focused internship.",
    achievements: [
      "Analyzed datasets using Python and SQL to provide actionable business insights",
      "Built machine learning models to enhance data-driven decision-making",
      "Collaborated with a team to create data visualizations for stakeholder presentations",
    ],

    skills: [
      "Python",
      "SQL",
      "Machine Learning",
      "Data Analysis",
      "Visualization Tools (e.g., Canva, Figma)",
    ],

    color: "bg-gradient-to-r from-green-600 to-emerald-600",
  },
  {
    id: "research-assistant",
    title: "Electronics And Communications Engineeringt",
    company: "City College of Thirvannamalai",
    location: "India,Chennai",
    period: "2020 - 2023",
    description:
      "Conducted physics research focused on computational modeling of complex systems and data analysis of experimental results.",
    type: "education",
    achievements: [
      "Published research on computational physics models in peer-reviewed journals",
      "Developed custom analysis algorithms for experimental data processing",
      "Presented findings at 3 national physics conferences",
    ],

    skills: [
      "Python",
      "Data Analysis",
      "Research",
      "Scientific Computing",
      "Physics",
    ],

    color: "bg-gradient-to-r from-blue-600 to-cyan-600",
  },
  {
    id: "research-assistant",
    title: "Electronics And Communication Engineering Diploma",
    company: "Dr M G R Polytechnic College, Arani",
    location: "India, Arani, Tamil Nadu",
    period: "2017 - 2019",
    type: "education",
    description:
      "Pursued a diploma in Electronics and Communication Engineering, focusing on foundational skills in circuit design, electronic systems, and communication technologies through practical training and coursework.",
    achievements: [
      "Designed and tested basic electronic circuits for signal processing and amplification",
      "Performed lab experiments to understand communication principles and system troubleshooting",
      "Collaborated with classmates on hands-on projects to build functional electronic devices",
      "Assisted in documenting technical procedures and project outcomes for academic evaluation",
    ],

    skills: [
      "Circuit Design",
      "Electronics Troubleshooting",
      "Programming (C)",
      "Basic Signal Processing",
      "Team Collaboration",
    ],

    metrics: [
      { value: "3", label: "Practical Projects" },
      { value: "4", label: "Core Skills Acquired" },
      { value: "2", label: "Group Assignments" },
    ],

    color: "bg-gradient-to-r from-blue-600 to-cyan-600",
  },
  {
    id: "research-assistant",
    title: "12th Computer Science",
    company: "St Joseph's Boys' Higher Secondary School",
    location: "Tamil Nadu,Chennai",
    period: "2017 - 2019",
    description:
      "Completed 12th-grade education with a focus on Computer Science, gaining foundational knowledge in programming, algorithms, and basic computer applications through theoretical study and practical assignments.",
    achievements: [
      "Developed simple programs and projects using C++ to solve computational problems",
      "Learned and applied fundamental concepts of algorithms and data structures",
      "Participated in school-level tech competitions or exhibitions showcasing coding skills",
    ],

    skills: [
      "Programming (C++)",
      "Basic Algorithms",
      "Problem Solving",
      "Computer Applications",
      "Teamwork",
    ],

    color: "bg-gradient-to-r from-blue-600 to-cyan-600",
  },
];

export default function InteractiveTimeline() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const toggleExpand = (id: string) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  // Auto rotate featured event every 5 seconds
  useEffect(() => {
    if (!expandedEvent) {
      const interval = setInterval(() => {
        setActiveEventIndex((prev) => (prev + 1) % timelineData.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [expandedEvent]);

  return (
    <div ref={containerRef} className="w-full py-8" data-oid="u3f43f6">
      <div className="mb-8" data-oid="tga52u5">
        <AnimatePresence mode="wait" data-oid=".1yo3r.">
          <motion.div
            key={timelineData[activeEventIndex].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "rounded-xl p-6 relative overflow-hidden shadow-lg",
              timelineData[activeEventIndex].color,
            )}
            data-oid="vynk6s5"
          >
            <div
              className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=400&width=800')] bg-center bg-cover mix-blend-overlay"
              data-oid="8h75s-:"
            />

            <div className="relative z-10" data-oid="-nqpzd4">
              <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"
                data-oid="3clhdb1"
              >
                <div data-oid="a-9qwp0">
                  <Badge
                    variant="outline"
                    className="bg-white/10 text-white mb-2"
                    data-oid="d3xffvf"
                  >
                    Featured Experience
                  </Badge>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    data-oid="sz8vws2"
                  >
                    {timelineData[activeEventIndex].title}
                  </h3>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-white/80"
                    data-oid="5w1vagb"
                  >
                    <div className="flex items-center gap-1" data-oid="n8ogxo1">
                      <Building className="h-4 w-4" data-oid="7eto7gh" />
                      <span data-oid="nhvjstu">
                        {timelineData[activeEventIndex].company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="jcmvsjw">
                      <MapPin className="h-4 w-4" data-oid="1ggd:g5" />
                      <span data-oid="4ehf-fs">
                        {timelineData[activeEventIndex].location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid=":zd7-xe">
                      <Calendar className="h-4 w-4" data-oid="6agdvbu" />
                      <span data-oid="i77e9gn">
                        {timelineData[activeEventIndex].period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2" data-oid="3.2._uf">
                  {timelineData.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === activeEventIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/80",
                      )}
                      onClick={() => setActiveEventIndex(index)}
                      title={`Show ${timelineData[index].title}`}
                      data-oid="e0t_-5b"
                    />
                  ))}
                </div>
              </div>
              <p className="text-white/90 mb-4" data-oid="bh5c:h3">
                {timelineData[activeEventIndex].description}
              </p>
              <div className="flex flex-wrap gap-2" data-oid="7x-.ok6">
                {timelineData[activeEventIndex].skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-white/10 text-white border-white/20"
                    data-oid="6ns_52e"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-4" data-oid="3c1vd1d">
        {timelineData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            data-oid="sqp4d53"
          >
            <div
              className={cn(
                "timeline-item pl-8 pb-8 relative z-10 transition-all duration-300 cursor-pointer",
                expandedEvent === event.id ? "pb-12" : "",
              )}
              onClick={() => toggleExpand(event.id)}
              data-oid="9.x_y3h"
            >
              <div
                className={cn(
                  "absolute left-0 top-0 w-3 h-3 rounded-full z-20 transition-all duration-300",
                  expandedEvent === event.id ? "scale-125" : "",
                  event.color.replace("bg-gradient-to-r", "bg"),
                )}
                data-oid="_3jj..0"
              />

              <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-2"
                data-oid="y9dermd"
              >
                <div data-oid="br.b:ng">
                  <h3
                    className="text-lg font-semibold flex items-center gap-2"
                    data-oid="s:j5__f"
                  >
                    {event.title}
                    <motion.div
                      animate={{ rotate: expandedEvent === event.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      data-oid="3383_91"
                    >
                      {expandedEvent === event.id ? (
                        <ChevronDown
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="qr5o.86"
                        />
                      ) : (
                        <ChevronRight
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="6wr6zb."
                        />
                      )}
                    </motion.div>
                  </h3>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground"
                    data-oid="y82:qac"
                  >
                    <div className="flex items-center gap-1" data-oid="oga1o5v">
                      <Building className="h-3 w-3" data-oid="q-1mri6" />
                      <span data-oid=":00mo6t">{event.company}</span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="wy80qg8">
                      <Clock className="h-3 w-3" data-oid="m8zo2ng" />
                      <span data-oid="_61h2pg">{event.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence data-oid="k.w5syw">
                {expandedEvent === event.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    data-oid="zcejz4a"
                  >
                    <div className="mt-4 pt-4 border-t" data-oid="j3:7lnr">
                      <div className="space-y-4" data-oid="s7f3i2n">
                        <div data-oid="p.9i65z">
                          <h4
                            className="font-medium flex items-center gap-2 mb-2"
                            data-oid="t8gdi4o"
                          >
                            <Award
                              className="h-4 w-4 text-primary"
                              data-oid="h-tg7jh"
                            />
                            Key Achievements
                          </h4>
                          <ul
                            className="space-y-1 ml-6 list-disc text-muted-foreground"
                            data-oid="mxsvevn"
                          >
                            {event.achievements.map((achievement, i) => (
                              <li key={i} data-oid="-056oxq">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="zuqnoyu"
                        >
                          {event.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="i:btz0k"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
