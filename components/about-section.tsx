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
      data-oid="5melao1"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="fl-un10"
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="ympr3po"
      />

      <SectionHeader
        title="About Me"
        subtitle="Get to know more about my background, expertise, and what drives me to create impactful AI solutions."
        data-oid="nwnt:zk"
      />

      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        data-oid="meak:j1"
      >
        <ScrollReveal data-oid="5mf9yph">
          <div className="relative" data-oid="m8kjg4l">
            <div
              className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-xl"
              data-oid="6gxr0mj"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Shaquille Williams"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                data-oid="4o.q9qa"
              />

              {/* Add an overlay with a subtle gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                data-oid="g-5k.1i"
              >
                <div className="p-4 text-white" data-oid="46-l4fl">
                  <p className="font-medium" data-oid="_z5ca39">
                    Shaquille Williams
                  </p>
                  <p className="text-sm text-white/80" data-oid="t7umqqy">
                    AI Engineer & Community Builder
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute top-4 -left-4 w-full h-full border-2 border-primary/50 rounded-lg -z-10"
              data-oid="4byxqq_"
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-lg -z-10"
              data-oid="szembq:"
            />

            {/* Stats cards */}
            <motion.div
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="absolute -bottom-6 -right-6 w-40 shadow-lg backdrop-blur-sm bg-background/80 border-white/10 rounded-lg overflow-hidden"
              data-oid="r7xa6jd"
            >
              <Card className="border-none bg-transparent" data-oid="hqnyr1w">
                <CardContent className="p-4" data-oid="8.bct:t">
                  <div className="flex items-center gap-2" data-oid="4meo796">
                    <Award
                      className="h-5 w-5 text-primary"
                      data-oid="b_d-3uk"
                    />
                    <div data-oid=".q0vef_">
                      <div className="text-sm font-medium" data-oid="5t4n3od">
                        Experience
                      </div>
                      <div className="text-2xl font-bold" data-oid="iak51x0">
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
              data-oid="fdwz9w."
            >
              <Card className="border-none bg-transparent" data-oid=":.9:scz">
                <CardContent className="p-4" data-oid=".x7ityu">
                  <div className="flex items-center gap-2" data-oid="oi1n92b">
                    <Briefcase
                      className="h-5 w-5 text-primary"
                      data-oid="zt_x0sz"
                    />
                    <div data-oid="oa7o48r">
                      <div className="text-sm font-medium" data-oid="xybxebw">
                        Projects
                      </div>
                      <div className="text-2xl font-bold" data-oid="3hlfg_:">
                        20+
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ScrollReveal>

        <div data-oid="01xeipd">
          <StaggeredContainer data-oid="dak_l0.">
            <StaggerItem data-oid="73th4sq">
              <h3 className="text-2xl font-bold mb-4" data-oid="12snric">
                Senior Software Engineer & AI Specialist
              </h3>
            </StaggerItem>

            <StaggerItem data-oid="4febw9u">
              <p className="text-muted-foreground mb-6" data-oid="ibbq6ml">
                I'm an innovative Senior Software Engineer, AI Specialist, and
                Community Organizer with expertise in machine learning,
                generative AI, cybersecurity, and STEM education. With a
                background in physics and a deep understanding of computational
                methods, I specialize in developing AI-driven, open-source tools
                for impactful, equitable social change.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="q2:0fu_">
              <p className="text-muted-foreground mb-6" data-oid="r5mw6b4">
                My work spans from developing cutting-edge voice cloning
                technology to creating community-focused programs that have
                positively impacted over 20,000 NYC residents. I'm dedicated to
                creating systems that support activist networks, educational
                platforms, and community-building initiatives while addressing
                systemic challenges through socially responsible technology.
              </p>
            </StaggerItem>

            <StaggerItem data-oid="zwo4j83">
              <div className="flex flex-wrap gap-3 mb-8" data-oid="0ik16op">
                <Badge
                  className="px-3 py-1.5 bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  data-oid="w294ulf"
                >
                  <Briefcase className="h-3.5 w-3.5 mr-1" data-oid="sywjis_" />
                  Technical Leadership
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  data-oid="6qpbp7r"
                >
                  <GraduationCap
                    className="h-3.5 w-3.5 mr-1"
                    data-oid="mb3kh8o"
                  />
                  STEM Education
                </Badge>
                <Badge
                  className="px-3 py-1.5 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30 transition-colors"
                  data-oid="-uo15f2"
                >
                  <Heart className="h-3.5 w-3.5 mr-1" data-oid="1eqm9tw" />
                  Community Building
                </Badge>
              </div>
            </StaggerItem>

            <StaggerItem data-oid="nkg.3al">
              <Button
                className="gap-2 group shadow-lg hover:shadow-primary/20 transition-all duration-300"
                data-oid="bw93:.5"
              >
                <Download
                  className="h-4 w-4 group-hover:animate-bounce"
                  data-oid="06-vyos"
                />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="ml-3 gap-2 group"
                asChild
                data-oid="gvp3.hi"
              >
                <a
                  href="https://www.linkedin.com/in/shaquille-williams-957970129"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-oid=":9t88k9"
                >
                  <span data-oid="h.e5.g9">View LinkedIn</span>
                  <ExternalLink
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    data-oid="trs-pn_"
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
