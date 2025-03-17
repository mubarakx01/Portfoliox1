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
}

const timelineData: TimelineEvent[] = [
  {
    id: "rfc",
    title: "Technical Program Director",
    company: "Rose from Concrete",
    location: "Brooklyn, NY",
    period: "January 2021 - Present",
    description:
      "Leading technical initiatives and community programs across Brooklyn, developing and implementing ML models for assessing program impact and reach.",
    achievements: [
      "Forged strategic partnerships with 40+ community centers across Brooklyn",
      "Developed predictive models with Python and Scikit-learn impacting 20,000+ NYC residents",
      "Led implementation of community-focused programs using AWS Lambda and Docker",
      "Designed decentralized energy solutions and AI-powered monitoring tools",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "AWS",
      "Docker",
      "GCP",
      "Community Development",
    ],
    color: "bg-gradient-to-r from-indigo-600 to-purple-600",
  },
  {
    id: "success-academy",
    title: "Lead AP Physics Teacher",
    company: "Success Academy High School of the Liberal Arts",
    location: "New York, NY",
    period: "July 2019 - 2022",
    description:
      "Led physics education initiatives, applying data analysis to optimize teaching strategies for over 150 students while managing a team of 13 teachers.",
    achievements: [
      "Applied advanced data analysis to optimize lesson plans for 150+ students",
      "Awarded the 'Teacher Excellence Award' for instructional strategies",
      "Led a team of 13 teachers, fostering collaborative learning environment",
    ],

    skills: [
      "Leadership",
      "Data Analysis",
      "Education",
      "Team Management",
      "Curriculum Development",
    ],
    color: "bg-gradient-to-r from-green-600 to-emerald-600",
  },
  {
    id: "research-assistant",
    title: "Research Assistant",
    company: "City College of New York",
    location: "New York, NY",
    period: "2017 - 2019",
    description:
      "Conducted physics research focused on computational modeling of complex systems and data analysis of experimental results.",
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
    <div ref={containerRef} className="w-full py-8" data-oid="m2s1ipj">
      <div className="mb-8" data-oid="3wi2xoq">
        <AnimatePresence mode="wait" data-oid="u.mm_ej">
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
            data-oid="l16m6y."
          >
            <div
              className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=400&width=800')] bg-center bg-cover mix-blend-overlay"
              data-oid="ji1n0sz"
            />
            <div className="relative z-10" data-oid="kd-4.bm">
              <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4"
                data-oid="giftyr7"
              >
                <div data-oid="7hqfdwc">
                  <Badge
                    variant="outline"
                    className="bg-white/10 text-white mb-2"
                    data-oid="lyfod56"
                  >
                    Featured Experience
                  </Badge>
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    data-oid="y66:_64"
                  >
                    {timelineData[activeEventIndex].title}
                  </h3>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-white/80"
                    data-oid="akc241x"
                  >
                    <div className="flex items-center gap-1" data-oid=".yq_z8.">
                      <Building className="h-4 w-4" data-oid="3co8ok9" />
                      <span data-oid="oqvdpij">
                        {timelineData[activeEventIndex].company}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="_teft7p">
                      <MapPin className="h-4 w-4" data-oid="badhdrf" />
                      <span data-oid="_.69ptb">
                        {timelineData[activeEventIndex].location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="tae6uhn">
                      <Calendar className="h-4 w-4" data-oid="83_jvr8" />
                      <span data-oid="u.__gp2">
                        {timelineData[activeEventIndex].period}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2" data-oid="seu3dpd">
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
                      data-oid="4l_8qwn"
                    />
                  ))}
                </div>
              </div>
              <p className="text-white/90 mb-4" data-oid="vfsf4j4">
                {timelineData[activeEventIndex].description}
              </p>
              <div className="flex flex-wrap gap-2" data-oid="i5ge9-p">
                {timelineData[activeEventIndex].skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-white/10 text-white border-white/20"
                    data-oid="u.yxkp7"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-4" data-oid=".-l6-h0">
        {timelineData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
            data-oid="._my-zh"
          >
            <div
              className={cn(
                "timeline-item pl-8 pb-8 relative z-10 transition-all duration-300 cursor-pointer",
                expandedEvent === event.id ? "pb-12" : "",
              )}
              onClick={() => toggleExpand(event.id)}
              data-oid="uq-oxm1"
            >
              <div
                className={cn(
                  "absolute left-0 top-0 w-3 h-3 rounded-full z-20 transition-all duration-300",
                  expandedEvent === event.id ? "scale-125" : "",
                  event.color.replace("bg-gradient-to-r", "bg"),
                )}
                data-oid="pzw9xjf"
              />

              <div
                className="flex flex-col md:flex-row md:items-center justify-between gap-2"
                data-oid="bn1pbhq"
              >
                <div data-oid="c4jjymi">
                  <h3
                    className="text-lg font-semibold flex items-center gap-2"
                    data-oid="anzmcms"
                  >
                    {event.title}
                    <motion.div
                      animate={{ rotate: expandedEvent === event.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      data-oid=":zof3ye"
                    >
                      {expandedEvent === event.id ? (
                        <ChevronDown
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="5kkct.3"
                        />
                      ) : (
                        <ChevronRight
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="ad491yv"
                        />
                      )}
                    </motion.div>
                  </h3>
                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground"
                    data-oid="pptfpi2"
                  >
                    <div className="flex items-center gap-1" data-oid="axi3tyz">
                      <Building className="h-3 w-3" data-oid="pju7uz2" />
                      <span data-oid="3nd-b0l">{event.company}</span>
                    </div>
                    <div className="flex items-center gap-1" data-oid="sz69ris">
                      <Clock className="h-3 w-3" data-oid="5vw2-rs" />
                      <span data-oid="u-m8_-1">{event.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence data-oid="g_p.cbx">
                {expandedEvent === event.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                    data-oid="z68ue9y"
                  >
                    <div className="mt-4 pt-4 border-t" data-oid="yxaaee5">
                      <div className="space-y-4" data-oid="i0-:_ma">
                        <div data-oid="an-u1ru">
                          <h4
                            className="font-medium flex items-center gap-2 mb-2"
                            data-oid="cs0bq04"
                          >
                            <Award
                              className="h-4 w-4 text-primary"
                              data-oid="_p6kxlg"
                            />
                            Key Achievements
                          </h4>
                          <ul
                            className="space-y-1 ml-6 list-disc text-muted-foreground"
                            data-oid="nkm-.rj"
                          >
                            {event.achievements.map((achievement, i) => (
                              <li key={i} data-oid="kbvkci-">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div
                          className="flex flex-wrap gap-2"
                          data-oid="ef9w36."
                        >
                          {event.skills.map((skill, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="va0s13r"
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
