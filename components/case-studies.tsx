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
    icon: <Code className="h-5 w-5" data-oid="bvq.km3" />,
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
    icon: <Code className="h-5 w-5" data-oid="uvk:_qw" />,
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
    <section id="case-studies" className="py-12" data-oid="hr8rea8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="m05mjo2"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="dl9xi-g">
          Case Studies
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="lr6sdsn"
        >
          Detailed examinations of complex technical challenges and their
          solutions. These case studies showcase problem-solving approaches and
          technical implementation details.
        </p>
      </motion.div>

      <div className="space-y-8" data-oid="3gii6_k">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            data-oid="o25oy-9"
          >
            <Card
              className={cn(
                "border-none overflow-hidden transition-all duration-500",
                `bg-gradient-to-br ${study.bgColor}`,
                expandedCaseStudy === study.id ? "shadow-xl" : "",
              )}
              data-oid=":6o.zx-"
            >
              <CardHeader className="pb-2" data-oid="v_a2xws">
                <div
                  className="flex items-center gap-2 mb-2"
                  data-oid="eu1gm4z"
                >
                  {study.icon}
                  <CardTitle data-oid="jkz4ox7">{study.title}</CardTitle>
                </div>
                <p className="text-muted-foreground" data-oid="7qc.mzu">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent data-oid="b_.a_7u">
                <div
                  className={cn(
                    "grid gap-6 transition-all duration-500",
                    expandedCaseStudy === study.id
                      ? "md:grid-cols-1"
                      : "md:grid-cols-2",
                  )}
                  data-oid="ow4bq_j"
                >
                  {expandedCaseStudy !== study.id && (
                    <>
                      <div data-oid="z6vvxgp">
                        <h4
                          className="text-sm font-medium mb-3 flex items-center gap-2"
                          data-oid="7gi.ptm"
                        >
                          <BarChart className="h-4 w-4" data-oid="jp5qysc" />
                          Key Metrics
                        </h4>
                        <div
                          className="grid grid-cols-3 gap-2"
                          data-oid="g-grd.l"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-3 text-center hover:bg-black/30 transition-colors"
                              data-oid="8vm2d7b"
                            >
                              <div
                                className="text-xl font-bold"
                                data-oid="1-p5ijs"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-xs text-muted-foreground"
                                data-oid="-wx1j1d"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div data-oid="3wtms6q">
                        <div
                          className="flex justify-between items-center mb-3"
                          data-oid="57h_txc"
                        >
                          <h4
                            className="text-sm font-medium flex items-center gap-2"
                            data-oid="vte_j83"
                          >
                            <Clock className="h-4 w-4" data-oid="pntbiwn" />
                            Timeline
                          </h4>
                          <div className="flex gap-2" data-oid="54enk1p">
                            {study.technologies.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                data-oid="2udca11"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2" data-oid="pok7oyv">
                          {study.timeline.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-center"
                              data-oid="daaso:7"
                            >
                              <span data-oid="nl5nxa6">{item.phase}</span>
                              <span
                                className="text-xs text-muted-foreground"
                                data-oid="hzymbu1"
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
                      data-oid="q8qxc4l"
                    >
                      <TabsList
                        className="grid grid-cols-3 mb-4"
                        data-oid="rambsl9"
                      >
                        <TabsTrigger value="overview" data-oid="2i:wfmh">
                          Overview
                        </TabsTrigger>
                        <TabsTrigger value="details" data-oid=".l:5-4k">
                          Details
                        </TabsTrigger>
                        <TabsTrigger value="team" data-oid="gg5n0x7">
                          Team
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="overview"
                        className="space-y-4"
                        data-oid="1vzk6vo"
                      >
                        <p data-oid="s:0079y">{study.details.overview}</p>

                        <div
                          className="grid md:grid-cols-3 gap-4 mt-6"
                          data-oid="qz-wewd"
                        >
                          {study.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="bg-black/20 rounded-lg p-4 text-center hover:bg-black/30 transition-colors"
                              data-oid="c5452cd"
                            >
                              <div
                                className="text-2xl font-bold"
                                data-oid="w4m9drc"
                              >
                                {metric.value}
                              </div>
                              <div
                                className="text-sm text-muted-foreground"
                                data-oid="19g_81m"
                              >
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-2 mt-4"
                          data-oid="dv62f5g"
                        >
                          {study.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              data-oid="6yr1gql"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="details"
                        className="space-y-6"
                        data-oid="6tam942"
                      >
                        <div data-oid="sq62wjn">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="r0q5skc"
                          >
                            Challenges
                          </h4>
                          <ul className="space-y-2" data-oid="shg1n:m">
                            {study.details.challenges.map((challenge, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="-y7_e3."
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="n:bj3wr"
                                />

                                <span data-oid="8van0ho">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="2m2q1e7">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="7vpsde5"
                          >
                            Solutions
                          </h4>
                          <ul className="space-y-2" data-oid="0081f0q">
                            {study.details.solutions.map((solution, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="hklwnc_"
                              >
                                <ChevronRight
                                  className="h-4 w-4 mt-1 text-primary"
                                  data-oid="zcqt-q0"
                                />

                                <span data-oid="wnut_xa">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div data-oid="15wz962">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="3khegbk"
                          >
                            Results
                          </h4>
                          <p data-oid="0st.f58">{study.details.results}</p>
                        </div>

                        <div className="mt-4" data-oid="x1ri:0y">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="czsvzp-"
                          >
                            Timeline
                          </h4>
                          <div className="space-y-0" data-oid="hdfw952">
                            {study.timeline.map((item, i) => (
                              <div
                                key={i}
                                className="timeline-item"
                                data-oid="x1s171r"
                              >
                                <div
                                  className="flex justify-between items-center"
                                  data-oid="r0e42r4"
                                >
                                  <span
                                    className="font-medium"
                                    data-oid="fc6k2om"
                                  >
                                    {item.phase}
                                  </span>
                                  <span
                                    className="text-sm text-muted-foreground"
                                    data-oid="og43tm4"
                                  >
                                    {item.duration}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="team" data-oid="z4sx80k">
                        <div className="text-center py-8" data-oid="d5ltq0-">
                          <p
                            className="text-muted-foreground"
                            data-oid="r5n_mhe"
                          >
                            Team information coming soon.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}
                </div>

                <div className="mt-4 flex justify-end" data-oid="96iizzp">
                  <Button
                    variant="link"
                    className="p-0 h-auto gap-1"
                    onClick={() => toggleExpand(study.id)}
                    data-oid="mhmmgte"
                  >
                    {expandedCaseStudy === study.id ? (
                      <>View Less</>
                    ) : (
                      <>
                        Read Full Case Study
                        <ArrowRight className="h-3 w-3" data-oid="5pq5ng2" />
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
