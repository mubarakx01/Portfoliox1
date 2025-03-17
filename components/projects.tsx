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
    title: "Voice Cloning & Audio Processing Suite",
    category: "Audio Processing & AI",
    description:
      "Comprehensive audio processing system including real-time voice cloning, multilingual transcription, and speaker diarization.",
    technologies: ["TensorFlow TTS", "PyTorch", "Whisper", "FastAPI", "React"],
    difficulty: 5,
    completed: "2023",
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
    <section id="projects" className="py-12" data-oid="ccre.0:">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="q4l:m2j"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="1727wal">
          Projects
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid="f-a7k99"
        >
          Explore my portfolio of AI, machine learning, and software development
          projects. Each project demonstrates different skills and technologies.
        </p>
      </motion.div>

      {featuredProject && (
        <div className="mb-12" data-oid="pj3.8qi">
          <motion.h3
            className="text-xl font-semibold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            data-oid="i393lb_"
          >
            Featured Project
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="ts--3dt"
          >
            <Card
              className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
              data-oid="-j.yz8x"
            >
              <div className="grid md:grid-cols-2 gap-6" data-oid="5kvw5.0">
                <div
                  className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                  data-oid="pu1g0n1"
                >
                  <Image
                    src={featuredProject.images[0] || "/placeholder.svg"}
                    alt={featuredProject.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    data-oid="ytox7iu"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                    data-oid="4hf4uq5"
                  >
                    <div className="p-4" data-oid="_3u.u__">
                      <Badge className="mb-2" data-oid=":k3.ijh">
                        {featuredProject.category}
                      </Badge>
                      <h3 className="text-xl font-bold" data-oid="p__bmp.">
                        {featuredProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6" data-oid="2lwye5s">
                  <p className="text-muted-foreground mb-6" data-oid="fckx3su">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6" data-oid="2lk57r4">
                    {featuredProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-oid="cu9a:m7"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 mb-6" data-oid="pz4l:zw">
                    <div className="flex items-center gap-2" data-oid="srq_g9w">
                      <Calendar
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="_xqdu2v"
                      />
                      <span data-oid="x923a3h">
                        Completed: {featuredProject.completed}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="rp8ouy2">
                      <Users
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="7-lbj6g"
                      />
                      <span data-oid="8aseo:8">
                        Team Size: {featuredProject.teamSize}
                      </span>
                    </div>
                    <div className="flex items-center gap-2" data-oid="1cwg54r">
                      <Star
                        className="h-4 w-4 text-muted-foreground"
                        data-oid="vc83pc6"
                      />
                      <div className="flex" data-oid="wuq2x89">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                            data-oid="hu3j-sh"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3" data-oid="ypvtk1g">
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 group"
                      onClick={() => handleDemoClick(featuredProject.demoUrl)}
                      data-oid=".fonhwq"
                    >
                      <ExternalLink
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="m__hlg."
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
                      data-oid="ym4-mwr"
                    >
                      <Code className="h-4 w-4" data-oid="-:9n-21" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                      data-oid="v.hg49i"
                    >
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-oid="wdb5l-3"
                      >
                        <Github className="h-4 w-4" data-oid="8fps4xh" />
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

      <div className="mb-8" data-oid="5cuh5d0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-6"
          data-oid="520zfee"
        >
          <div className="relative flex-1" data-oid="wtoean5">
            <Search
              className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
              data-oid="au.slle"
            />
            <Input
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-oid="iih1::q"
            />
          </div>

          <div className="flex flex-wrap gap-2" data-oid="gcky3jr">
            <Select
              value={categoryFilter || ""}
              onValueChange={(value) => setCategoryFilter(value || null)}
              data-oid="8eyy09t"
            >
              <SelectTrigger className="w-[180px]" data-oid="bza1_cg">
                <SelectValue placeholder="Category" data-oid="8puzn3b" />
              </SelectTrigger>
              <SelectContent data-oid="gl9povd">
                <SelectItem value="all" data-oid="i4u81bu">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    data-oid=":sm013h"
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
              data-oid="ot5l60q"
            >
              <SelectTrigger className="w-[180px]" data-oid="s6iurce">
                <SelectValue placeholder="Difficulty" data-oid="qh6-_vv" />
              </SelectTrigger>
              <SelectContent data-oid="jxgh5yy">
                <SelectItem value="all" data-oid="ypq-5r2">
                  All Difficulties
                </SelectItem>
                {[1, 2, 3, 4, 5].map((level) => (
                  <SelectItem
                    key={level}
                    value={level.toString()}
                    data-oid="ve4rvdq"
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
              data-oid="a9pocl-"
            >
              <X className="h-4 w-4" data-oid="mle235_" />
            </Button>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
            data-oid="qm5asce"
          >
            <p className="text-muted-foreground" data-oid="xx0ez6c">
              No projects match your filters. Try adjusting your search
              criteria.
            </p>
            <Button
              variant="link"
              onClick={resetFilters}
              className="mt-2"
              data-oid="0lvsqyz"
            >
              Reset Filters
            </Button>
          </motion.div>
        ) : (
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-oid="xuv_nc5"
          >
            <AnimatePresence data-oid="s.um:1d">
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
                    data-oid="gcda7_f"
                  >
                    <div className="p-6" data-oid="tefq74h">
                      <Badge className="mb-3" data-oid="sdi4hfm">
                        {project.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2" data-oid="9:83qck">
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-muted-foreground mb-4 line-clamp-2"
                        data-oid="6kdhk9o"
                      >
                        {project.description}
                      </p>

                      <div
                        className="flex flex-wrap gap-1 mb-4"
                        data-oid="_n:o5r."
                      >
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs"
                            data-oid="exhdf9f"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs"
                            data-oid="1_jkbsz"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div
                        className="flex justify-between items-center mb-4"
                        data-oid="sy0z-2n"
                      >
                        <div className="flex" data-oid=".1.fq-h">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid="9:em1qg"
                            />
                          ))}
                        </div>
                        <div
                          className="text-xs text-muted-foreground"
                          data-oid="etpk0r8"
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
                        data-oid="ljo52k4"
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
        data-oid=".plqg4g"
      >
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
          data-oid="r9lhqs0"
        >
          {selectedProject && (
            <div className="flex flex-col h-full" data-oid="0:ri8j3">
              <DialogHeader className="px-6 pt-6 pb-2" data-oid="k385738">
                <div
                  className="flex justify-between items-start"
                  data-oid="8juwm3y"
                >
                  <div data-oid="3c770s5">
                    <Badge className="mb-2" data-oid="icoq00f">
                      {selectedProject.category}
                    </Badge>
                    <DialogTitle className="text-2xl" data-oid="r:d5:rv">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2" data-oid="i_qd8s:">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                  <div className="flex" data-oid="wcqzc-.">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                        data-oid="_c-4_7z"
                      />
                    ))}
                  </div>
                </div>
              </DialogHeader>

              <Tabs
                defaultValue="overview"
                className="flex-1 overflow-hidden"
                data-oid="49s6rfi"
              >
                <TabsList
                  className="px-6 justify-start border-b rounded-none"
                  data-oid="i4su.x9"
                >
                  <TabsTrigger value="overview" data-oid="v5wd.y2">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="gallery" data-oid="-i3xi:f">
                    Gallery
                  </TabsTrigger>
                  <TabsTrigger value="demo" data-oid="11z_o43">
                    Interactive Demo
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="flex-1 p-6" data-oid="aj.koxd">
                  <TabsContent
                    value="overview"
                    className="mt-0 h-full"
                    data-oid="yr.3o.t"
                  >
                    <div
                      className="grid md:grid-cols-3 gap-6"
                      data-oid="8q8dblp"
                    >
                      <div className="md:col-span-2" data-oid="9:o.id.">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="dn99sww"
                        >
                          Project Details
                        </h4>
                        <p className="mb-6" data-oid=":2a-5in">
                          {selectedProject.details}
                        </p>

                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="q8r4vee"
                        >
                          Technologies
                        </h4>
                        <div
                          className="flex flex-wrap gap-2 mb-6"
                          data-oid="s1-igwv"
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              data-oid="fqozc8r"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-3 mt-6" data-oid="2l6-t7j">
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            data-oid="68ojwz1"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="9n:q1gi"
                            />
                            Live Demo
                          </Button>
                          <Button
                            variant="outline"
                            className="gap-2"
                            asChild
                            data-oid="to9a4io"
                          >
                            <a
                              href={selectedProject.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-oid=":w2oo8a"
                            >
                              <Github className="h-4 w-4" data-oid="wpjqe6r" />
                              GitHub
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div data-oid="k761_fk">
                        <h4
                          className="text-lg font-semibold mb-3"
                          data-oid="qb4k3ky"
                        >
                          Project Info
                        </h4>
                        <div className="space-y-4" data-oid="j01v6k9">
                          <div className="flex flex-col" data-oid=":ocg50t">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="fwa_26d"
                            >
                              Completed
                            </span>
                            <span data-oid="mhsb3gn">
                              {selectedProject.completed}
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="eflposs">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="7znx.3s"
                            >
                              Team Size
                            </span>
                            <span data-oid="aj1d1mf">
                              {selectedProject.teamSize} people
                            </span>
                          </div>
                          <div className="flex flex-col" data-oid="ouue2.4">
                            <span
                              className="text-sm text-muted-foreground"
                              data-oid="blnb14u"
                            >
                              Difficulty
                            </span>
                            <div className="flex" data-oid="2ac3gbe">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                  data-oid="zcir_ut"
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
                    data-oid="pg83:1v"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="t7.q8t2"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden rounded-lg"
                          data-oid="w44_:kv"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                            data-oid="2_mpq_n"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0" data-oid="j29nq68">
                    <div
                      className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                      data-oid="3rury8n"
                    >
                      <div className="text-center p-6" data-oid="chvo2ot">
                        <h4
                          className="text-lg font-semibold mb-2"
                          data-oid="mtfeg-6"
                        >
                          Interactive Demo
                        </h4>
                        <p
                          className="text-muted-foreground mb-4"
                          data-oid="gn:o9ks"
                        >
                          Experience the project firsthand with our interactive
                          demo.
                        </p>
                        <Button
                          onClick={() =>
                            handleDemoClick(selectedProject.demoUrl)
                          }
                          className="gap-2"
                          data-oid="aiptkiv"
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            data-oid="g9mw51k"
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
