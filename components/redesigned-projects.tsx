"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SectionContainer,
  SectionHeader,
} from "@/components/ui/section-container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/hooks/use-is-client";
import { ErrorBoundary } from "@/components/error-boundary";
import {
  ExternalLink,
  Github,
  Code,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Users,
  Star,
  Layers,
  Cpu,
  Globe,
  Database,
  BookOpen,
  Share2,
  Shield,
  MessageSquare,
  Zap,
  Loader2,
} from "lucide-react";

// Project categories
const projectCategories = [
  { id: "all", name: "All Projects" },
  {
    id: "ai",
    name: "AI & ML",
    icon: <Cpu className="h-4 w-4" data-oid="0ivexg4" />,
  },
  {
    id: "audio",
    name: "Audio",
    icon: <Zap className="h-4 w-4" data-oid="giqb_n6" />,
  },
  {
    id: "web",
    name: "Web Dev",
    icon: <Globe className="h-4 w-4" data-oid="-.k501s" />,
  },
  {
    id: "data",
    name: "Data Science",
    icon: <Database className="h-4 w-4" data-oid="let00.k" />,
  },
  {
    id: "network",
    name: "Network",
    icon: <Share2 className="h-4 w-4" data-oid="dbcn2yn" />,
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-4 w-4" data-oid="10wymuu" />,
  },
  {
    id: "communication",
    name: "Communication",
    icon: <MessageSquare className="h-4 w-4" data-oid="on_788v" />,
  },
  {
    id: "research",
    name: "Research",
    icon: <BookOpen className="h-4 w-4" data-oid="igo6771" />,
  },
];

