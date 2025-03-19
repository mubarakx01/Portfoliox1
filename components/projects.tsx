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
    <section id="projects" className="py-12" data-oid="58s9f-c">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="e40mz_p"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="b5p9cbj">
          Projects
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="ry-ht:p"
        >
          Explore my portfolio of AI, machine learning, and software development
          projects. Each project demonstrates different skills and technologies.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12" data-oid="os47i.j">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-oid="rqtuzhq"
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="szwtf4s"
          >
            <Card
              className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              data-oid="fk-uiix"
            >
              <div className="grid md:grid-cols-2 gap-6" data-oid="-kz5gh_">
                <div
                  className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                  data-oid="klqu..w"
                >
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-oid="ad.i4e4"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    data-oid="wrz83-i"
                  >
                    <div className="p-4" data-oid="n7jyfwo">
                      <Badge className="mb-2" data-oid="o3adviz">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold" data-oid="afi2ama">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6" data-oid="m34wae0">
                  <p className="text-muted-foreground mb-6" data-oid="b_yswz4">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" data-oid="yv.i47o">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="gfspp73"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6" data-oid="zle:tm1">
                    <div className="flex items-center gap-2" data-oid="yf0k.pb">
                      <Calendar
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="vvj4jhd"
                      />

                      <span data-oid="ox7aamm">
                        Completed: {featuredProject.completed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="6xjenqx">
                      <Users
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="ylj185:"
                      />

                      <span data-oid="xcairyj">
                        Team Size: {featuredProject.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="tfg7fbo">
                      <Star
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="b_6umc2"
                      />

                      <div className="flex" data-oid="jv2jnd4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            data-oid=":j40dnk"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3" data-oid="k0smazg">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                      data-oid="p7x44q8"
                    >
                      <ExternalLink
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="wvtbnpv"
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
                      data-oid="6-88_jx"
                    >
                      <Code className="h-4 w-4" data-oid="-2dhds1" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                      data-oid="yk4nbkz"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="dh9ge_k"
                      >
                        <Github className="h-4 w-4" data-oid="nqbkyr5" />
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

      <div className="mb-8" data-oid="gfebqmq">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
          data-oid="_lg8u4u"
        >
          <div className="relative flex-1" data-oid="6yn7okb">
            <Search
              className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              data-oid="3zz:dgy"
            />

            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid=".3yvsgh"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-oid="26aqvas">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
              data-oid="4i4vu7u"
            >
              <SelectTrigger className="w-[180px]" data-oid="-s_sjlq">
                <SelectValue placeholder="Category" data-oid="ec39.pq" />
              </SelectTrigger>
              <SelectContent data-oid="fogv749">
                <SelectItem value="all" data-oid="fiiucmj">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    data-oid="1p1c2eu"
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
              data-oid="enuw5e9"
            >
              <SelectTrigger className="w-[180px]" data-oid="pou_lru">
                <SelectValue placeholder="Difficulty" data-oid="d8d4zps" />
              </SelectTrigger>
              <SelectContent data-oid="5vw4pf8">
                <SelectItem value="all" data-oid=".evv9vk">
                  All Difficulties
                </SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem
                    key={level}
                    value={level.toString()}
                    data-oid="eur04g4"
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
              data-oid="xj2g1ha"
            >
              <X className="h-4 w-4" data-oid=".s:vd2k" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            data-oid="6pp:7zx"
          >
            <p className="text-muted-foreground" data-oid="yfyjh1s">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button
              variant="link"
              onClick={resetFilters}
              className="mt-2"
              data-oid="f8:c5k7"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="85_4xsq"
          >
            <AnimatePresence data-oid="v:-4upa">
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
                    data-oid="rm-:g8d"
                  >
                    <div className="p-6" data-oid="mnou7ms">
                      <Badge className="mb-3" data-oid="49nr:51">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2" data-oid="osgl:y-">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mb-4 line-clamp-2"
                        data-oid="i5dejan"
                      >
                        {project.description}
                      </p>

                      <div
                        className="flex flex-wrap gap-1 mb-4"
                        data-oid="2v7hcis"
                      >
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                            data-oid="lggrjjd"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="83zr_vh"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="_2vsw90"
                      >
                        <div className="flex" data-oid="ylha:4s">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid="zmez6yo"
                            />
                          ))}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          data-oid="smyxaf6"
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
                        data-oid="e6ju_hf"
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
        data-oid="_j024.r"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
          data-oid="wo2ax1f"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="x-jo30z">
              <DialogHeader className="px-6 pt-6 pb-2" data-oid="4ujfm9d">
                <div
                  className="flex justify-between items-start"
                  data-oid="jahs___"
                >
                  <div data-oid=".hh0iep">
                    <Badge className="mb-2" data-oid="4-q5k:s">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl" data-oid="88a--oz">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2" data-oid="zmgf59p">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="zwgmt0v">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="xidgkj."
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="sbrl1in"
              >
                <TabsList
                  className="px-6 justify-start border-b rounded-none"
                  data-oid="jq:rjp-"
                >
                  <TabsTrigger value="overview" data-oid="jo83r7t">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" data-oid="hkwr9x1">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" data-oid="wqc635o">
                    Interactive Demo
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6" data-oid="lt4p46s">
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="-84o6dn"
                  >
                    <div
                      className="grid md:grid-cols-3 gap-6"
                      data-oid="sh5r1bg"
                    >
                      <div className="md:col-span-2" data-oid="nqls74g">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="cok61a4"
                        >
                          Project Details
                        </h4>
                        <p className="mb-6" data-oid="cwhug.l">
                          {selectedProject.details}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="aki:scs"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="t3iendl"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="nbil7df"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6" data-oid="bcab5tq">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="hfqc8fh"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="p5jzijf"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="z-r:nas"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="j8k6s14"
                            >
                              <Github className="h-4 w-4" data-oid="v5gvce0" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="cqe1.db">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="0jlrcnn"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="uyvydv8">
                          <div className="flex flex-col" data-oid="fzp0_8v">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="sto1kk4"
                            >
                              Completed
                            </span>
                            <span data-oid="e4kmknk">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="1qpp2a5">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="4g2u8b-"
                            >
                              Team Size
                            </span>
                            <span data-oid=":8bauj9">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="ffmbize">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="21nvzik"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="_w5yj.n">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="q75l25k"
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
                    data-oid="s0cl4mu"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="m5pm5bi"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="bhvyd_d"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="smmo-ty"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0" data-oid="bypgwvm">
                    <div
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                      data-oid="ii90-th"
                    >
                      <div className="text-center p-6" data-oid="fu.zku-">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="j.7i1oq"
                        >
                          Interactive Demo
                        </h4>
                        <p
                          className="text-muted-foreground mb-4"
                          data-oid="4y-82_i"
                        >
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                          data-oid="84_vb-0"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="yil5p5y"
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
