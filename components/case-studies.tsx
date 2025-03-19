"use client";

import { useState } from "react";
import { ArrowRight, Code, ChevronRight, BarChart, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "Optimizing Voice Cloning for Real-Time Applications",
    icon: <Code className="h-5 w-5" data-oid="po.ss-5" />,
    description:
      "An in-depth look at the challenges and solutions in developing a real-time voice cloning system.",
    metrics: [
      { value: "75%", label: "Performance Improvement" },
      { value: "60%", label: "Model Size Reduction" },
      { value: "80ms", label: "Latency Decrease" },
    ],

    timeline: [
      { phase: "Research", duration: "2 months" },
      { phase: "Development", duration: "4 months" },
      { phase: "Optimization", duration: "2 months" },
    ],

    technologies: ["PyTorch", "CUDA", "TensorRT"],
    bgColor: "from-blue-900/50 to-purple-900/50",
    details: {
      overview:
        "This case study explores the optimization techniques used to make voice cloning technology viable for real-time applications. By reducing model size and improving inference speed, we were able to achieve near-instantaneous voice cloning with minimal quality loss.",
      challenges: [
        "Large model size (>500MB) made deployment difficult",
        "High inference latency (>300ms) prevented real-time use",
        "Quality degradation when applying standard optimization techniques",
      ],

      solutions: [
        "Applied knowledge distillation to create smaller student models",
        "Implemented TensorRT for optimized inference",
        "Developed custom quantization scheme to preserve voice quality",
      ],

      results:
        "The optimized system achieved a 75% improvement in performance while reducing the model size by 60%. The latency decreased from 300ms to 80ms, making real-time voice cloning possible for the first time.",
    },
  },
  {
    id: 2,
    title: "Scaling Machine Learning Infrastructure",
    icon: <Code className="h-5 w-5" data-oid="6zxasss" />,
    description:
      "How we designed and implemented a scalable ML infrastructure to support thousands of models in production.",
    metrics: [
      { value: "10x", label: "Deployment Speed" },
      { value: "40%", label: "Cost Reduction" },
      { value: "5000/day", label: "Model Throughput" },
    ],

    timeline: [
      { phase: "Planning", duration: "1 month" },
      { phase: "Implementation", duration: "3 months" },
      { phase: "Testing", duration: "2 months" },
    ],

    technologies: ["Kubernetes", "MLflow", "Apache Airflow"],
    bgColor: "from-green-900/50 to-teal-900/50",
    details: {
      overview:
        "This case study details the architecture and implementation of a scalable machine learning infrastructure capable of supporting thousands of models in production. The system was designed to handle high throughput while maintaining cost efficiency.",
      challenges: [
        "Slow deployment process taking days to move models to production",
        "High infrastructure costs due to inefficient resource utilization",
        "Limited throughput capacity preventing scaling to meet demand",
      ],

      solutions: [
        "Implemented Kubernetes for container orchestration and auto-scaling",
        "Developed MLflow integration for model versioning and tracking",
        "Created Apache Airflow pipelines for automated deployment workflows",
      ],

      results:
        "The new infrastructure increased deployment speed by 10x, reduced costs by 40%, and enabled a throughput of 5000 model predictions per day. The system now supports over 100 different models in production with minimal operational overhead.",
    },
  },
];

