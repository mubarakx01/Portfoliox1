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
    <section id="projects" className="py-12" data-oid="bu6tkfe">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="-9bdxgk"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="8smm.:8">
          Projects
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="fcsiw-q"
        >
          Explore my portfolio of AI, machine learning, and software development
          projects. Each project demonstrates different skills and technologies.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12" data-oid="v4n0vcw">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-oid="gf_t8-x"
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="gwis808"
          >
            <Card
              className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              data-oid="6stbegt"
            >
              <div className="grid md:grid-cols-2 gap-6" data-oid="ux4qgql">
                <div
                  className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                  data-oid="j1h5y3_"
                >
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-oid=".t-:_oj"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    data-oid="1dv068x"
                  >
                    <div className="p-4" data-oid=":w69.50">
                      <Badge className="mb-2" data-oid="30k_ige">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold" data-oid="sp1c_av">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6" data-oid="74xrgn1">
                  <p className="text-muted-foreground mb-6" data-oid=":wxndy8">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" data-oid="qm0cjky">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid=":so:1tt"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6" data-oid="vf8ijmo">
                    <div className="flex items-center gap-2" data-oid="0wu7xg5">
                      <Calendar
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="y-1w9uj"
                      />

                      <span data-oid="dxl9-8.">
                        Completed: {featuredProject.completed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="xfdrs8i">
                      <Users
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="39p2e30"
                      />

                      <span data-oid="ccjgt7h">
                        Team Size: {featuredProject.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="svgqi31">
                      <Star
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="q.7o2xx"
                      />

                      <div className="flex" data-oid="2_7:_et">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            data-oid="t8ul0gy"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3" data-oid="pze_.bx">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                      data-oid="icp7tuz"
                    >
                      <ExternalLink
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="p2x.9hm"
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
                      data-oid="ecbq:9f"
                    >
                      <Code className="h-4 w-4" data-oid="3qe9tt4" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                      data-oid="7je1pxu"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="xuzo-hx"
                      >
                        <Github className="h-4 w-4" data-oid=".x0w3uq" />
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

      <div className="mb-8" data-oid="hbi_na2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
          data-oid=":fbp1rt"
        >
          <div className="relative flex-1" data-oid="kzt.1gp">
            <Search
              className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              data-oid="t1.nq90"
            />

            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="aug49.8"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-oid="gn8vqax">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
              data-oid="xq:10me"
            >
              <SelectTrigger className="w-[180px]" data-oid="j9x-:md">
                <SelectValue placeholder="Category" data-oid="7vsv.rm" />
              </SelectTrigger>
              <SelectContent data-oid="akpp4yp">
                <SelectItem value="all" data-oid="dyagklb">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    data-oid="82qeufx"
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
              data-oid="abxby4r"
            >
              <SelectTrigger className="w-[180px]" data-oid="r0770a4">
                <SelectValue placeholder="Difficulty" data-oid="zy-k7x:" />
              </SelectTrigger>
              <SelectContent data-oid="g1ibckh">
                <SelectItem value="all" data-oid="_qnp-ae">
                  All Difficulties
                </SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem
                    key={level}
                    value={level.toString()}
                    data-oid="_b2:o6g"
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
              data-oid="1t46j1x"
            >
              <X className="h-4 w-4" data-oid="5kw57f7" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            data-oid="x0za7bw"
          >
            <p className="text-muted-foreground" data-oid="7-yqdhz">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button
              variant="link"
              onClick={resetFilters}
              className="mt-2"
              data-oid="glm5246"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="as_:3w0"
          >
            <AnimatePresence data-oid="lcwhy1f">
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
                    data-oid="zsy1gx_"
                  >
                    <div className="p-6" data-oid="codi0.v">
                      <Badge className="mb-3" data-oid="ehyv1-u">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2" data-oid="2ukt-4v">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mb-4 line-clamp-2"
                        data-oid="ntegumc"
                      >
                        {project.description}
                      </p>

                      <div
                        className="flex flex-wrap gap-1 mb-4"
                        data-oid="bpjqxj1"
                      >
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                            data-oid="-nhc4d9"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="4tlch.s"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="20uz5:a"
                      >
                        <div className="flex" data-oid="ofgamq6">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid="n26p1vr"
                            />
                          ))}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          data-oid="exg1lpg"
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
                        data-oid="ygptnql"
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
        data-oid="0s9ndk:"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
          data-oid="1v_omw2"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="nj:.y4q">
              <DialogHeader className="px-6 pt-6 pb-2" data-oid="l5_neb3">
                <div
                  className="flex justify-between items-start"
                  data-oid="2hr71ft"
                >
                  <div data-oid="wdo4qhb">
                    <Badge className="mb-2" data-oid="xq:tqov">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl" data-oid="1:9oybz">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2" data-oid=".hm66a4">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="kuou9ki">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="ui9002g"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="lm_7lmg"
              >
                <TabsList
                  className="px-6 justify-start border-b rounded-none"
                  data-oid="3t4rwlb"
                >
                  <TabsTrigger value="overview" data-oid="sbth43v">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" data-oid="gr.rp2e">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" data-oid="0s2iki0">
                    Interactive Demo
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6" data-oid="v1tdiog">
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="pzemsmi"
                  >
                    <div
                      className="grid md:grid-cols-3 gap-6"
                      data-oid="36vyfzh"
                    >
                      <div className="md:col-span-2" data-oid="uwf.uzg">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="li.wdo."
                        >
                          Project Details
                        </h4>
                        <p className="mb-6" data-oid="-qfnett">
                          {selectedProject.details}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="c_3wqra"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="ewa8t7t"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="9f:qe6c"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6" data-oid="itrizn.">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="e_w8s_9"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="2xpdcr8"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="zva0a93"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid="-0x9bfh"
                            >
                              <Github className="h-4 w-4" data-oid="d5l204e" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="y72h9gc">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="wchye2h"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="9p21r_o">
                          <div className="flex flex-col" data-oid="uc31r2a">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="d5r:qu."
                            >
                              Completed
                            </span>
                            <span data-oid="m-l3pbk">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="8fn1.mv">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="cztd.ag"
                            >
                              Team Size
                            </span>
                            <span data-oid="w0co576">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="1ifi.x8">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid=":_ey.js"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="8_ik6bg">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="_g.g5ns"
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
                    data-oid="7hoxqb0"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="po:8old"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="k7qhju0"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="8ed13br"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0" data-oid="9dtz_wm">
                    <div
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                      data-oid="xbrrem2"
                    >
                      <div className="text-center p-6" data-oid="vmqg__:">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="o9ai5db"
                        >
                          Interactive Demo
                        </h4>
                        <p
                          className="text-muted-foreground mb-4"
                          data-oid="t6zocf9"
                        >
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                          data-oid="n27kf4f"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="e_s9ptr"
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
