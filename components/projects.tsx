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
    title: "Movie Recommendation System",
    category: "Data Science",
    description:
      "A content-based movie recommendation system that suggests similar movies based on input titles using metadata and cosine similarity.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "TMDb API"],
    difficulty: 4,
    completed: "2023",
    teamSize: 1,
    featured: false,
    demoUrl: "https://github.com/mubarakx01/Movie-Recommendation-System",
    githubUrl: "https://github.com/mubarakx01/Movie-Recommendation-System",
    images: [
      "/lib/file/movie-recommendation-system.png",
      "/lib/file/movie-ratings-visualization.png",
    ],
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
    <section id="projects" className="py-20" data-oid=".g6-jh3">
      <div className="container mx-auto px-4" data-oid="p3wg86a">
        <div className="text-center space-y-6 mb-16" data-oid="_qlux1v">
          <div
            className="mb-2 text-sm tracking-[0.2em] text-gray-400 uppercase"
            data-oid="0nxmd3y"
          >
            Featured
          </div>
          <div className="relative" data-oid="r5ubwr6">
            <h2
              className="font-sans text-6xl font-black tracking-tight text-gray-400/80"
              data-oid="e8aenpb"
            >
              PROJECTS
            </h2>
          </div>
          <div className="relative" data-oid="zun7f:r">
            <h3
              className="font-sans text-5xl font-black tracking-tight text-gray-400/80"
              data-oid="3oei.vu"
            >
              I'VE DONE
            </h3>
          </div>
          <p
            className="text-gray-400 max-w-[600px] mx-auto text-xl mt-8 leading-relaxed"
            data-oid="sxx9qco"
          >
            Here are some of my recent projects. Each one represents a unique
            challenge and solution.
          </p>
        </div>

        {featuredProject && (
          <div className="mb-12" data-oid="8n.sd34">
            <motion.h3
              className="text-xl font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-oid="60wc4cr"
            >
              Featured Project
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="7.o_o:8"
            >
              <Card
                className="overflow-hidden border-none bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                data-oid="cajdfml"
              >
                <div className="grid md:grid-cols-2 gap-6" data-oid="z:6dreo">
                  <div
                    className="relative aspect-video overflow-hidden rounded-tl-xl md:rounded-l-xl"
                    data-oid="uh9dpld"
                  >
                    <Image
                      src={featuredProject.images[0] || "/placeholder.svg"}
                      alt={featuredProject.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      data-oid="ja.ny.u"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                      data-oid="0th1g.q"
                    >
                      <div className="p-4" data-oid="wr-7vm2">
                        <Badge className="mb-2" data-oid="r2o-hgd">
                          {featuredProject.category}
                        </Badge>
                        <h3 className="text-xl font-bold" data-oid="ljoai1c">
                          {featuredProject.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6" data-oid="0o7z8.j">
                    <p
                      className="text-muted-foreground mb-6"
                      data-oid="vdd60:x"
                    >
                      {featuredProject.description}
                    </p>

                    <div
                      className="flex flex-wrap gap-2 mb-6"
                      data-oid="9pd12u6"
                    >
                      {featuredProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          data-oid="cyf743i"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div
                      className="flex flex-col gap-4 mb-6"
                      data-oid="aeb5k1x"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid="10ie99n"
                      >
                        <Calendar
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="pmnora9"
                        />

                        <span data-oid="rnf167p">
                          Completed: {featuredProject.completed}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="2sn4xjf"
                      >
                        <Users
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="x3judo2"
                        />

                        <span data-oid="cmburtr">
                          Team Size: {featuredProject.teamSize}
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="r0tzg9q"
                      >
                        <Star
                          className="h-4 w-4 text-muted-foreground"
                          data-oid="_ey_h3w"
                        />

                        <div className="flex" data-oid="m53cimo">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < featuredProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                              data-oid="5szk0dk"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3" data-oid="-h2bmf7">
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-2 group"
                        onClick={() => handleDemoClick(featuredProject.demoUrl)}
                        data-oid="3drap99"
                      >
                        <ExternalLink
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          data-oid="-2vaplz"
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
                        data-oid="og802:8"
                      >
                        <Code className="h-4 w-4" data-oid="1ew1qb2" />
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        asChild
                        data-oid="y78d638"
                      >
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-oid="f3jbbhz"
                        >
                          <Github className="h-4 w-4" data-oid="h-.z6p8" />
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

        <div className="mb-8" data-oid="vdarayb">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-6"
            data-oid="qdpmx:4"
          >
            <div className="relative flex-1" data-oid=".dbmxpc">
              <Search
                className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                data-oid=".csa1xv"
              />

              <Input
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-oid="h2.a9ik"
              />
            </div>

            <div className="flex flex-wrap gap-2" data-oid="h9jrssl">
              <Select
                value={categoryFilter || ""}
                onValueChange={(value) => setCategoryFilter(value || null)}
                data-oid="4lag:d."
              >
                <SelectTrigger className="w-[180px]" data-oid="kh1zsmu">
                  <SelectValue placeholder="Category" data-oid="rpynifx" />
                </SelectTrigger>
                <SelectContent data-oid="z71ipvk">
                  <SelectItem value="all" data-oid="dp4aw38">
                    All Categories
                  </SelectItem>
                  {categories.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      data-oid="1tyb98i"
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
                data-oid="25linwm"
              >
                <SelectTrigger className="w-[180px]" data-oid="lu9kr97">
                  <SelectValue placeholder="Difficulty" data-oid="rz5dz7z" />
                </SelectTrigger>
                <SelectContent data-oid="-e4hyzb">
                  <SelectItem value="all" data-oid="r-zq0jm">
                    All Difficulties
                  </SelectItem>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <SelectItem
                      key={level}
                      value={level.toString()}
                      data-oid="bg-563l"
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
                data-oid="7:56e37"
              >
                <X className="h-4 w-4" data-oid="b:igyb8" />
              </Button>
            </div>
          </motion.div>

          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
              data-oid=":3qdhyd"
            >
              <p className="text-muted-foreground" data-oid="u-_xznv">
                No projects match your filters. Try adjusting your search
                criteria.
              </p>
              <Button
                variant="link"
                onClick={resetFilters}
                className="mt-2"
                data-oid="mkaqp3n"
              >
                Reset Filters
              </Button>
            </motion.div>
          ) : (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              data-oid="bsx866q"
            >
              <AnimatePresence data-oid="ux716gt">
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
                      data-oid="39wy40p"
                    >
                      <div className="p-6" data-oid="gle8sjy">
                        <Badge className="mb-3" data-oid="alg_suk">
                          {project.category}
                        </Badge>
                        <h3
                          className="text-lg font-bold mb-2"
                          data-oid="4.7sx.u"
                        >
                          {project.title}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground mb-4 line-clamp-2"
                          data-oid="c0rxex3"
                        >
                          {project.description}
                        </p>

                        <div
                          className="flex flex-wrap gap-1 mb-4"
                          data-oid="omk4xu."
                        >
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs"
                              data-oid=".-yj-ts"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="outline"
                              className="text-xs"
                              data-oid="js8m6-r"
                            >
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>

                        <div
                          className="flex justify-between items-center mb-4"
                          data-oid="qca2hi2"
                        >
                          <div className="flex" data-oid="_hy35bv">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < project.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                data-oid="j2v5yfz"
                              />
                            ))}
                          </div>
                          <div
                            className="text-xs text-muted-foreground"
                            data-oid="zj4ghny"
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
                          data-oid="5glwxut"
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
          data-oid="dlyepa5"
        >
          <DialogContent
            className="max-w-4xl max-h-[90vh] overflow-hidden p-0"
            data-oid="b4y3.3y"
          >
            {selectedProject && (
              <div className="flex flex-col h-full" data-oid=".oo1ijq">
                <DialogHeader className="px-6 pt-6 pb-2" data-oid="76jcygg">
                  <div
                    className="flex justify-between items-start"
                    data-oid="n4.7j4t"
                  >
                    <div data-oid="s8gmer5">
                      <Badge className="mb-2" data-oid="8s8rzq-">
                        {selectedProject.category}
                      </Badge>
                      <DialogTitle className="text-2xl" data-oid="j678.yd">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="mt-2" data-oid="2o8u.v6">
                        {selectedProject.description}
                      </DialogDescription>
                    </div>
                    <div className="flex" data-oid="tjuz5-p">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                          data-oid="fg4cirl"
                        />
                      ))}
                    </div>
                  </div>
                </DialogHeader>

                <Tabs
                  defaultValue="overview"
                  className="flex-1 overflow-hidden"
                  data-oid="lyzh082"
                >
                  <TabsList
                    className="px-6 justify-start border-b rounded-none"
                    data-oid="3cg4nzz"
                  >
                    <TabsTrigger value="overview" data-oid="k0yu1rn">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="gallery" data-oid="ytl_q5y">
                      Gallery
                    </TabsTrigger>
                    <TabsTrigger value="demo" data-oid=".cr7una">
                      Interactive Demo
                    </TabsTrigger>
                  </TabsList>

                  <ScrollArea className="flex-1 p-6" data-oid="93k8r5x">
                    <TabsContent
                      value="overview"
                      className="mt-0 h-full"
                      data-oid="_r264t."
                    >
                      <div
                        className="grid md:grid-cols-3 gap-6"
                        data-oid="f6_yy79"
                      >
                        <div className="md:col-span-2" data-oid="uga1pp3">
                          <h4
                            className="text-lg font-semibold mb-3"
                            data-oid="o8vwjhx"
                          >
                            Project Details
                          </h4>
                          <p className="mb-6" data-oid="b97n4.i">
                            {selectedProject.details}
                          </p>

                          <h4
                            className="text-lg font-semibold mb-3"
                            data-oid="qy-gd44"
                          >
                            Technologies
                          </h4>
                          <div
                            className="flex flex-wrap gap-2 mb-6"
                            data-oid="uhorifu"
                          >
                            {selectedProject.technologies.map((tech, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                data-oid="ger9ux5"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex gap-3 mt-6" data-oid="mbpvni-">
                            <Button
                              variant="default"
                              className="gap-2"
                              onClick={() =>
                                handleDemoClick(selectedProject.demoUrl)
                              }
                              data-oid="m3m_epu"
                            >
                              <ExternalLink
                                className="h-4 w-4"
                                data-oid="jm8e-nj"
                              />
                              Live Demo
                            </Button>
                            <Button
                              variant="outline"
                              className="gap-2"
                              asChild
                              data-oid="iy8l6ya"
                            >
                              <a
                                href={selectedProject.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-oid="zs0k79-"
                              >
                                <Github
                                  className="h-4 w-4"
                                  data-oid="5t2yf0e"
                                />
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>

                        <div data-oid="-m.rtvo">
                          <h4
                            className="text-lg font-semibold mb-3"
                            data-oid="4h4hcdn"
                          >
                            Project Info
                          </h4>
                          <div className="space-y-4" data-oid="7rl43qi">
                            <div className="flex flex-col" data-oid="j.26om4">
                              <span
                                className="text-sm text-muted-foreground"
                                data-oid="zxea934"
                              >
                                Completed
                              </span>
                              <span data-oid="iq9nfpf">
                                {selectedProject.completed}
                              </span>
                            </div>
                            <div className="flex flex-col" data-oid="ptq26n0">
                              <span
                                className="text-sm text-muted-foreground"
                                data-oid="ffrtwx."
                              >
                                Team Size
                              </span>
                              <span data-oid="27ymv0c">
                                {selectedProject.teamSize} people
                              </span>
                            </div>
                            <div className="flex flex-col" data-oid="_7fwrk7">
                              <span
                                className="text-sm text-muted-foreground"
                                data-oid="pzmshb5"
                              >
                                Difficulty
                              </span>
                              <div className="flex" data-oid="_ckt-n6">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < selectedProject.difficulty ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                                    data-oid=".r6o0c:"
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
                      data-oid="0txyiu5"
                    >
                      <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        data-oid="o_u73h:"
                      >
                        {selectedProject.images.map((image, index) => (
                          <div
                            key={index}
                            className="overflow-hidden rounded-lg"
                            data-oid="licg9.e"
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`${selectedProject.title} screenshot ${index + 1}`}
                              width={600}
                              height={400}
                              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
                              data-oid="bpuvup_"
                            />
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="demo"
                      className="mt-0"
                      data-oid="hncdu81"
                    >
                      <div
                        className="aspect-video bg-muted rounded-lg flex items-center justify-center"
                        data-oid="8ws-wna"
                      >
                        <div className="text-center p-6" data-oid="90c8yvg">
                          <h4
                            className="text-lg font-semibold mb-2"
                            data-oid="nu1:myr"
                          >
                            Interactive Demo
                          </h4>
                          <p
                            className="text-muted-foreground mb-4"
                            data-oid="hx-5odz"
                          >
                            Experience the project firsthand with our
                            interactive demo.
                          </p>
                          <Button
                            onClick={() =>
                              handleDemoClick(selectedProject.demoUrl)
                            }
                            className="gap-2"
                            data-oid=".50e5i0"
                          >
                            <ExternalLink
                              className="h-4 w-4"
                              data-oid="yw_tq.7"
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
      </div>
    </section>
  );
}
