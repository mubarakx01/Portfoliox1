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
    icon: <Code className="h-5 w-5" data-oid="ode611x" />,
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
    icon: <Code className="h-5 w-5" data-oid="tl8gpai" />,
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
    <section id="case-studies" className="py-12" data-oid="su5yf2z">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="5__0at:"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="q4g340t">
          Case Studies
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="qxy3wox"
        >
          Detailed examinations of complex technical challenges and their
          solutions. These case studies showcase problem-solving approaches and
          technical implementation details.
        </p>
      </motion.div>

      <div className="space-y-8" data-oid="8r:dx3j">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-oid="w9zk:ya"
          >
            <Card
              className={cn(
                "border-none overflow-hidden transition-all duration-500",
                `bg-gradient-to-br ${study.bgColor}`,
                expandedCaseStudy === study.id ? "shadow-xl" : "",
              )}
              data-oid="v-duvzr"
            >
              <CardHeader className="pb-2" data-oid="eo2_l08">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-oid="8omdt24"
                >
                  {study.icon}
                  <CardTitle data-oid="l214e_u">{study.title}</CardTitle>
                </div>
                <p className="text-muted-foreground" data-oid="2lyka_x">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent data-oid="i7ksyx_">
                <div
                  className={cn(
                    "grid gap-6 transition-all duration-500",
                    expandedCaseStudy === study.id
                      ? "md:grid-cols-1"
                      : "md:grid-cols-2",
                  )}
                  data-oid="8tvx3ku"
                >
                  {expandedCaseStudy !== study.id && (
                    <>
                      <div data-oid="er48flt">
                        <h4
                          className="text-sm font-medium mb-3 flex items-center gap-2"
                          data-oid="1u6dwwi"
                        >
                          <BarChart className="h-4 w-4" data-oid="ys8_6k3" />
                          Key Metrics
                        </h4>
                        <div
                          className="grid grid-cols-3 gap-2"
                          data-oid="ieiec-f"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-3 text-center hover:bg-black/30 transition-colors"
                              data-oid="0c_bitn"
                            >
                              <div
                                className="text-xl font-bold"
                                data-oid="hz.gsak"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="j__enms"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div data-oid="8g4uyqw">
                        <div
                          className="flex justify-between items-center mb-3"
                          data-oid="_cxpwa9"
                        >
                          <h4
                            className="text-sm font-medium flex items-center gap-2"
                            data-oid="2all.5s"
                          >
                            <Clock className="h-4 w-4" data-oid="j-u.1tl" />
                            Timeline
                          </h4>
                          <div className="flex gap-2" data-oid="ezke_e_">
                            {study.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                data-oid="4pqch7r"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2" data-oid="kz-kv2d">
                          {study.timeline.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center"
                              data-oid="iir3dac"
                            >
                              <span data-oid="ny7j-ip">{item.phase}</span>
                              <span
                                className="text-xs text-muted-foreground"
                                data-oid=":7wm8hk"
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
                      data-oid="9nn.pho"
                    >
                      <TabsList
                        className="grid grid-cols-3 mb-4"
                        data-oid="gjym_sc"
                      >
                        <TabsTrigger value="overview" data-oid="_ujae:b">
                          Overview
                        </TabsTrigger>
                        <TabsTrigger value="details" data-oid="1:455gs">
                          Details
                        </TabsTrigger>
                        <TabsTrigger value="team" data-oid="o-76pgl">
                          Team
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="overview"
                        className="space-y-4"
                        data-oid="91qlbby"
                      >
                        <p data-oid="v8mz0f1">{study.details.overview}</p>

                        <div
                          className="grid md:grid-cols-3 gap-4 mt-6"
                          data-oid="8m0in4l"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors"
                              data-oid="s_z_m_d"
                            >
                              <div
                                className="text-2xl font-bold"
                                data-oid="n37:38-"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="0r25e:v"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-2 mt-4"
                          data-oid="m9y66y0"
                        >
                          {study.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="prs7i.w"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="details"
                        className="space-y-6"
                        data-oid="ondg0xg"
                      >
                        <div data-oid="v5jli:t">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="4en_fmp"
                          >
                            Challenges
                          </h4>
                          <ul className="space-y-2" data-oid="r4ifowp">
                            {study.details.challenges.map((challenge, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="n4z5r1b"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="u44k4d7"
                                />

                                <span data-oid="3i-hc6f">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="h2i7pwy">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="nnuhfgf"
                          >
                            Solutions
                          </h4>
                          <ul className="space-y-2" data-oid="gp84cot">
                            {study.details.solutions.map((solution, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="64lby_1"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="j6w44ym"
                                />

                                <span data-oid="27cz4y4">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="r6v0:25">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="urn16kd"
                          >
                            Results
                          </h4>
                          <p data-oid="t6ne8c9">{study.details.results}</p>
                        </div>

                        <div className="mt-4" data-oid="8jxj2p1">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="izre5:r"
                          >
                            Timeline
                          </h4>
                          <div className="space-y-0" data-oid="3thdkgh">
                            {study.timeline.map((item, i) => (
                              <div
                                key={i}
                                className="timeline-item"
                                data-oid="cwpf3iw"
                              >
                                <div
                                  className="flex justify-between items-center"
                                  data-oid="z7zsfco"
                                >
                                  <span
                                    className="font-medium"
                                    data-oid="9py6eub"
                                  >
                                    {item.phase}
                                  </span>
                                  <span
                                    className="text-sm text-muted-foreground"
                                    data-oid="v7hybgs"
                                  >
                                    {item.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="team" data-oid="yv5wmoi">
                        <div className="text-center py-8" data-oid="zxxy3uf">
                          <p
                            className="text-muted-foreground"
                            data-oid="m2djf91"
                          >
                            Team information coming soon.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </div>

                <div className="mt-4 flex justify-end" data-oid="elsti9m">
                  <Button
                    variant="link"
                    className="p-0 h-auto gap-1"
                    onClick={() => toggleExpand(study.id)}
                    data-oid="m8i.ogl"
                  >
                    {expandedCaseStudy === study.id ? (
                      <>View Less</>
                    ) : (
                      <>
                        Read Full Case Study
                        <ArrowRight className="h-3 w-3" data-oid="xr7l4:5" />
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
