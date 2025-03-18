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
      data-oid="x:5o_qx"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid=".eobvg7"
      />

      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="3adw6h5"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="c5uvgb7"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="0fsogxd"
      >
        <ScrollReveal data-oid="o7x5i8d">
          <div className="relative" data-oid="-era9rm">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid=":h0mwv0"
            >
              <Image
                src="/profile.jpeg"
                alt="MUBARAK A"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="_ykjt._"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid=":9:czda"
              >
                <div className="p-4 text-white" data-oid="cqa2g3z">
                  <p className="font-medium" data-oid="2qy:n10">
                    MUBARAK A
                  </p>
                  <p className="text-sm text-white/80" data-oid="tre18rw">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="uhder3w"
            />

            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid="ztv85ph"
            />

            {/* Stats cards */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="absolute -bottom-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-background/80 border-white/10 rounded-lg overflow-hidden"
              data-oid="f387iga"
            >
              <Card className="border-none bg-transparent" data-oid="tonyt.h">
                <CardContent className="p-4" data-oid="af_7dki">
                  <div className="flex items-center gap-2" data-oid="az8vqb3">
                    <Award
                      className="h-5 w-5 text-primary"
                      data-oid="-08u15k"
                    />

                    <div data-oid="ssx1n16">
                      <div className="text-sm font-medium" data-oid="pzlwlrq">
                        Experience
                      </div>
                      <div className="text-2xl font-bold" data-oid="r7yn:fy">
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
              data-oid="kq0pmyt"
            >
              <Card className="border-none bg-transparent" data-oid="dzbb1pk">
                <CardContent className="p-4" data-oid="7okgc.f">
                  <div className="flex items-center gap-2" data-oid="ixpkko7">
                    <Briefcase
                      className="h-5 w-5 text-primary"
                      data-oid="c3_eufb"
                    />

                    <div data-oid="mcnchpo">
                      <div className="text-sm font-medium" data-oid="8edcgbn">
                        Projects
                      </div>
                      <div className="text-2xl font-bold" data-oid="fu6:sk2">
                        20+
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollReveal>

        <div data-oid="dg3q-vt">
          <StaggeredContainer data-oid="m4vlmjx">
            <StaggerItem data-oid="xoi4ikd">
              <h3 className="text-2xl font-bold mb-4" data-oid="o9li7si">
                Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="bbwjz:t">
              <p className="text-muted-foreground mb-6" data-oid="oprd5rz">
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

            <StaggerItem data-oid="20k-c6a">
              <p className="text-muted-foreground mb-6" data-oid="tr3_.a:">
                Driven by creativity, attention to detail, and a passion for
                impactful technology, I’m dedicated to building solutions that
                enhance lives—whether streamlining industrial processes or
                empowering individuals with intuitive tools for financial
                control. My goal is to deliver engaging, accessible web
                experiences and AI innovations that make a meaningful
                difference. summartyy.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="i13-6iw">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="_f4tt5d">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="b_ym4ej"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="nh_wcrj" />
                  Technical
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid=":ox78ew"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="qq4p.5l"
                  />
                  AI Specialist
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="fg11vj_"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="caxc8zs" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="5:g6-t_">
              <Button
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                data-oid="z1b81wy"
              >
                <Download
                  className="h-4 w-4 group-hover:animate-bounce"
                  data-oid="obd_l0_"
                />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="2pbwgps"
              >
                <a
                  href="https://www.linkedin.com/in/mubarak-a-xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid="xirt9_k"
                >
                  <span data-oid="ho0ni65">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="dsl5c7s"
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
