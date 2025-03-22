"use client";

import { useState, useEffect, useRef } from "react";
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
import AnimatedBox from "@/components/animated-box";

// Project categories
const projectCategories = [
  { id: "all", name: "All Projects" },
  {
    id: "ai",
    name: "AI & ML",
    icon: <Cpu className="h-4 w-4" data-oid=".492cu." />,
  },
  {
    id: "audio",
    name: "Audio",
    icon: <Zap className="h-4 w-4" data-oid="vx1x8vn" />,
  },
  {
    id: "web",
    name: "Web Dev",
    icon: <Globe className="h-4 w-4" data-oid="hwxez6x" />,
  },
  {
    id: "data",
    name: "Data Science",
    icon: <Database className="h-4 w-4" data-oid="y3y4jqr" />,
  },
  {
    id: "network",
    name: "Network",
    icon: <Share2 className="h-4 w-4" data-oid="al3z4zw" />,
  },
  {
    id: "security",
    name: "Security",
    icon: <Shield className="h-4 w-4" data-oid="1p-tiqm" />,
  },
  {
    id: "communication",
    name: "Communication",
    icon: <MessageSquare className="h-4 w-4" data-oid="5kd5he4" />,
  },
  {
    id: "research",
    name: "Research",
    icon: <BookOpen className="h-4 w-4" data-oid="b3_3aij" />,
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
    title: "Movie Recommendation System",
    category: "data-science",
    description:
      "A content-based movie recommendation system that suggests similar movies based on input titles using metadata and cosine similarity.",
    longDescription:
      "Built a sophisticated movie recommendation system that leverages content-based filtering techniques. The system processes movie metadata including genres, directors, cast, and plot keywords to create comprehensive feature vectors. Using cosine similarity, it calculates movie similarities and provides personalized recommendations. The project includes data preprocessing, feature extraction, and an interactive Streamlit frontend for real-time testing.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Cosine Similarity",
      "Streamlit",
      "TMDb API",
    ],
    imageUrl: "/lib/file/movie-recommendation-system.png",
    demoUrl: "https://github.com/mubarakx01/Movie-Recommendation-System",
    githubUrl: "https://github.com/mubarakx01/Movie-Recommendation-System",
    color: "from-blue-600 to-cyan-600",
    featured: false,
    completed: "2023",
    teamSize: 1,
    difficulty: 4,
    achievements: [
      "Implemented content-based filtering using cosine similarity",
      "Processed and merged movie metadata for comprehensive feature vectors",
      "Built an interactive Streamlit frontend for real-time testing",
      "Integrated TMDb API for real movie data and posters",
      "Achieved 85% accuracy in movie recommendations",
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
      <SectionContainer id="projects" className="relative" data-oid="kmgzpck">
        <SectionHeader
          title="Project Portfolio"
          subtitle="Explore my portfolio of AI, machine learning, and software development projects."
          data-oid="8-:g762"
        />

        <div
          className="flex justify-center items-center py-20"
          data-oid=":n01ek_"
        >
          <Loader2
            className="h-8 w-8 animate-spin text-primary mr-2"
            data-oid="8bl0a7:"
          />

          <span data-oid=":q8hnjp">Loading projects...</span>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="projects" className="relative" data-oid="em-2ueb">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="hugu_k_"
      />

      <div
        className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10"
        data-oid="wriutws"
      />

      <SectionHeader
        title="Project Portfolio"
        subtitle="Explore my portfolio of AI, machine learning, and software development projects. Each project demonstrates different skills and technologies."
        data-oid="ucow560"
      />

      {featuredProjects.length > 0 && (
        <div className="mb-16" data-oid="4zfbvjs">
          <ScrollReveal data-oid="p1uita9">
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center"
              data-oid="z9tgngg"
            >
              <Layers className="h-5 w-5 text-primary" data-oid="y.rbygr" />
              <span data-oid="mk6la3k">Featured Projects</span>
            </h3>
          </ScrollReveal>

          <ScrollReveal data-oid="28w7:ef">
            <div
              className="relative rounded-xl overflow-hidden"
              data-oid="bgnmh44"
            >
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={direction}
                data-oid="m-m3ks4"
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
                  data-oid="8397wy9"
                >
                  <div
                    className="absolute inset-0 flex flex-col md:flex-row"
                    data-oid="s335vqw"
                  >
                    <div
                      className="relative w-full h-48 md:h-auto md:w-1/2"
                      data-oid="sa9ch.e"
                    >
                      <div
                        className="relative w-full h-full"
                        data-oid="5.tey1g"
                      >
                        <Image
                          src={
                            featuredProjects[currentFeaturedIndex].imageUrl ||
                            "/placeholder.svg"
                          }
                          alt={featuredProjects[currentFeaturedIndex].title}
                          fill
                          priority
                          className="object-cover rounded-md"
                          data-oid="mrqopxv"
                        />
                      </div>
                    </div>

                    <div
                      className={cn(
                        "w-full md:w-1/2 p-6 flex flex-col justify-center opacity-90 bg-gradient-to-r",
                        featuredProjects[currentFeaturedIndex].color,
                      )}
                      data-oid="kbl1aii"
                    >
                      <Badge
                        variant="outline"
                        className="w-fit mb-4 bg-black/50 backdrop-blur-sm text-white border-white/20"
                        data-oid="d33y:4x"
                      >
                        Featured Project
                      </Badge>
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4"
                        data-oid="jbrzr2:"
                      >
                        {featuredProjects[currentFeaturedIndex].title}
                      </h3>
                      <p
                        className="text-white/90 mb-4 md:mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-none"
                        data-oid="lozpy:4"
                      >
                        {featuredProjects[currentFeaturedIndex].description}
                      </p>

                      <div
                        className="flex flex-wrap gap-2 mb-4 md:mb-6"
                        data-oid="q12p_8z"
                      >
                        {featuredProjects[currentFeaturedIndex].technologies
                          .slice(0, 3)
                          .map((tech, index) => (
                            <Badge
                              key={index}
                              className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                              data-oid="rf7hec4"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {featuredProjects[currentFeaturedIndex].technologies
                          .length > 3 && (
                          <Badge
                            className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-sm"
                            data-oid="v7uhc8e"
                          >
                            +
                            {featuredProjects[currentFeaturedIndex].technologies
                              .length - 3}{" "}
                            more
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3" data-oid="h2248.3">
                        <Button
                          className="bg-white text-black hover:bg-white/90 group text-sm"
                          onClick={() =>
                            handleDemoClick(
                              featuredProjects[currentFeaturedIndex].demoUrl,
                            )
                          }
                          data-oid="exqodzu"
                        >
                          Live Demo
                          <ExternalLink
                            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            data-oid="f:8q3s2"
                          />
                        </Button>

                        <Button
                          variant="outline"
                          className="border-white text-white hover:bg-white/20 gap-2 text-sm"
                          asChild
                          data-oid="jj96lq."
                        >
                          <a
                            href={
                              featuredProjects[currentFeaturedIndex].githubUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            data-oid="8bmz.2j"
                          >
                            <Github className="h-4 w-4" data-oid="2v.u60c" />
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
                          data-oid="oy1ug3-"
                        >
                          <Code className="h-4 w-4" data-oid="evjneu." />
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
                data-oid="2ezl-uv"
              >
                <ChevronLeft className="h-5 w-5" data-oid="5lnmc9o" />
              </Button>

              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={handleNext}
                data-oid="b64wrzh"
              >
                <ChevronRight className="h-5 w-5" data-oid="u5xs5mi" />
              </Button>

              {/* Progress dots */}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1"
                data-oid="qia760s"
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
                    data-oid="n.txedq"
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}

      <ScrollReveal data-oid="m9dn63k">
        <Tabs
          defaultValue="all"
          onValueChange={setSelectedCategory}
          className="w-full"
          data-oid="sppiok4"
        >
          <div className="overflow-x-auto pb-2 no-scrollbar" data-oid="txvl5k:">
            <TabsList
              className="flex justify-start gap-2 mb-8 bg-transparent w-max mx-auto"
              data-oid="m3s2xa-"
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
                  data-oid="bk7ifr3"
                >
                  <div
                    className="flex items-center gap-1 sm:gap-2"
                    data-oid=".7utc.s"
                  >
                    {category.icon && category.icon}
                    <span data-oid="xp:tyur">{category.name}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="z7x2t92"
          >
            <AnimatePresence data-oid="jns0azs">
              {filteredProjects.map((project, index) => (
                <ErrorBoundary key={project.id} data-oid="pze9t:y">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    data-oid="-lp.n1b"
                  >
                    <ProjectCard
                      project={project}
                      onSelect={() => {
                        setSelectedProject(project);
                        setIsDialogOpen(true);
                      }}
                      data-oid="ixm0.i4"
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
        data-oid="h_bm6.5"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0 w-[95vw]"
          data-oid="0ll00_0"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="id1.ami">
              <DialogHeader
                className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2"
                data-oid=".-q9fh-"
              >
                <div
                  className="flex justify-between items-start"
                  data-oid="d098u_t"
                >
                  <div data-oid="p0yz0-_">
                    <Badge className="mb-2" data-oid="vrj1ukn">
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
                      data-oid="wocx0qv"
                    >
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription
                      className="mt-2 text-sm"
                      data-oid="x__xwrl"
                    >
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="ool7cck">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="96ybz1v"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="j0gdhqe"
              >
                <div className="px-4 sm:px-6 border-b" data-oid="dcyhwk1">
                  <TabsList
                    className="justify-start rounded-none bg-transparent h-10"
                    data-oid="o3hql82"
                  >
                    <AnimatedBox
                      glowColor={selectedProject.color
                        .split(" ")[1]
                        .replace("to-", "")}
                      glowIntensity={0.5}
                      rotateAmount={1}
                      className="overflow-hidden rounded-md"
                      data-oid=".pwgr3k"
                    >
                      <TabsTrigger
                        value="overview"
                        className="relative text-sm px-4 py-2 data-[state=active]:bg-primary/10"
                        data-oid="4_t5pcz"
                      >
                        Overview
                      </TabsTrigger>
                    </AnimatedBox>

                    <AnimatedBox
                      glowColor={selectedProject.color
                        .split(" ")[1]
                        .replace("to-", "")}
                      glowIntensity={0.5}
                      rotateAmount={1}
                      className="overflow-hidden rounded-md"
                      data-oid="duaporf"
                    >
                      <TabsTrigger
                        value="details"
                        className="relative text-sm px-4 py-2 data-[state=active]:bg-primary/10"
                        data-oid=":hbpt1v"
                      >
                        Details
                      </TabsTrigger>
                    </AnimatedBox>

                    <AnimatedBox
                      glowColor={selectedProject.color
                        .split(" ")[1]
                        .replace("to-", "")}
                      glowIntensity={0.5}
                      rotateAmount={1}
                      className="overflow-hidden rounded-md"
                      data-oid="5xg6nwj"
                    >
                      <TabsTrigger
                        value="gallery"
                        className="relative text-sm px-4 py-2 data-[state=active]:bg-primary/10"
                        data-oid="42jgu0o"
                      >
                        Gallery
                      </TabsTrigger>
                    </AnimatedBox>
                  </TabsList>
                </div>

                <div
                  className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-200px)]"
                  data-oid="9x-zt9v"
                >
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="y.j4m1d"
                  >
                    <div
                      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                      data-oid="hk1p0:-"
                    >
                      <div className="lg:col-span-2" data-oid="whe-rl8">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="2pdlcb1"
                        >
                          Project Details
                        </h4>
                        <p
                          className="mb-6 text-sm sm:text-base"
                          data-oid="b70pl91"
                        >
                          {selectedProject.longDescription}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="-e5l:u1"
                        >
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 mb-6" data-oid="q5k3jty">
                          {selectedProject.achievements.map(
                            (achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2"
                                data-oid=":fejb0g"
                              >
                                <div
                                  className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                                  data-oid="oehrs8b"
                                >
                                  <span
                                    className="text-xs text-primary"
                                    data-oid="5yjbpi6"
                                  >
                                    ✓
                                  </span>
                                </div>
                                <span
                                  className="text-sm sm:text-base"
                                  data-oid="4r1k-p7"
                                >
                                  {achievement}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="5xwgbt3"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="g0-nb1y"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="ejg1icc"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div
                          className="flex flex-wrap gap-3 mt-6"
                          data-oid="4z28au1"
                        >
                          <AnimatedBox
                            glowColor={selectedProject.color
                              .split(" ")[1]
                              .replace("to-", "")}
                            glowIntensity={0.8}
                            rotateAmount={2}
                            className="overflow-hidden rounded-md"
                            data-oid="eoo4aeq"
                          >
                            <Button
                              variant="default"
                              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white hover:opacity-90"
                              onClick={() =>
                                handleDemoClick(selectedProject.demoUrl)
                              }
                              data-oid="q9c6fvd"
                            >
                              <span
                                className="relative z-10 flex items-center gap-2"
                                data-oid="iy71vio"
                              >
                                <ExternalLink
                                  className="h-4 w-4"
                                  data-oid=":dr8dtj"
                                />
                                Live Demo
                              </span>
                            </Button>
                          </AnimatedBox>

                          <AnimatedBox
                            glowColor={selectedProject.color
                              .split(" ")[1]
                              .replace("to-", "")}
                            glowIntensity={0.8}
                            rotateAmount={2}
                            className="overflow-hidden rounded-md"
                            data-oid="mbusu3d"
                          >
                            <Button
                              variant="outline"
                              className="relative overflow-hidden hover:bg-primary/10"
                              asChild
                              data-oid="7iqsund"
                            >
                              <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                                data-oid="n92el-h"
                              >
                                <Github
                                  className="h-4 w-4"
                                  data-oid="y_mv.dr"
                                />
                                GitHub
                              </a>
                            </Button>
                          </AnimatedBox>
                        </div>
                      </div>

                      <div data-oid="dn-xhvd">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="7hbbl:t"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="ky0aw3w">
                          <div className="flex flex-col" data-oid="1x.s9r3">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="sr1zx20"
                            >
                              Completed
                            </span>
                            <span data-oid="m9uti7.">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="k32bpa-">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="h.51c7d"
                            >
                              Team Size
                            </span>
                            <span data-oid="a:d7c6p">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="l5hwx:i">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="ebhpgb1"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="zdv3bv2">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="_1fx.dt"
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
                    data-oid="3ca9vf0"
                  >
                    <div
                      className="relative aspect-video mb-6 rounded-lg overflow-hidden"
                      data-oid="e8:9:hm"
                    >
                      <div
                        className="relative w-full h-full"
                        data-oid="wt:cc1o"
                      >
                        <Image
                          src={selectedProject.imageUrl || "/placeholder.svg"}
                          alt={selectedProject.title}
                          fill
                          className="object-cover rounded-md"
                          data-oid="47:dr76"
                        />
                      </div>
                    </div>

                    <div className="space-y-6" data-oid="i5xfnm4">
                      <div data-oid="ylzzksp">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="dcjgy2n"
                        >
                          Project Description
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="d4zoyyt">
                          {selectedProject.longDescription}
                        </p>
                      </div>

                      <div data-oid="upmu2kf">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="63ghlvj"
                        >
                          Implementation Details
                        </h4>
                        <p className="text-sm sm:text-base" data-oid="86fgk97">
                          This project was implemented using{" "}
                          {selectedProject.technologies.join(", ")}. The
                          development process involved careful planning,
                          iterative development, and rigorous testing to ensure
                          high-quality results.
                        </p>
                      </div>

                      <div data-oid="6eb:y.d">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="vqc29uv"
                        >
                          Challenges & Solutions
                        </h4>
                        <p className="text-sm sm:text-base" data-oid=":.otx69">
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
                    data-oid="inmc-vr"
                  >
                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      data-oid="79x-afe"
                    >
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="u2ubqmp"
                        >
                          <div
                            className="relative aspect-video"
                            data-oid="dj:vdvf"
                          >
                            <Image
                              src={`/placeholder.svg?height=400&width=600&text=Screenshot ${index}`}
                              alt={`${selectedProject.title} screenshot ${index}`}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-110"
                              data-oid="28.9lrx"
                            />
                          </div>
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
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isClient = useIsClient();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <AnimatedBox
      glowColor={project.color.split(" ")[1].replace("to-", "")}
      glowIntensity={isButtonHovered ? 0.8 : 0}
      rotateAmount={isButtonHovered ? 2 : 0}
      hoverScale={1}
      className="w-full"
      data-oid="ryqdv0x"
    >
      <Card
        className="overflow-hidden h-full flex flex-col border-none shadow-md hover:shadow-lg transition-all duration-300 group bg-background/80 backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-oid="sogpwn6"
      >
        <div
          className="relative aspect-video overflow-hidden"
          data-oid="3p5l6ug"
        >
          <div className="relative w-full h-full" data-oid="4o1shf_">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              data-oid="vsvq90j"
            />
          </div>

          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-r",
              project.color,
            )}
            data-oid="2xngt06"
          />

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            data-oid="37argj4"
          >
            <Button
              ref={buttonRef}
              variant="outline"
              className="relative border-white text-white hover:bg-white/20 transition-all duration-300 overflow-hidden"
              onClick={onSelect}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              onMouseMove={handleMouseMove}
              data-oid="hou83e_"
            >
              <span className="relative z-10" data-oid="1xmaoh5">
                View Details
              </span>
              {isButtonHovered && (
                <div
                  className="absolute inset-0 opacity-70 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${project.color.split(" ")[1].replace("to-", "")}, transparent 70%)`,
                  }}
                  data-oid="5dtuf30"
                />
              )}
            </Button>
          </div>
        </div>

        <CardContent className="p-4 flex-1 flex flex-col" data-oid="-1h.5ia">
          <div
            className="flex justify-between items-start mb-2"
            data-oid="w-7.yfa"
          >
            <Badge variant="outline" className="text-xs" data-oid="lwx_x8c">
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
            <div className="flex" data-oid="k943cj9">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                  data-oid="2fo65ib"
                />
              ))}
            </div>
          </div>

          <h3 className="font-bold mb-2 line-clamp-1" data-oid="xaype:e">
            {project.title}
          </h3>
          <p
            className="text-muted-foreground text-sm line-clamp-3 mb-4"
            data-oid=".4i6o6d"
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4 mt-auto" data-oid="e9mca.i">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs"
                data-oid="v0tf0nl"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs" data-oid="zlxz-g.">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>

          <div
            className="flex justify-between items-center text-xs text-muted-foreground"
            data-oid="nes:_im"
          >
            <div className="flex items-center gap-1" data-oid="y0gj7h1">
              <Calendar className="h-3 w-3" data-oid="tc_83-a" />
              <span data-oid="1.3hsfd">{project.completed}</span>
            </div>
            <div className="flex items-center gap-1" data-oid="39nlkga">
              <Users className="h-3 w-3" data-oid="6wwh37e" />
              <span data-oid="2pqdqwc">Team: {project.teamSize}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedBox>
  );
}