// Project data
const projects = [
  {
    id: 0,
    title: "Machine Connect Monitor: Real-time Machine Status Dashboard",
    category: "network",
    description:
      "A real-time monitoring system for tracking machine status, connectivity, and performance metrics across a network of devices with a clean, modern interface.",
    longDescription:
      "The Machine Connect Monitor provides a comprehensive solution for tracking the status and performance of networked machines in real-time. The system features a responsive dashboard that displays machine connectivity status, IP addresses, and allows for direct connection to machines for maintenance and monitoring purposes.",
    technologies: [
      "React.js/Next.js",
      "WebSockets",
      "Tailwind CSS",
      "Node.js",
      "Network Protocols",
      "Real-time Monitoring",
    ],

    imageUrl: "/machine-monitor.jpg",
    demoUrl: "/machine-monitor",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-green-600 to-blue-600",
    featured: true,
    completed: "2024",
    teamSize: 1,
    difficulty: 4,
    achievements: [
      "Implemented real-time machine status monitoring with WebSockets",
      "Created a clean, intuitive dashboard interface with Tailwind CSS",
      "Developed secure machine connection protocols",
      "Built responsive design that works across all device sizes",
      "Integrated automatic status updates and notifications",
    ],
  },
  {
    id: 1,
    title:
      "AI-Driven CNC Machine Health Monitoring: IoT Analytics with Mobile & Dashboard Integration",
    category: "ai",
    description:
      "Developed an end-to-end intelligent monitoring system to predict CNC machine failures, optimize maintenance schedules, and enhance manufacturing efficiency using IoT, AI, and real-time analytics",
    longDescription:
      "An advanced IoT-based monitoring system for CNC machines that leverages real-time data analytics and machine learning to predict potential failures and optimize maintenance schedules. The system features a responsive dashboard for real-time monitoring, predictive maintenance alerts, and comprehensive performance analytics.",
    technologies: [
      "React.js/Next.js",
      "PyTorch",
      "WebSockets",
      "FastAPI",
      "IoT Sensors",
      "TensorFlow",
      "Docker",
    ],

    imageUrl: "/Screenshot 2025-03-03 at 2.56.24 AM.png",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-blue-600 to-violet-600",
    featured: true,
    completed: "2024",
    teamSize: 1,
    difficulty: 5,
    achievements: [
      "Implemented real-time CNC machine health monitoring with IoT sensors",
      "Developed predictive maintenance algorithms with 90% accuracy",
      "Created interactive dashboard for machine performance analytics",
      "Integrated mobile alerts for critical machine status updates",
      "Reduced machine downtime by 35% through predictive maintenance",
    ],
  },
  {
    id: 2,
    title: "DALL-E 2 PyTorch Implementation",
    category: "ai",
    description:
      "Open-source implementation of OpenAI's DALL-E 2 image generation model using PyTorch.",
    longDescription:
      "A PyTorch implementation of the DALL-E 2 architecture for generating high-quality images from text descriptions. The project includes optimizations for CUDA acceleration and containerization with Docker for easy deployment and scaling.",
    technologies: ["PyTorch", "CUDA", "Docker", "HuggingFace", "Python"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-purple-600 to-pink-600",
    featured: false,
    completed: "2023",
    teamSize: 2,
    difficulty: 5,
    achievements: [
      "Implemented the full DALL-E 2 architecture with PyTorch",
      "Optimized for CUDA acceleration with 40% performance improvement",
      "Created Docker containers for easy deployment",
      "Built a web interface for text-to-image generation",
    ],
  },
  {
    id: 3,
    title: "Multi-Agent RL Environment",
    category: "ai",
    description:
      "A flexible environment for training and evaluating multi-agent reinforcement learning algorithms.",
    longDescription:
      "A customizable environment for developing and testing multi-agent reinforcement learning algorithms. The system supports various reward structures, observation spaces, and agent interactions.",
    technologies: ["Python", "TensorFlow", "OpenAI Gym", "Ray", "Docker"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-green-600 to-teal-600",
    featured: false,
    completed: "2023",
    teamSize: 2,
    difficulty: 4,
    achievements: [
      "Designed a flexible multi-agent environment supporting various RL algorithms",
      "Implemented custom reward structures and observation spaces",
      "Created visualization tools for agent behavior analysis",
      "Benchmarked performance against standard environments",
    ],
  },
  {
    id: 4,
    title: "Community Grant Management System",
    category: "web",
    description:
      "Web application for managing community grant applications, reviews, and distributions.",
    longDescription:
      "A full-stack web application that streamlines the process of managing community grants from application to distribution. The system includes features for application submission, review workflows, and financial tracking.",
    technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript", "Prisma"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-amber-600 to-orange-600",
    featured: false,
    completed: "2022",
    teamSize: 2,
    difficulty: 3,
    achievements: [
      "Built a full-stack application with Next.js and PostgreSQL",
      "Implemented secure authentication and authorization",
      "Created a workflow system for grant application review",
      "Deployed on AWS with CI/CD pipeline",
    ],
  },
  {
    id: 5,
    title: "Wikipedia Connection Finder",
    category: "network",
    description:
      "Tool for finding the shortest path between any two Wikipedia articles through hyperlinks.",
    longDescription:
      "An application that analyzes the network structure of Wikipedia to find the shortest path between any two articles. The tool uses graph theory algorithms to navigate through the complex web of hyperlinks.",
    technologies: ["Python", "NetworkX", "Flask", "MongoDB", "D3.js"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-blue-600 to-cyan-600",
    featured: false,
    completed: "2022",
    teamSize: 1,
    difficulty: 3,
    achievements: [
      "Implemented graph algorithms to find shortest paths between Wikipedia articles",
      "Created a web interface with Flask and D3.js",
      "Optimized performance for large-scale graph traversal",
      "Built a caching system with MongoDB for faster results",
    ],
  },
  {
    id: 6,
    title: "NYC Education Analytics",
    category: "data",
    description:
      "Data analysis and visualization platform for NYC public school performance metrics.",
    longDescription:
      "A comprehensive data analysis platform that processes and visualizes performance metrics from NYC public schools. The system includes predictive models for identifying at-risk students and schools that need additional resources.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau", "R"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/mubarakx01",
    color: "from-indigo-600 to-blue-600",
    featured: false,
    completed: "2022",
    teamSize: 4,
    difficulty: 4,
    achievements: [
      "Analyzed NYC public school data to identify performance patterns",
      "Built predictive models for student success with Scikit-learn",
      "Created interactive visualizations with Tableau",
      "Presented findings to education stakeholders",
    ],
  },
];

export default function RedesignedProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const isClient = useIsClient();

  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter(
          (project) =>
            project.category === selectedCategory && !project.featured,
        );

  const handleNext = () => {
    if (!isClient) return;
    setDirection(1);
    setCurrentFeaturedIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    if (!isClient) return;
    setDirection(-1);
    setCurrentFeaturedIndex(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length,
    );
  };

  const handleDemoClick = (url: string) => {
    if (!isClient) return;
    toast({
      title: "Demo Link",
      description: "Opening demo in a new tab...",
      duration: 3000,
    });
    window.open(url, "_blank");
  };

  // Simulate loading delay
  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClient]);

  // If not client-side yet, show a loading state
  if (!isClient || isLoading) {
    return (
      <SectionContainer id="projects" className="relative" data-oid="lbe387t">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Explore my portfolio of AI, machine learning, and software development projects."
          data-oid="6jbyhu3"
        />

        <div
          className="flex justify-center items-center py-20"
          data-oid="83hmz:9"
        >
          <Loader2
            className="h-8 w-8 animate-spin text-primary mr-2"
            data-oid="8neueh1"
          />

          <span data-oid="umvzuj1">Loading projects...</span>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="projects" className="relative" data-oid="l4rr3hx">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="ks00cp8"
      />

      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="y6qi15y"
      />

      <SectionHeader
        title="Project Portfolio"
        subtitle="Explore my portfolio of AI, machine learning, and software development projects. Each project demonstrates different skills and technologies."
        data-oid="xh2ekj0"
      />

      {featuredProjects.length > 0 && (
        <div className="mb-16" data-oid="e3r8u8l">
          <ScrollReveal data-oid="o5eap1i">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center"
              data-oid="50iys_0"
            >
              <Layers className="h-5 w-5 text-primary" data-oid="99kw_-1" />
              <span data-oid=":1qg1s0">Featured Projects</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal data-oid="oa6_:il">
            <div
              className="relative rounded-xl overflow-hidden"
              data-oid="o9:bbp_"
            >
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={direction}
                data-oid="g7qzxs9"
              >
                <motion.div
                  key={featuredProjects[currentFeaturedIndex].id}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  exit={{
                    x: direction > 0 ? -1000 : 1000,
                    opacity: 0,
                    transition: {
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    },
                  }}
                  className="relative w-full aspect-[16/9]"
                  data-oid="28ckloq"
                >
                  <div
                    className="absolute inset-0 flex flex-col md:flex-row"
                    data-oid="0d60tcr"
                  >
                    <div
                      className="relative w-full h-48 md:h-auto md:w-1/2"
                      data-oid="_s3apql"
                    >
                      <img
                        src={
                          featuredProjects[currentFeaturedIndex].imageUrl ||
                          "/placeholder.svg"
                        }
                        alt={featuredProjects[currentFeaturedIndex].title}
                        className="w-full h-full object-contain"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        data-oid="bxj894j"
                      />
                    </div>

                    <div
                      className={cn(
                        "w-full md:w-1/2 p-6 flex flex-col justify-center opacity-90 bg-gradient-to-r",
                        featuredProjects[currentFeaturedIndex].color,
                      )}
                      data-oid="smbhb:n"
                    >
                      <Badge
                        variant="outline"
                        className="w-fit mb-4 bg-black/50 backdrop-blur-sm text-white border-white/20"
                        data-oid="y5w7z:8"
                      >
                        Featured Project
                      </Badge>
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
                        data-oid="o-fl3_r"
                      >
                        {featuredProjects[currentFeaturedIndex].title}
                      </h3>
                      <p
                        className="text-white/90 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none"
                        data-oid="ppindfj"
                      >
                        {featuredProjects[currentFeaturedIndex].description}
                      </p>

                      <div
                        className="flex flex-wrap gap-2 mb-4 md:mb-6"
                        data-oid="rl.x1wm"
                      >
                        {featuredProjects[currentFeaturedIndex].technologies
                          .slice(0, 3)
                          .map((tech, index) => (
                            <Badge
                              key={index}
                              className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                              data-oid="crj-2qw"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {featuredProjects[currentFeaturedIndex].technologies
                          .length > 3 && (
                          <Badge
                            className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                            data-oid="2wkjk62"
                          >
                            +
                            {featuredProjects[currentFeaturedIndex].technologies
                              .length - 3}{" "}
                            more
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3" data-oid="kg6uset">
                        <Button
                          className="bg-white text-black hover:bg-white/90 group text-sm"
                          onClick={() =>
                            handleDemoClick(
                              featuredProjects[currentFeaturedIndex].demoUrl,
                            )
                          }
                          data-oid="_2org.u"
                        >
                          Live Demo
                          <ExternalLink
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            data-oid="3i7ptqt"
                          />
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          asChild
                          data-oid="z09-iz3"
                        >
                          <a
                            href={
                              featuredProjects[currentFeaturedIndex].githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            data-oid="s03sokg"
                          >
                            <Github className="h-4 w-4" data-oid="20ei8ha" />
                            View Code
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          onClick={() => {
                            setSelectedProject(
                              featuredProjects[currentFeaturedIndex],
                            );
                            setIsDialogOpen(true);
                          }}
                          data-oid="jmf3spn"
                        >
                          <Code className="h-4 w-4" data-oid="8.n6ee." />
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation controls */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handlePrev}
                data-oid="..oejzx"
              >
                <ChevronLeft className="h-5 w-5" data-oid="r9t4yi3" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
                data-oid="vpllr:c"
              >
                <ChevronRight className="h-5 w-5" data-oid="739_w-0" />
              </Button>

              {/* Progress dots */}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1"
                data-oid="in16gzo"
              >
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      currentFeaturedIndex === index
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/80",
                    )}
                    onClick={() => {
                      setDirection(index > currentFeaturedIndex ? 1 : -1);
                      setCurrentFeaturedIndex(index);
                    }}
                    aria-label={`Go to project ${index + 1}`}
                    data-oid="g0oq691"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}

      <ScrollReveal data-oid="q4:p3q0">
        <Tabs
          defaultValue="all"
          onValueChange={setSelectedCategory}
          className="w-full"
          data-oid="j7sns24"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar" data-oid="etrc.8g">
            <TabsList
              className="flex justify-start gap-2 mb-8 bg-transparent w-max mx-auto"
              data-oid="_h5k_:6"
            >
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={cn(
                    "px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all data-[state=active]:shadow-lg whitespace-nowrap",
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80",
                  )}
                  data-oid="_0inp2."
                >
                  <div
                    className="flex items-center gap-1 sm:gap-2"
                    data-oid="g:hr7mt"
                  >
                    {category.icon && category.icon}
                    <span data-oid="uoq4zt5">{category.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="cd_vt:m"
          >
            <AnimatePresence data-oid="aexhyyv">
              {filteredProjects.map((project, index) => (
                <ErrorBoundary key={project.id} data-oid="06agsbj">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    data-oid="ozc7jnu"
                  >
                    <ProjectCard
                      project={project}
                      onSelect={() => {
                        setSelectedProject(project);
                        setIsDialogOpen(true);
                      }}
                      data-oid="qj4gge9"
                    />
                  </motion.div>
                </ErrorBoundary>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </ScrollReveal>

      {/* Project details dialog */}
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        data-oid="cesnwiy"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0 w-[95vw]"
          data-oid="wjiex.h"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="a3f4:ie">
              <DialogHeader
                className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2"
                data-oid="uxl9t76"
              >
                <div
                  className="flex justify-between items-start"
                  data-oid="p8-mblj"
                >
                  <div data-oid="fvat:u6">
                    <Badge className="mb-2" data-oid="5p1rv6n">
                      {selectedProject.category === "ai"
                        ? "AI & Machine Learning"
                        : selectedProject.category === "web"
                          ? "Web Development"
                          : selectedProject.category === "data"
                            ? "Data Science"
                            : selectedProject.category === "audio"
                              ? "Audio & Voice Tech"
                              : "Research"}
                    </Badge>
                    <DialogTitle
                      className="text-xl sm:text-2xl"
                      data-oid="fc0z-if"
                    >
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription
                      className="mt-2 text-sm"
                      data-oid="xz3bmu0"
                    >
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="is_fpma">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="ok6.tnu"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="komfxh7"
              >
                <div className="px-4 sm:px-6 border-b" data-oid="wq-3gq4">
                  <TabsList
                    className="justify-start rounded-none bg-transparent h-10"
                    data-oid="hge46k3"
                  >
                    <TabsTrigger
                      value="overview"
                      className="text-sm"
                      data-oid="8igd5qc"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="text-sm"
                      data-oid="0a86zwb"
                    >
                      Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="gallery"
                      className="text-sm"
                      data-oid="3e6s19b"
                    >
                      Gallery
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div
                  className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)]"
                  data-oid="l2n:hj8"
                >
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="0d1l9:x"
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                      data-oid="5vyrr01"
                    >
                      <div className="lg:col-span-2" data-oid="ph0.:6n">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="9pgjff2"
                        >
                          Project Details
                        </h4>
                        <p
                          className="mb-6 text-sm sm:text-base"
                          data-oid="grc:-3l"
                        >
                          {selectedProject.longDescription}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="mdte7h1"
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 mb-6" data-oid="3nq7so4">
                          {selectedProject.achievements.map(
                            (achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="rlk2hou"
                              >
                                <div
                                  className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                                  data-oid="_vpswba"
                                >
                                  <span
                                    className="text-xs text-primary"
                                    data-oid="y11q-69"
                                  >
                                    ✓
                                  </span>
                                </div>
                                <span
                                  className="text-sm sm:text-base"
                                  data-oid="qh96mh:"
                                >
                                  {achievement}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="2.fozwp"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="cfhoszg"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="4_sv17k"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-3 mt-6"
                          data-oid="y6qre6g"
                        >
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="aqb-27j"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="hv25dux"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="4w-f_p3"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="4wf_rga"
                            >
                              <Github className="h-4 w-4" data-oid="flmmnjy" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid=":ajopnb">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="2yrkrrx"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="c:hgu9e">
                          <div className="flex flex-col" data-oid="l37b29r">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="9k74ix:"
                            >
                              Completed
                            </span>
                            <span data-oid="r5jymoq">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="j:ze3og">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="o:zwlo:"
                            >
                              Team Size
                            </span>
                            <span data-oid="xrdbp7u">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="wu6cti0">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="gkb1550"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid=":vzb_:l">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="in2vpes"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="details"
                    className="mt-0"
                    data-oid="c0mz.7h"
                  >
                    <div
                      className="relative aspect-video mb-6 rounded-lg overflow-hidden"
                      data-oid="_0fqnck"
                    >
                      <img
                        src={selectedProject.imageUrl || "/placeholder.svg"}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        data-oid="bzfnq.b"
                      />
                    </div>

                    <div className="space-y-6" data-oid="njzt5ux">
                      <div data-oid="fb1uhi1">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="7xhqqkj"
                        >
                          Project Description
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="8bvccv-">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div data-oid="1_moh7a">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="98npatj"
                        >
                          Implementation Details
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="fb:xegk">
                          This project was implemented using{" "}
                          {selectedProject.technologies.join(", ")}. The
                          development process involved careful planning,
                          iterative development, and rigorous testing to ensure
                          high-quality results.
                        </p>
                      </div>

                      <div data-oid="jh_y:fg">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="bdhl.ne"
                        >
                          Challenges & Solutions
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="uc-qj9:">
                          During development, we encountered several challenges
                          including performance optimization, scalability
                          concerns, and integration complexities. These were
                          addressed through innovative approaches and best
                          practices in software engineering.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="gallery"
                    className="mt-0"
                    data-oid=":bi3_7w"
                  >
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      data-oid="al92zua"
                    >
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid=":n:z_u1"
                        >
                          <img
                            src={`/placeholder.svg?height=400&width=600&text=Screenshot ${index}`}
                            alt={`${selectedProject.title} screenshot ${index}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="k.sn.pl"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionContainer>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  onSelect: () => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isClient = useIsClient();

  return (
    <Card
      className="overflow-hidden h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-oid="uqi57g5"
    >
      <div className="relative aspect-video overflow-hidden" data-oid="qw0caks">
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-contain"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          data-oid="lj_8t3y"
        />

        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r",
            project.color,
          )}
          data-oid="49aui4k"
        />

        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-oid="ia83jfa"
        >
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/20"
            onClick={onSelect}
            data-oid="l7-bafs"
          >
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col" data-oid="x5:h4sd">
        <div
          className="flex justify-between items-start mb-2"
          data-oid="yhx8y83"
        >
          <Badge variant="outline" className="text-xs" data-oid="z82dpo-">
            {project.category === "ai"
              ? "AI & ML"
              : project.category === "web"
                ? "Web Dev"
                : project.category === "data"
                  ? "Data Science"
                  : project.category === "audio"
                    ? "Audio"
                    : "Research"}
          </Badge>
          <div className="flex" data-oid="oqzfoo2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                data-oid="568b7k1"
              />
            ))}
          </div>
        </div>

        <h3 className="font-bold mb-2 line-clamp-1" data-oid="clwglah">
          {project.title}
        </h3>
        <p
          className="text-muted-foreground text-sm line-clamp-3 mb-4"
          data-oid="waxmpkq"
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4 mt-auto" data-oid="-p0q2g.">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="text-xs"
              data-oid="au4ue0x"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs" data-oid="5v2h3hy">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div
          className="flex justify-between items-center text-xs text-muted-foreground"
          data-oid="qaog1a7"
        >
          <div className="flex items-center gap-1" data-oid="m9yoxpq">
            <Calendar className="h-3 w-3" data-oid="skd29rm" />
            <span data-oid="221ki_j">{project.completed}</span>
          </div>
          <div className="flex items-center gap-1" data-oid="6fnos8k">
            <Users className="h-3 w-3" data-oid="y3_g2ia" />
            <span data-oid="lnca.24">Team: {project.teamSize}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