export default function CaseStudies() {
  const [expandedCaseStudy, setExpandedCaseStudy] = useState<number | null>(
    null,
  );

  const toggleExpand = (id: number) => {
    setExpandedCaseStudy(expandedCaseStudy === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-12" data-oid="o1zn49m">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="b5qd6o0"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="1xd3p9m">
          Case Studies
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="_1xo0i6"
        >
          Detailed examinations of complex technical challenges and their
          solutions. These case studies showcase problem-solving approaches and
          technical implementation details.
        </p>
      </motion.div>

      <div className="space-y-8" data-oid="836p8:6">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-oid="lk8jfr_"
          >
            <Card
              className={cn(
                "border-none overflow-hidden transition-all duration-500",
                `bg-gradient-to-br ${study.bgColor}`,
                expandedCaseStudy === study.id ? "shadow-xl" : "",
              )}
              data-oid="wd5mxuy"
            >
              <CardHeader className="pb-2" data-oid="flltiuq">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-oid="lvorqy4"
                >
                  {study.icon}
                  <CardTitle data-oid="k7o5p4k">{study.title}</CardTitle>
                </div>
                <p className="text-muted-foreground" data-oid="xco3o7g">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent data-oid="9ox_g_f">
                <div
                  className={cn(
                    "grid gap-6 transition-all duration-500",
                    expandedCaseStudy === study.id
                      ? "md:grid-cols-1"
                      : "md:grid-cols-2",
                  )}
                  data-oid="4a.oznm"
                >
                  {expandedCaseStudy !== study.id && (
                    <>
                      <div data-oid="okj9ybs">
                        <h4
                          className="text-sm font-medium mb-3 flex items-center gap-2"
                          data-oid="7-qn83s"
                        >
                          <BarChart className="h-4 w-4" data-oid="fraw68p" />
                          Key Metrics
                        </h4>
                        <div
                          className="grid grid-cols-3 gap-2"
                          data-oid="bp64kaw"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-3 text-center hover:bg-black/30 transition-colors"
                              data-oid="5uo6x0:"
                            >
                              <div
                                className="text-xl font-bold"
                                data-oid="03nblr9"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="2fu1gz:"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div data-oid="giow-pj">
                        <div
                          className="flex justify-between items-center mb-3"
                          data-oid="y-5:j8h"
                        >
                          <h4
                            className="text-sm font-medium flex items-center gap-2"
                            data-oid="bqsk-6v"
                          >
                            <Clock className="h-4 w-4" data-oid="rs6uwzc" />
                            Timeline
                          </h4>
                          <div className="flex gap-2" data-oid="oagcxz8">
                            {study.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                data-oid=".0zwn4v"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2" data-oid="ndnals.">
                          {study.timeline.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center"
                              data-oid="2ac-8u2"
                            >
                              <span data-oid="xn6m9tp">{item.phase}</span>
                              <span
                                className="text-xs text-muted-foreground"
                                data-oid="ox3zb-d"
                              >
                                {item.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {expandedCaseStudy === study.id && (
                    <Tabs
                      defaultValue="overview"
                      className="w-full"
                      data-oid="a8628.:"
                    >
                      <TabsList
                        className="grid grid-cols-3 mb-4"
                        data-oid="pnps8dj"
                      >
                        <TabsTrigger value="overview" data-oid="r4w.mzi">
                          Overview
                        </TabsTrigger>
                        <TabsTrigger value="details" data-oid="zeezk0w">
                          Details
                        </TabsTrigger>
                        <TabsTrigger value="team" data-oid="hl0ocun">
                          Team
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="overview"
                        className="space-y-4"
                        data-oid="t7u0tz1"
                      >
                        <p data-oid="su3u32a">{study.details.overview}</p>

                        <div
                          className="grid md:grid-cols-3 gap-4 mt-6"
                          data-oid="1_1c3hl"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors"
                              data-oid="37ijk4s"
                            >
                              <div
                                className="text-2xl font-bold"
                                data-oid=":krv9ep"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="n42g3i:"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-2 mt-4"
                          data-oid="j0sodh_"
                        >
                          {study.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="4hd_pop"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="details"
                        className="space-y-6"
                        data-oid="08ftlco"
                      >
                        <div data-oid="x:gc.er">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="ljzboyo"
                          >
                            Challenges
                          </h4>
                          <ul className="space-y-2" data-oid="r6s:q2d">
                            {study.details.challenges.map((challenge, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="i4kmu1t"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="m8_8ojr"
                                />

                                <span data-oid="20ue7w2">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="1-j8f7l">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="3vpmspb"
                          >
                            Solutions
                          </h4>
                          <ul className="space-y-2" data-oid="jr52pbm">
                            {study.details.solutions.map((solution, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="bor:o4f"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="tuk3_dr"
                                />

                                <span data-oid="c87swi6">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="k62i9db">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="2a:c1gs"
                          >
                            Results
                          </h4>
                          <p data-oid="5x3j245">{study.details.results}</p>
                        </div>

                        <div className="mt-4" data-oid="m172e6n">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="irlmtw4"
                          >
                            Timeline
                          </h4>
                          <div className="space-y-0" data-oid="qzd39_z">
                            {study.timeline.map((item, i) => (
                              <div
                                key={i}
                                className="timeline-item"
                                data-oid="d3d5an_"
                              >
                                <div
                                  className="flex justify-between items-center"
                                  data-oid="77llb4h"
                                >
                                  <span
                                    className="font-medium"
                                    data-oid="ze8y-pf"
                                  >
                                    {item.phase}
                                  </span>
                                  <span
                                    className="text-sm text-muted-foreground"
                                    data-oid="gp4iwa3"
                                  >
                                    {item.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="team" data-oid="lm8vw_s">
                        <div className="text-center py-8" data-oid="9xs6xq7">
                          <p
                            className="text-muted-foreground"
                            data-oid="71zsob7"
                          >
                            Team information coming soon.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </div>

                <div className="mt-4 flex justify-end" data-oid=".cp...q">
                  <Button
                    variant="link"
                    className="p-0 h-auto gap-1"
                    onClick={() => toggleExpand(study.id)}
                    data-oid="yj8.hqo"
                  >
                    {expandedCaseStudy === study.id ? (
                      <>View Less</>
                    ) : (
                      <>
                        Read Full Case Study
                        <ArrowRight className="h-3 w-3" data-oid="54bjg31" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
