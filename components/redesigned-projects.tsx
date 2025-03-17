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
    icon: <Cpu className="h-4 w-4" data-oid="ogtiiup" />,
  },
  {
    id: "audio",
    name: "Audio",
    icon: <Zap className="h-4 w-4" data-oid="6bcxx7m" />,
  },
  {
    id: "web",
    name: "Web Dev",
    icon: <Globe className="h-4 w-4" data-oid="-enr9s4" />,
  },
  {
    id: "data",
    name: "Data Science",
    icon: <Database className="h-4 w-4" data-oid="y492ejy" />,
  },
  {
    id: "network",
    name: "Network",
    icon: <Share2 className="h-4 w-4" data-oid="z_2uy4e" />,
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-4 w-4" data-oid="wh0v76e" />,
  },
  {
    id: "communication",
    name: "Communication",
    icon: <MessageSquare className="h-4 w-4" data-oid="5q.lso6" />,
  },
  {
    id: "research",
    name: "Research",
    icon: <BookOpen className="h-4 w-4" data-oid="gix3n:j" />,
  },
];

// Project data
const projects = [
  {
    id: 1,
    title: "Voice Cloning & Audio Processing Suite",
    category: "audio",
    description:
      "Comprehensive audio processing system including real-time voice cloning, multilingual transcription, and speaker diarization.",
    longDescription:
      "A state-of-the-art voice cloning system that allows for real-time and one-shot audio processing with minimal latency. The system uses deep learning models to generate natural-sounding speech that matches the target voice with unprecedented accuracy and emotional range, enabling applications in accessibility, personalized audiobooks, and more.",
    technologies: ["TensorFlow TTS", "PyTorch", "Whisper", "FastAPI", "React"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    demoUrl: "#",
    githubUrl: "https://github.com/swilliams9772",
    color: "from-blue-600 to-violet-600",
    featured: true,
    completed: "2023",
    teamSize: 3,
    difficulty: 5,
    achievements: [
      "Developed one-shot voice cloning requiring only 5 seconds of audio",
      "Reduced model size by 60% while maintaining voice quality",
      "Achieved 80ms latency for real-time applications",
      "Implemented multi-speaker voice cloning with 95% accuracy",
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
    githubUrl: "https://github.com/swilliams9772",
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
    githubUrl: "https://github.com/swilliams9772",
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
    githubUrl: "https://github.com/swilliams9772",
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
    githubUrl: "https://github.com/swilliams9772",
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
    githubUrl: "https://github.com/swilliams9772",
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
      <SectionContainer id="projects" className="relative" data-oid="0m:74-5">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Explore my portfolio of AI, machine learning, and software development projects."
          data-oid="rk.sd1i"
        />

        <div
          className="flex justify-center items-center py-20"
          data-oid="fb4pa:t"
        >
          <Loader2
            className="h-8 w-8 animate-spin text-primary mr-2"
            data-oid="j-89yff"
          />
          <span data-oid="n7ckehg">Loading projects...</span>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="projects" className="relative" data-oid="swa..zf">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="cuyuh25"
      />
      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="vt8zc2a"
      />

      <SectionHeader
        title="Project Portfolio"
        subtitle="Explore my portfolio of AI, machine learning, and software development projects. Each project demonstrates different skills and technologies."
        data-oid="gu2dca6"
      />

      {featuredProjects.length > 0 && (
        <div className="mb-16" data-oid="isnov77">
          <ScrollReveal data-oid="ds1k9-i">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center"
              data-oid="wt0lym_"
            >
              <Layers className="h-5 w-5 text-primary" data-oid="g42quuu" />
              <span data-oid="p74yz_0">Featured Projects</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal data-oid="ts_-u65">
            <div
              className="relative rounded-xl overflow-hidden"
              data-oid="8yzi-p6"
            >
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={direction}
                data-oid="3ktsz-v"
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
                  data-oid="_glun4t"
                >
                  <div
                    className="absolute inset-0 flex flex-col md:flex-row"
                    data-oid="k0ey93u"
                  >
                    <div
                      className="relative w-full h-48 md:h-auto md:w-1/2"
                      data-oid="pe9f.ir"
                    >
                      <Image
                        src={
                          featuredProjects[currentFeaturedIndex].imageUrl ||
                          "/placeholder.svg"
                        }
                        alt={featuredProjects[currentFeaturedIndex].title}
                        fill
                        className="object-cover"
                        priority
                        data-oid="wep99.g"
                      />
                    </div>

                    <div
                      className={cn(
                        "w-full md:w-1/2 p-6 flex flex-col justify-center opacity-90 bg-gradient-to-r",
                        featuredProjects[currentFeaturedIndex].color,
                      )}
                      data-oid="6oc83zi"
                    >
                      <Badge
                        variant="outline"
                        className="w-fit mb-4 bg-black/50 backdrop-blur-sm text-white border-white/20"
                        data-oid="71_e.cu"
                      >
                        Featured Project
                      </Badge>
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
                        data-oid="yge9sc2"
                      >
                        {featuredProjects[currentFeaturedIndex].title}
                      </h3>
                      <p
                        className="text-white/90 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none"
                        data-oid="_tjfpnj"
                      >
                        {featuredProjects[currentFeaturedIndex].description}
                      </p>

                      <div
                        className="flex flex-wrap gap-2 mb-4 md:mb-6"
                        data-oid="lbjgfgi"
                      >
                        {featuredProjects[currentFeaturedIndex].technologies
                          .slice(0, 3)
                          .map((tech, index) => (
                            <Badge
                              key={index}
                              className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                              data-oid="jnbmqlh"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {featuredProjects[currentFeaturedIndex].technologies
                          .length > 3 && (
                          <Badge
                            className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                            data-oid="0ro2idm"
                          >
                            +
                            {featuredProjects[currentFeaturedIndex].technologies
                              .length - 3}{" "}
                            more
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3" data-oid="5xy6040">
                        <Button
                          className="bg-white text-black hover:bg-white/90 group text-sm"
                          onClick={() =>
                            handleDemoClick(
                              featuredProjects[currentFeaturedIndex].demoUrl,
                            )
                          }
                          data-oid="hegqnvv"
                        >
                          Live Demo
                          <ExternalLink
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            data-oid="ir_25m3"
                          />
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          asChild
                          data-oid="46kiumm"
                        >
                          <a
                            href={
                              featuredProjects[currentFeaturedIndex].githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            data-oid=":pfvogw"
                          >
                            <Github className="h-4 w-4" data-oid="8thszpc" />
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
                          data-oid="z8oky_c"
                        >
                          <Code className="h-4 w-4" data-oid="78pel-v" />
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
                data-oid="qot_b.n"
              >
                <ChevronLeft className="h-5 w-5" data-oid="nlh1tbg" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
                data-oid="gpdncf8"
              >
                <ChevronRight className="h-5 w-5" data-oid="4i4az7l" />
              </Button>

              {/* Progress dots */}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1"
                data-oid="6xgh4h5"
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
                    data-oid="fw0:vy8"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}

      <ScrollReveal data-oid="27urg:q">
        <Tabs
          defaultValue="all"
          onValueChange={setSelectedCategory}
          className="w-full"
          data-oid="2:-em07"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar" data-oid="ysy5g6c">
            <TabsList
              className="flex justify-start gap-2 mb-8 bg-transparent w-max mx-auto"
              data-oid="shftywx"
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
                  data-oid="p0i9qm9"
                >
                  <div
                    className="flex items-center gap-1 sm:gap-2"
                    data-oid="00mfvsa"
                  >
                    {category.icon && category.icon}
                    <span data-oid=":i8x3tk">{category.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid=":xh_-jk"
          >
            <AnimatePresence data-oid="lcy9tkv">
              {filteredProjects.map((project, index) => (
                <ErrorBoundary key={project.id} data-oid="exa.9ux">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    data-oid="f0t:kv7"
                  >
                    <ProjectCard
                      project={project}
                      onSelect={() => {
                        setSelectedProject(project);
                        setIsDialogOpen(true);
                      }}
                      data-oid="_uk121v"
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
        data-oid="ochql75"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0 w-[95vw]"
          data-oid="se.1lho"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="jv2f::h">
              <DialogHeader
                className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2"
                data-oid="6m-bz:p"
              >
                <div
                  className="flex justify-between items-start"
                  data-oid="0j8ed__"
                >
                  <div data-oid="5ogjnys">
                    <Badge className="mb-2" data-oid=":qcd1l3">
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
                      data-oid="1alk_0u"
                    >
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription
                      className="mt-2 text-sm"
                      data-oid="5dqmtjv"
                    >
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="5f1-vy0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="wf12716"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="_gfcsc2"
              >
                <div className="px-4 sm:px-6 border-b" data-oid="7tmchp2">
                  <TabsList
                    className="justify-start rounded-none bg-transparent h-10"
                    data-oid="yl4b0jm"
                  >
                    <TabsTrigger
                      value="overview"
                      className="text-sm"
                      data-oid=".jc93vo"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="details"
                      className="text-sm"
                      data-oid="6:61a32"
                    >
                      Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="gallery"
                      className="text-sm"
                      data-oid="wt:0jwa"
                    >
                      Gallery
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div
                  className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)]"
                  data-oid="b83yxlb"
                >
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="p-lemg."
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                      data-oid="w.kc:gt"
                    >
                      <div className="lg:col-span-2" data-oid="t3:oy3j">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="gvy0j8k"
                        >
                          Project Details
                        </h4>
                        <p
                          className="mb-6 text-sm sm:text-base"
                          data-oid="mwb5mpi"
                        >
                          {selectedProject.longDescription}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="eqf.r1l"
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 mb-6" data-oid=".bt_aag">
                          {selectedProject.achievements.map(
                            (achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid="cd02ibv"
                              >
                                <div
                                  className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                                  data-oid="311.885"
                                >
                                  <span
                                    className="text-xs text-primary"
                                    data-oid="8gujq91"
                                  >
                                    ✓
                                  </span>
                                </div>
                                <span
                                  className="text-sm sm:text-base"
                                  data-oid="2xmg4-3"
                                >
                                  {achievement}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="-j91sio"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="dc7dnjo"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="u2wkjg."
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-3 mt-6"
                          data-oid="pp92l:o"
                        >
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="p_rbclv"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="ij1oj:n"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="i5iutiz"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="sokkczz"
                            >
                              <Github className="h-4 w-4" data-oid="6xstv1_" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="v-6v2co">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="dn15ux6"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="-a08.vz">
                          <div className="flex flex-col" data-oid="l912.vy">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="iwjgoer"
                            >
                              Completed
                            </span>
                            <span data-oid="6a0zr9k">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="1mic0iv">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="cev9x4e"
                            >
                              Team Size
                            </span>
                            <span data-oid="v9gwp1g">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="4djzs3r">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="u1mwwow"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="_-8ni0k">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="m6vefx."
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
                    data-oid="a9qinai"
                  >
                    <div
                      className="relative aspect-video mb-6 rounded-lg overflow-hidden"
                      data-oid="6ijlabo"
                    >
                      <Image
                        src={selectedProject.imageUrl || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        data-oid="5e53orl"
                      />
                    </div>

                    <div className="space-y-6" data-oid="rmesm0y">
                      <div data-oid="o_q:qfd">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="endtehx"
                        >
                          Project Description
                        </h4>
                        <p className="text-sm sm:text-base" data-oid=":pw0erd">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div data-oid="xlsp3pc">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="cwzvlm7"
                        >
                          Implementation Details
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="bhkh40y">
                          This project was implemented using{" "}
                          {selectedProject.technologies.join(", ")}. The
                          development process involved careful planning,
                          iterative development, and rigorous testing to ensure
                          high-quality results.
                        </p>
                      </div>

                      <div data-oid="9owpuz6">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="fdxz.lk"
                        >
                          Challenges & Solutions
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="pctp8hl">
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
                    data-oid="6jfw:4."
                  >
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      data-oid="8xq7miy"
                    >
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="-iogrjh"
                        >
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Screenshot ${index}`}
                            alt={`${selectedProject.title} screenshot ${index}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="qh0ea3w"
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
      data-oid="nc_f2_h"
    >
      <div className="relative aspect-video overflow-hidden" data-oid="3oooq.o">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isClient && isHovered ? "scale-110" : "scale-100",
          )}
          data-oid="49m2_g."
        />

        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r",
            project.color,
          )}
          data-oid="v:jpbik"
        />

        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          data-oid=":horgat"
        >
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/20"
            onClick={onSelect}
            data-oid="9kcki76"
          >
            View Details
          </Button>
        </div>
      </div>

      <CardContent className="p-4 flex-1 flex flex-col" data-oid="j38whg5">
        <div
          className="flex justify-between items-start mb-2"
          data-oid="z9p-9e9"
        >
          <Badge variant="outline" className="text-xs" data-oid=":0acvyv">
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
          <div className="flex" data-oid="--elp05">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                data-oid="l_01e8x"
              />
            ))}
          </div>
        </div>

        <h3 className="font-bold mb-2 line-clamp-1" data-oid="2t0tg02">
          {project.title}
        </h3>
        <p
          className="text-muted-foreground text-sm line-clamp-3 mb-4"
          data-oid="bvabfjl"
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4 mt-auto" data-oid="wrbf:uk">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="text-xs"
              data-oid="_q75l2z"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs" data-oid="ob1xf4_">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div
          className="flex justify-between items-center text-xs text-muted-foreground"
          data-oid="vs2fla."
        >
          <div className="flex items-center gap-1" data-oid="i5zvt-o">
            <Calendar className="h-3 w-3" data-oid="8-ynlpq" />
            <span data-oid="hpyloyf">{project.completed}</span>
          </div>
          <div className="flex items-center gap-1" data-oid="11k6swy">
            <Users className="h-3 w-3" data-oid="n_.1270" />
            <span data-oid="mzdeoip">Team: {project.teamSize}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
