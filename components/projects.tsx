"use client";

import { useState } from "react";
import {
  Github,
  ExternalLink,
  Code,
  Star,
  Search,
  X,
  Calendar,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";

// Project data
const projects = [
  {
    id: 1,
    title:
      "AI-Driven CNC Machine Health Monitoring: IoT Analytics with Mobile & Dashboard Integration",
    category: "CNC Machine Monitoring & AI",
    description:
      "Developed an end-to-end intelligent monitoring system to predict CNC machine failures, optimize maintenance schedules, and enhance manufacturing efficiency using IoT, AI, and real-time analytics",
    technologies: [
      "React.js/Next.js",
      "PyTorch",
      "WebSockets",
      "FastAPI",
      "SheetJS",
    ],

    difficulty: 5,
    completed: "2025",
    teamSize: 3,
    featured: true,
    demoUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],

    details:
      "A comprehensive voice cloning system that allows for real-time audio processing with minimal latency. The system uses state-of-the-art deep learning models to generate natural-sounding speech that matches the target voice.",
  },
  {
    id: 2,
    title: "DALL-E 2 PyTorch Implementation",
    category: "Generative AI",
    description:
      "Open-source implementation of OpenAI's DALL-E 2 image generation model using PyTorch.",
    technologies: ["PyTorch", "CUDA", "Docker"],
    difficulty: 5,
    completed: "2023-03-01",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],

    details:
      "A PyTorch implementation of the DALL-E 2 architecture for generating high-quality images from text descriptions. The project includes optimizations for CUDA acceleration and containerization with Docker.",
  },
  {
    id: 3,
    title: "Multi-Agent RL Environment",
    category: "Reinforcement Learning",
    description:
      "A flexible environment for training and evaluating multi-agent reinforcement learning algorithms.",
    technologies: ["Python", "TensorFlow", "OpenAI Gym"],
    difficulty: 4,
    completed: "2023-01-20",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A customizable environment for developing and testing multi-agent reinforcement learning algorithms. The system supports various reward structures, observation spaces, and agent interactions.",
  },
  {
    id: 4,
    title: "Community Grant Management System",
    category: "Full-Stack Development",
    description:
      "Web application for managing community grant applications, reviews, and distributions.",
    technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript"],
    difficulty: 3,
    completed: "2022-11-15",
    teamSize: 2,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A full-stack web application that streamlines the process of managing community grants from application to distribution. The system includes features for application submission, review workflows, and financial tracking.",
  },
  {
    id: 5,
    title: "Wikipedia Connection Finder",
    category: "Network Analysis",
    description:
      "Tool for finding the shortest path between any two Wikipedia articles through hyperlinks.",
    technologies: ["Python", "NetworkX", "Flask"],
    difficulty: 3,
    completed: "2022-08-10",
    teamSize: 1,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "An application that analyzes the network structure of Wikipedia to find the shortest path between any two articles. The tool uses graph theory algorithms to navigate through the complex web of hyperlinks.",
  },
  {
    id: 6,
    title: "NYC Education Analytics",
    category: "Data Science",
    description:
      "Data analysis and visualization platform for NYC public school performance metrics.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
    difficulty: 4,
    completed: "2022-05-22",
    teamSize: 4,
    featured: false,
    demoUrl: "#",
    githubUrl: "#",
    images: ["/placeholder.svg?height=400&width=600"],
    details:
      "A comprehensive data analysis platform that processes and visualizes performance metrics from NYC public schools. The system includes predictive models for identifying at-risk students and schools that need additional resources.",
  },
];

