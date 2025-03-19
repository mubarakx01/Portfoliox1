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
    icon: <Code className="h-5 w-5" data-oid="ri5ezh6" />,
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
    icon: <Code className="h-5 w-5" data-oid=".txkjch" />,
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
    <section id="case-studies" className="py-12" data-oid="c29n59f">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="d6ct3px"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid=":059v0e">
          Case Studies
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="15v6-gz"
        >
          Detailed examinations of complex technical challenges and their
          solutions. These case studies showcase problem-solving approaches and
          technical implementation details.
        </p>
      </motion.div>

      <div className="space-y-8" data-oid="mdznaof">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-oid="szfak75"
          >
            <Card
              className={cn(
                "border-none overflow-hidden transition-all duration-500",
                `bg-gradient-to-br ${study.bgColor}`,
                expandedCaseStudy === study.id ? "shadow-xl" : "",
              )}
              data-oid="codmn7c"
            >
              <CardHeader className="pb-2" data-oid="tx7_983">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-oid="rf4nbe-"
                >
                  {study.icon}
                  <CardTitle data-oid="_3v:zo3">{study.title}</CardTitle>
                </div>
                <p className="text-muted-foreground" data-oid="hfct536">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent data-oid="kge1gs8">
                <div
                  className={cn(
                    "grid gap-6 transition-all duration-500",
                    expandedCaseStudy === study.id
                      ? "md:grid-cols-1"
                      : "md:grid-cols-2",
                  )}
                  data-oid="20nm92y"
                >
                  {expandedCaseStudy !== study.id && (
                    <>
                      <div data-oid="cbeutll">
                        <h4
                          className="text-sm font-medium mb-3 flex items-center gap-2"
                          data-oid="8vh365y"
                        >
                          <BarChart className="h-4 w-4" data-oid="dcvp4cn" />
                          Key Metrics
                        </h4>
                        <div
                          className="grid grid-cols-3 gap-2"
                          data-oid="cuj_lm3"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-3 text-center hover:bg-black/30 transition-colors"
                              data-oid="j5uvpzr"
                            >
                              <div
                                className="text-xl font-bold"
                                data-oid=".4gr7lm"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="ngezfy_"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div data-oid="1qay_l1">
                        <div
                          className="flex justify-between items-center mb-3"
                          data-oid="7etag0:"
                        >
                          <h4
                            className="text-sm font-medium flex items-center gap-2"
                            data-oid="100pu2n"
                          >
                            <Clock className="h-4 w-4" data-oid="gx679e1" />
                            Timeline
                          </h4>
                          <div className="flex gap-2" data-oid="ej5t2gr">
                            {study.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                data-oid="3mxu-a5"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2" data-oid="5i:3per">
                          {study.timeline.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center"
                              data-oid="9ljdm3k"
                            >
                              <span data-oid="r4kq73f">{item.phase}</span>
                              <span
                                className="text-xs text-muted-foreground"
                                data-oid="_3nly4_"
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
                      data-oid="i_w1r4h"
                    >
                      <TabsList
                        className="grid grid-cols-3 mb-4"
                        data-oid="xivbj4i"
                      >
                        <TabsTrigger value="overview" data-oid="pvyooz6">
                          Overview
                        </TabsTrigger>
                        <TabsTrigger value="details" data-oid="lwmxyv.">
                          Details
                        </TabsTrigger>
                        <TabsTrigger value="team" data-oid="v4uso4l">
                          Team
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="overview"
                        className="space-y-4"
                        data-oid="71.3p1w"
                      >
                        <p data-oid="47rl7a8">{study.details.overview}</p>

                        <div
                          className="grid md:grid-cols-3 gap-4 mt-6"
                          data-oid="4n9332x"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors"
                              data-oid="q_8ppql"
                            >
                              <div
                                className="text-2xl font-bold"
                                data-oid="vn8rezn"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="apsv840"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-2 mt-4"
                          data-oid="xwgossx"
                        >
                          {study.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="6.7uu3q"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="details"
                        className="space-y-6"
                        data-oid="1x8pyw5"
                      >
                        <div data-oid="1uwgbb0">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="gl.vbt1"
                          >
                            Challenges
                          </h4>
                          <ul className="space-y-2" data-oid="4dbxcoj">
                            {study.details.challenges.map((challenge, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="18lu.o2"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="1xvffic"
                                />

                                <span data-oid="k8un51n">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="mpqoiy_">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="8z4nf.d"
                          >
                            Solutions
                          </h4>
                          <ul className="space-y-2" data-oid="luqkjc-">
                            {study.details.solutions.map((solution, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="q:94spu"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="7:iciab"
                                />

                                <span data-oid="_-4bj-3">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="piau4:k">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="emjwpdf"
                          >
                            Results
                          </h4>
                          <p data-oid="dqma9p4">{study.details.results}</p>
                        </div>

                        <div className="mt-4" data-oid="dor1ie:">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="ek5.1-j"
                          >
                            Timeline
                          </h4>
                          <div className="space-y-0" data-oid="3l6arn0">
                            {study.timeline.map((item, i) => (
                              <div
                                key={i}
                                className="timeline-item"
                                data-oid="cwffsjh"
                              >
                                <div
                                  className="flex justify-between items-center"
                                  data-oid="u81o48f"
                                >
                                  <span
                                    className="font-medium"
                                    data-oid="1qygq5m"
                                  >
                                    {item.phase}
                                  </span>
                                  <span
                                    className="text-sm text-muted-foreground"
                                    data-oid="wrop6x."
                                  >
                                    {item.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="team" data-oid="738q3xz">
                        <div className="text-center py-8" data-oid=".3w:t7u">
                          <p
                            className="text-muted-foreground"
                            data-oid="z5hnkdg"
                          >
                            Team information coming soon.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </div>

                <div className="mt-4 flex justify-end" data-oid="4yyxn8-">
                  <Button
                    variant="link"
                    className="p-0 h-auto gap-1"
                    onClick={() => toggleExpand(study.id)}
                    data-oid="n74bj.f"
                  >
                    {expandedCaseStudy === study.id ? (
                      <>View Less</>
                    ) : (
                      <>
                        Read Full Case Study
                        <ArrowRight className="h-3 w-3" data-oid="ece3r0s" />
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
