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
    <section id="projects" className="py-12" data-oid="doat:c6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="9-zda6x"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="ph83jqk">
          Projects
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="to8q:ue"
        >
          Explore my portfolio of AI, machine learning, and software development
          projects. Each project demonstrates different skills and technologies.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12" data-oid="ws1twi2">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-oid="rbmhc5g"
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="1sxj5w:"
          >
            <Card
              className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              data-oid="2103zhp"
            >
              <div className="grid md:grid-cols-2 gap-6" data-oid="p-fkdj1">
                <div
                  className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                  data-oid="5vc7vmq"
                >
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-oid="26:3352"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    data-oid="tdl61h2"
                  >
                    <div className="p-4" data-oid="50ea0w9">
                      <Badge className="mb-2" data-oid="md1b0yc">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold" data-oid="rkcla1_">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6" data-oid="94tl1gm">
                  <p className="text-muted-foreground mb-6" data-oid="f1d:70f">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" data-oid="1k63b.t">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="9c1bz77"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6" data-oid=".w46-4h">
                    <div className="flex items-center gap-2" data-oid="hoqv9rc">
                      <Calendar
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="pqhbq67"
                      />

                      <span data-oid="0sap_qw">
                        Completed: {featuredProject.completed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="95:yh04">
                      <Users
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="4pist-x"
                      />

                      <span data-oid="p7ggh__">
                        Team Size: {featuredProject.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="re-1t24">
                      <Star
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="izvtqow"
                      />

                      <div className="flex" data-oid="s8lodm1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            data-oid="u5pbj.w"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3" data-oid=".3pcxea">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                      data-oid="nt_psxt"
                    >
                      <ExternalLink
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="9j6fi9x"
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
                      data-oid="tfr2x7i"
                    >
                      <Code className="h-4 w-4" data-oid="_xvn_o:" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                      data-oid="a67-4ub"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="s2zkop-"
                      >
                        <Github className="h-4 w-4" data-oid="yucnvou" />
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

      <div className="mb-8" data-oid="k:33ln2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
          data-oid="p1y3l0h"
        >
          <div className="relative flex-1" data-oid="j06uast">
            <Search
              className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              data-oid="eo564cs"
            />

            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="9p_r_n6"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-oid="qhhbqw.">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
              data-oid="acljoha"
            >
              <SelectTrigger className="w-[180px]" data-oid="9cdbo:-">
                <SelectValue placeholder="Category" data-oid="htqkkye" />
              </SelectTrigger>
              <SelectContent data-oid="ulj3zxz">
                <SelectItem value="all" data-oid="zqj4u:o">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    data-oid="8-6kh.-"
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
              data-oid="sr607gm"
            >
              <SelectTrigger className="w-[180px]" data-oid="al0bvu8">
                <SelectValue placeholder="Difficulty" data-oid="tc2te:e" />
              </SelectTrigger>
              <SelectContent data-oid="g7_34rk">
                <SelectItem value="all" data-oid="fa32dp3">
                  All Difficulties
                </SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem
                    key={level}
                    value={level.toString()}
                    data-oid="j85usil"
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
              data-oid="-r.veed"
            >
              <X className="h-4 w-4" data-oid="qwa6uy8" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            data-oid="sc1z5d3"
          >
            <p className="text-muted-foreground" data-oid="dg-pbg9">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button
              variant="link"
              onClick={resetFilters}
              className="mt-2"
              data-oid="r5kzpsp"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="ig.0..u"
          >
            <AnimatePresence data-oid="3k3avog">
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
                    data-oid="v08bjj:"
                  >
                    <div className="p-6" data-oid="mjtvhem">
                      <Badge className="mb-3" data-oid=":ipegcb">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2" data-oid="pjv4_b9">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mb-4 line-clamp-2"
                        data-oid="r-bko29"
                      >
                        {project.description}
                      </p>

                      <div
                        className="flex flex-wrap gap-1 mb-4"
                        data-oid="h.1n3z5"
                      >
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                            data-oid="3fi-x-8"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="f.j0d05"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="e099hlq"
                      >
                        <div className="flex" data-oid="ag2f0e8">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid=".li08iv"
                            />
                          ))}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          data-oid=":ru51hd"
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
                        data-oid="3afm6.7"
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
        data-oid="e9_07ho"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
          data-oid="tc.odlk"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="q:c5vka">
              <DialogHeader className="px-6 pt-6 pb-2" data-oid="xyeee10">
                <div
                  className="flex justify-between items-start"
                  data-oid="g52:d09"
                >
                  <div data-oid="sgw1tbo">
                    <Badge className="mb-2" data-oid="ptm6m-b">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl" data-oid="_s_ut6k">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2" data-oid="-8qf.ve">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="jy59vg9">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="kwief46"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="ockq9n:"
              >
                <TabsList
                  className="px-6 justify-start border-b rounded-none"
                  data-oid="tk8_ql2"
                >
                  <TabsTrigger value="overview" data-oid="euioo1y">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" data-oid="9j9dbug">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" data-oid="_66:a7.">
                    Interactive Demo
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6" data-oid=".7ixwt6">
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="vw3-8iu"
                  >
                    <div
                      className="grid md:grid-cols-3 gap-6"
                      data-oid="hew68qg"
                    >
                      <div className="md:col-span-2" data-oid="ltjq:i0">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="qr22r6-"
                        >
                          Project Details
                        </h4>
                        <p className="mb-6" data-oid="gs53e4m">
                          {selectedProject.details}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="abv:mn."
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="z-_dg6m"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="vwwrbkd"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6" data-oid="uv:.75b">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="-t4d6xk"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="vfaombf"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="t29fs3v"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="kkd3f11"
                            >
                              <Github className="h-4 w-4" data-oid=".1rsz1." />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="--rj9:3">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="6ikvrr0"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="2rsjy2:">
                          <div className="flex flex-col" data-oid="e:e7260">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="lewr4ym"
                            >
                              Completed
                            </span>
                            <span data-oid="eewbyz3">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="rl-6lid">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="hxax3gt"
                            >
                              Team Size
                            </span>
                            <span data-oid="gzgr2ui">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="fy86-10">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="p94jxa0"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="x7d1nta">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="lczadbu"
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
                    data-oid="ek3nc8y"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid=":1phwwi"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="dn01_ln"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="hy3wvv9"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0" data-oid="um9z_zo">
                    <div
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                      data-oid="v3qo-zt"
                    >
                      <div className="text-center p-6" data-oid="uag0_0v">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="8.886ox"
                        >
                          Interactive Demo
                        </h4>
                        <p
                          className="text-muted-foreground mb-4"
                          data-oid="ns0p-dt"
                        >
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                          data-oid="k_qzpz2"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="8nykcxy"
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