// Filter types
type CategoryFilter = string | null;
type DifficultyFilter = number | null;
type TeamSizeFilter = number | null;

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>(null);
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>(null);
  const [teamSizeFilter, setTeamSizeFilter] = useState<TeamSizeFilter>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const featuredProject = projects.find((project) => project.featured);

  // Filter projects based on search and filters
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      !categoryFilter || project.category === categoryFilter;
    const matchesDifficulty =
      !difficultyFilter || project.difficulty === difficultyFilter;
    const matchesTeamSize =
      !teamSizeFilter || project.teamSize === teamSizeFilter;

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesTeamSize
    );
  });

  // Get unique categories for filter
  const categories = Array.from(
    new Set(projects.map((project) => project.category)),
  );

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setCategoryFilter(null);
    setDifficultyFilter(null);
    setTeamSizeFilter(null);
  };

  // Handle demo click
  const handleDemoClick = (url: string) => {
    toast({
      title: "Demo Link",
      description: "Opening demo in a new tab...",
      duration: 3000,
    });
    window.open(url, "_blank");
  };

  return (
    <section id="projects" className="py-12" data-oid="o6dryp-">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="9j9oitg"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="1_5sa5c">
          Projects
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="t3cv9ho"
        >
          Explore my portfolio of AI, machine learning, and software development
          projects. Each project demonstrates different skills and technologies.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12" data-oid="mox8e9g">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-oid="t4fm1jg"
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="dfin0i."
          >
            <Card
              className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              data-oid="qw:ld7p"
            >
              <div className="grid md:grid-cols-2 gap-6" data-oid="jrc3:42">
                <div
                  className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                  data-oid="7efo89q"
                >
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-oid="z0ub42f"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    data-oid="-qp49g1"
                  >
                    <div className="p-4" data-oid="xizfuqk">
                      <Badge className="mb-2" data-oid="myi2-73">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold" data-oid="qngyvjl">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6" data-oid="o6mu6nw">
                  <p className="text-muted-foreground mb-6" data-oid="gu28ydd">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" data-oid="w9y9jm1">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="6efndzo"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6" data-oid="_eje2r8">
                    <div className="flex items-center gap-2" data-oid="frmz0v8">
                      <Calendar
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="fkikbc9"
                      />

                      <span data-oid="50yecz8">
                        Completed: {featuredProject.completed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="9-fe54z">
                      <Users
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="o19lk5b"
                      />

                      <span data-oid="l1tyxp7">
                        Team Size: {featuredProject.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="yzt7iqs">
                      <Star
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="9s8_l.p"
                      />

                      <div className="flex" data-oid="fuf-ww4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            data-oid="pld6_zu"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3" data-oid="sue_hwj">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                      data-oid="1aqqkoq"
                    >
                      <ExternalLink
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="gv.9qzk"
                      />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={() => {
                        setSelectedProject(featuredProject);
                        setIsDialogOpen(true);
                      }}
                      data-oid="85xx4el"
                    >
                      <Code className="h-4 w-4" data-oid="8qofswq" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                      data-oid="-8dr_tp"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="6y3zhro"
                      >
                        <Github className="h-4 w-4" data-oid="3hfun88" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}

      <div className="mb-8" data-oid="_a5vebn">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
          data-oid="85z.62u"
        >
          <div className="relative flex-1" data-oid="795qdbc">
            <Search
              className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              data-oid="9_gk9yw"
            />

            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="rn:d:i5"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-oid="zik8dy0">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
              data-oid="dad.3:g"
            >
              <SelectTrigger className="w-[180px]" data-oid="32ybqki">
                <SelectValue placeholder="Category" data-oid="aqz1jar" />
              </SelectTrigger>
              <SelectContent data-oid="pzj_oox">
                <SelectItem value="all" data-oid="vk7l1-:">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    data-oid="0e95kw1"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={difficultyFilter?.toString() || ""}
              onValueChange={(value) =>
                setDifficultyFilter(value ? Number.parseInt(value) : null)
              }
              data-oid="yqv7tom"
            >
              <SelectTrigger className="w-[180px]" data-oid="s1cr6wg">
                <SelectValue placeholder="Difficulty" data-oid="io5e7tm" />
              </SelectTrigger>
              <SelectContent data-oid="aiqdjgj">
                <SelectItem value="all" data-oid="hudturp">
                  All Difficulties
                </SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem
                    key={level}
                    value={level.toString()}
                    data-oid=":-z8-sv"
                  >
                    {level} {level === 1 ? "Star" : "Stars"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              size="icon"
              onClick={resetFilters}
              className="shrink-0"
              aria-label="Reset filters"
              data-oid="ycsjv.-"
            >
              <X className="h-4 w-4" data-oid="apt2h.s" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            data-oid="vibmvk3"
          >
            <p className="text-muted-foreground" data-oid="10b3jir">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button
              variant="link"
              onClick={resetFilters}
              className="mt-2"
              data-oid="7a5155u"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="yb3d7:c"
          >
            <AnimatePresence data-oid="yz:s63b">
              {filteredProjects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="project-card"
                    data-oid="qzyd99r"
                  >
                    <div className="p-6" data-oid="4hi:d1x">
                      <Badge className="mb-3" data-oid="zmmzdfu">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2" data-oid="oo8_dt6">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mb-4 line-clamp-2"
                        data-oid="59crg_e"
                      >
                        {project.description}
                      </p>

                      <div
                        className="flex flex-wrap gap-1 mb-4"
                        data-oid="r1f7.ny"
                      >
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                            data-oid="c3kwu:l"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="s_b89la"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="g8_lh22"
                      >
                        <div className="flex" data-oid="bcgm0v1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid="isqessh"
                            />
                          ))}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          data-oid="vrhjec-"
                        >
                          Team: {project.teamSize}
                        </div>
                      </div>

                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          setSelectedProject(project);
                          setIsDialogOpen(true);
                        }}
                        data-oid="42.2fbr"
                      >
                        View Details
                      </Button>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        data-oid="xsd1q:0"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
          data-oid="p8jden."
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="imx8eep">
              <DialogHeader className="px-6 pt-6 pb-2" data-oid="4cqxbd5">
                <div
                  className="flex justify-between items-start"
                  data-oid=".lixg2q"
                >
                  <div data-oid="s5grhlt">
                    <Badge className="mb-2" data-oid="npayjq.">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl" data-oid="af8fs98">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2" data-oid="c4.niwx">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="549jzjf">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="0c1qc-t"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="pd_z70x"
              >
                <TabsList
                  className="px-6 justify-start border-b rounded-none"
                  data-oid=":azd38a"
                >
                  <TabsTrigger value="overview" data-oid="252qg5h">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" data-oid="-j_do:3">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" data-oid="6o1p8ax">
                    Interactive Demo
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6" data-oid="2blol1n">
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="steo6-k"
                  >
                    <div
                      className="grid md:grid-cols-3 gap-6"
                      data-oid="pg9wncc"
                    >
                      <div className="md:col-span-2" data-oid="te-05t:">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="ia1lwm8"
                        >
                          Project Details
                        </h4>
                        <p className="mb-6" data-oid="75xnv._">
                          {selectedProject.details}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="2d6aqzz"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="_g-ple7"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="ajl22it"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6" data-oid="_q4zl4x">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="i:qi.tr"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="31-uqgw"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="_h.t:6r"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="_9ikj3o"
                            >
                              <Github className="h-4 w-4" data-oid="imrgr9_" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="8:21yvr">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="ypis1ka"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="4g55f7s">
                          <div className="flex flex-col" data-oid="ei996zc">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="q11bka2"
                            >
                              Completed
                            </span>
                            <span data-oid="rmmqk-y">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="j2na063">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="n226k8k"
                            >
                              Team Size
                            </span>
                            <span data-oid="d8p06zr">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="1fp8syf">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="ahtbfi1"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="72z:w0r">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="ev7u5p4"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="gallery"
                    className="mt-0"
                    data-oid="2092_h0"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="z.6au8j"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="9e-4shj"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="ed.2snt"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0" data-oid="ol:-i3l">
                    <div
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                      data-oid="ssp__3x"
                    >
                      <div className="text-center p-6" data-oid="4b6n1ql">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="sohecda"
                        >
                          Interactive Demo
                        </h4>
                        <p
                          className="text-muted-foreground mb-4"
                          data-oid="8per2re"
                        >
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                          data-oid=".w9xv-y"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="z_z3c9o"
                          />
                          Launch Demo
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
