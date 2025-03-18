"use client";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/ui/section-container";
import {
  ScrollReveal,
  StaggeredContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <SectionContainer
      id="about"
      className="relative overflow-hidden"
      data-oid="5p_sgca"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid=":qozlj-"
      />

      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="gjw:vgz"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="kdd7skz"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="bq2l:nh"
      >
        <ScrollReveal data-oid="plch_06">
          <div className="relative" data-oid=":mc_f_b">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="-hc62g4"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="bmsqhva"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="4f8s5r6"
              >
                <div className="p-4 text-white" data-oid="bkx4sj5">
                  <p className="font-medium" data-oid="34upp15">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="c4j_wuj">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid=".z6m33-"
            />

            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid=".f:p_o_"
            />

            {/* Stats cards */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="absolute -bottom-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-background/80 border-white/10 rounded-lg overflow-hidden"
              data-oid="7qwtjg6"
            >
              <Card className="border-none bg-transparent" data-oid="zuwc47y">
                <CardContent className="p-4" data-oid=".mfza6d">
                  <div className="flex items-center gap-2" data-oid="ob:ts.a">
                    <Award
                      className="h-5 w-5 text-primary"
                      data-oid="iufg6z7"
                    />

                    <div data-oid="m2bvm_w">
                      <div className="text-sm font-medium" data-oid="n:p24q7">
                        Experience
                      </div>
                      <div className="text-2xl font-bold" data-oid="m6oep.d">
                        5+ Years
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="absolute -top-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-background/80 border-white/10 rounded-lg overflow-hidden"
              data-oid="gww0::j"
            >
              <Card className="border-none bg-transparent" data-oid="2aadz6g">
                <CardContent className="p-4" data-oid="k7.ucmd">
                  <div className="flex items-center gap-2" data-oid="hgb98:b">
                    <Briefcase
                      className="h-5 w-5 text-primary"
                      data-oid="sghq.-b"
                    />

                    <div data-oid="6x1c3q.">
                      <div className="text-sm font-medium" data-oid="y_emi0o">
                        Projects
                      </div>
                      <div className="text-2xl font-bold" data-oid="t2i:iw3">
                        20+
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollReveal>

        <div data-oid="8insz75">
          <StaggeredContainer data-oid="s7er9ki">
            <StaggerItem data-oid="v:t:rci">
              <h3 className="text-2xl font-bold mb-4" data-oid="q-glq3r">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="5nvv-nq">
              <p className="text-muted-foreground mb-6" data-oid="0fzqz8s">
                I’m a passionate Software Engineer and AI Enthusiast with a
                robust foundation in Electronics and Communication Engineering.
                My expertise spans machine learning, web development, and data
                science, empowering me to craft innovative, user-friendly
                solutions that tackle real-world challenges. I specialize in
                designing visually appealing, high-performance websites and
                AI-driven systems that prioritize usability and practical
                impact.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="_omljax">
              <p className="text-muted-foreground mb-6" data-oid="o2pjq5b">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I’m dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="rl7i.h0">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="s8uk:dw">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="lsc-di4"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="lbczqaa" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="erlgwie"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="qiodbgi"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="rnmw4a6"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="1q8x3zb" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="1a4u4y7">
              <Button
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                data-oid="817_weo"
              >
                <Download
                  className="h-4 w-4 group-hover:animate-bounce"
                  data-oid="o02igwt"
                />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="fl4ezgd"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid=":vv0f8u"
                >
                  <span data-oid="0b3:j-u">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="tnuqcuh"
                  />
                </a>
              </Button>
            </StaggerItem>
          </StaggeredContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
