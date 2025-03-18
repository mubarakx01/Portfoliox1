"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Laptop,
  Code,
  Cpu,
  Database,
  Cloud,
  BookOpen,
  PenToolIcon as Tool,
  Heart,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SkillLevel = "All" | "Expert" | "Advanced" | "Intermediate";

// Skill data
const skillCategories = [
  {
    icon: <Laptop className="h-6 w-6" data-oid="85sx0ki" />,
    title: "Machine Learning & AI",
    skills: [
      { name: "Computer Vision", level: "Advanced", color: "blue", years: 3 },
      {
        name: "Reinforcement Learning",
        level: "Advanced",
        color: "blue",
        years: 3,
      },
      { name: "MLOps", level: "Intermediate", color: "blue", years: 1.5 },
      { name: "Deep Learning", level: "Expert", color: "green", years: 5 },
      { name: "NLP", level: "Expert", color: "green", years: 4.5 },
      { name: "Voice Cloning", level: "Advanced", color: "blue", years: 2.5 },
      { name: "Generative AI", level: "Advanced", color: "green", years: 3 },
    ],
  },
  {
    icon: <Code className="h-6 w-6" data-oid="4_w0udd" />,
    title: "Programming & Development",
    skills: [
      { name: "Python", level: "Expert", color: "blue", years: 6 },
      { name: "C++", level: "Advanced", color: "blue", years: 4 },
      {
        name: "JavaScript/TypeScript",
        level: "Expert",
        color: "blue",
        years: 5,
      },
      { name: "SQL", level: "Advanced", color: "blue", years: 4 },
      { name: "R", level: "Intermediate", color: "blue", years: 2 },
      { name: "MATLAB", level: "Intermediate", color: "yellow", years: 2 },
      { name: "Julia", level: "Intermediate", color: "yellow", years: 1.5 },
    ],
  },
  {
    icon: <Cpu className="h-6 w-6" data-oid="htpba9h" />,
    title: "AI Frameworks & Tools",
    skills: [
      { name: "PyTorch", level: "Expert", color: "green", years: 5 },
      { name: "TensorFlow", level: "Expert", color: "green", years: 5 },
      { name: "Scikit-learn", level: "Expert", color: "green", years: 6 },
      { name: "Hugging Face", level: "Advanced", color: "green", years: 3 },
      { name: "CUDA", level: "Advanced", color: "blue", years: 3 },
      { name: "TensorRT", level: "Intermediate", color: "blue", years: 2 },
      { name: "MLflow", level: "Advanced", color: "blue", years: 3 },
    ],
  },
  {
    icon: <Database className="h-6 w-6" data-oid="-2h.jii" />,
    title: "Data Science & Analytics",
    skills: [
      { name: "Data Mining", level: "Advanced", color: "blue", years: 4 },
      {
        name: "Business Intelligence",
        level: "Intermediate",
        color: "blue",
        years: 2,
      },
      {
        name: "Big Data Processing",
        level: "Advanced",
        color: "blue",
        years: 3,
      },
      { name: "Pandas", level: "Expert", color: "blue", years: 5 },
      { name: "Tableau", level: "Intermediate", color: "blue", years: 2 },
      {
        name: "Data Visualization",
        level: "Advanced",
        color: "green",
        years: 4,
      },
      {
        name: "Predictive Modeling",
        level: "Expert",
        color: "green",
        years: 5,
      },
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" data-oid="e1hhxm0" />,
    title: "Cloud & Infrastructure",
    skills: [
      { name: "GCP", level: "Advanced", color: "blue", years: 3 },
      { name: "Kubernetes", level: "Advanced", color: "blue", years: 3 },
      { name: "CI/CD", level: "Intermediate", color: "blue", years: 2 },
      { name: "Microservices", level: "Intermediate", color: "blue", years: 2 },
      {
        name: "DevOps",
        level: "Intermediate",
        color: 'blue", years:  color: "blue',
        years: 2,
      },
      { name: "DevOps", level: "Intermediate", color: "blue", years: 2 },
      { name: "AWS", level: "Advanced", color: "blue", years: 4 },
      { name: "Docker", level: "Expert", color: "blue", years: 4 },
    ],
  },
  {
    icon: <BookOpen className="h-6 w-6" data-oid="n4236ps" />,
    title: "Research & Analysis",
    skills: [
      { name: "Grant Writing", level: "Advanced", color: "blue", years: 3 },
      { name: "Peer Review", level: "Advanced", color: "blue", years: 4 },
      { name: "Research Methods", level: "Expert", color: "green", years: 5 },
      {
        name: "Experimental Design",
        level: "Advanced",
        color: "green",
        years: 4,
      },
      { name: "Scientific Writing", level: "Expert", color: "green", years: 5 },
    ],
  },
  {
    icon: <Tool className="h-6 w-6" data-oid="psjma.:" />,
    title: "Tools & Technologies",
    skills: [
      { name: "SolidWorks", level: "Intermediate", color: "blue", years: 2 },
      { name: "AutoCAD", level: "Intermediate", color: "blue", years: 2 },
      { name: "Arduino", level: "Intermediate", color: "blue", years: 3 },
      { name: "Git/GitHub", level: "Expert", color: "green", years: 5 },
      { name: "Linux/Unix", level: "Advanced", color: "green", years: 4 },
      { name: "Raspberry Pi", level: "Intermediate", color: "green", years: 3 },
    ],
  },
  {
    icon: <Heart className="h-6 w-6" data-oid="s0ckzq1" />,
    title: "Soft Skills",
    skills: [
      { name: "Technical Writing", level: "Expert", color: "green", years: 6 },
      { name: "Public Speaking", level: "Advanced", color: "green", years: 4 },
      {
        name: "Project Management",
        level: "Advanced",
        color: "green",
        years: 5,
      },
      { name: "Team Leadership", level: "Expert", color: "green", years: 5 },
      { name: "Mentoring", level: "Expert", color: "green", years: 4 },
      { name: "Problem Solving", level: "Expert", color: "green", years: 6 },
      { name: "Critical Thinking", level: "Expert", color: "green", years: 6 },
    ],
  },
  {
    icon: <Microscope className="h-6 w-6" data-oid="ieij6g3" />,
    title: "Physics & Mathematics",
    skills: [
      { name: "Complex Analysis", level: "Advanced", color: "blue", years: 4 },
      { name: "Group Theory", level: "Advanced", color: "blue", years: 3 },
      { name: "Quantum Mechanics", level: "Advanced", color: "blue", years: 4 },
      {
        name: "Statistical Mechanics",
        level: "Advanced",
        color: "blue",
        years: 4,
      },
      {
        name: "Mathematical Physics",
        level: "Advanced",
        color: "blue",
        years: 4,
      },
      {
        name: "Differential Equations",
        level: "Expert",
        color: "green",
        years: 5,
      },
      { name: "Linear Algebra", level: "Expert", color: "green", years: 5 },
    ],
  },
];

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<SkillLevel>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="skills" className="py-12" data-oid="1a25ncp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        data-oid="8d67l0p"
      >
        <h2 className="text-3xl font-bold text-center mb-4" data-oid="_hs6gyj">
          Technical Skills
        </h2>
        <p
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          data-oid=".cxdc1g"
        >
          A comprehensive overview of my technical expertise across various
          domains, from machine learning and AI to software development and
          research.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-4 mb-8"
        data-oid="f5alryl"
      >
        <div className="relative flex-1" data-oid="t5xki_-">
          <Search
            className={cn(
              "absolute left-3 top-3 h-4 w-4 transition-colors duration-200",
              isSearchFocused ? "text-primary" : "text-muted-foreground",
            )}
            data-oid="jsjih1_"
          />

          <Input
            ref={searchRef}
            placeholder="Search skills... (Ctrl+K)"
            className={cn(
              "pl-10 transition-all duration-300",
              isSearchFocused
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            data-oid="_24-bo7"
          />
        </div>

        <div
          className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar"
          data-oid="b30mf30"
        >
          <Button
            variant={selectedLevel === "All" ? "default" : "outline"}
            onClick={() => setSelectedLevel("All")}
            className="transition-all duration-300"
            data-oid="v1-.yy9"
          >
            All
          </Button>
          <Button
            variant={selectedLevel === "Expert" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Expert")}
            className="transition-all duration-300"
            data-oid="9.8.j1n"
          >
            Expert
          </Button>
          <Button
            variant={selectedLevel === "Advanced" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Advanced")}
            className="transition-all duration-300"
            data-oid="hg-weff"
          >
            Advanced
          </Button>
          <Button
            variant={selectedLevel === "Intermediate" ? "default" : "outline"}
            onClick={() => setSelectedLevel("Intermediate")}
            className="transition-all duration-300"
            data-oid="sc9qssu"
          >
            Intermediate
          </Button>
        </div>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-oid="zhylyfh"
      >
        <AnimatePresence data-oid="fupugt4">
          {skillCategories.map((category, categoryIndex) => {
            // Filter skills based on search and level
            const filteredSkills = category.skills.filter((skill) => {
              const matchesSearch = skill.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
              const matchesLevel =
                selectedLevel === "All" || skill.level === selectedLevel;
              return matchesSearch && matchesLevel;
            });

            // Skip rendering if no skills match the filters
            if (filteredSkills.length === 0) return null;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="border rounded-xl p-6 bg-card hover:shadow-lg transition-all duration-300"
                data-oid="3fg_s0j"
              >
                <div
                  className="flex items-center gap-2 mb-4"
                  data-oid="48s3wiq"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + 0.2,
                    }}
                    data-oid="v3uvif5"
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold" data-oid="1gjy6c7">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2" data-oid="q511o6h">
                  <TooltipProvider data-oid="zy:m-yq">
                    {filteredSkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        data-oid="hlk-m59"
                      >
                        <Tooltip data-oid="-j0zz6k">
                          <TooltipTrigger asChild data-oid="57f4w71">
                            <div
                              className={cn(
                                `skill-tag skill-tag-${skill.color}`,
                                hoveredSkill === skill.name ? "scale-110" : "",
                              )}
                              data-oid="l2_4b2_"
                            >
                              {skill.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent
                            side="top"
                            className="animate-fade-in"
                            data-oid="o-ca0p0"
                          >
                            <div className="text-center" data-oid="qhd4dpw">
                              <div className="font-semibold" data-oid="c:6gk2w">
                                {skill.name}
                              </div>
                              <div className="text-xs" data-oid="ag5pqbs">
                                {skill.level} • {skill.years}{" "}
                                {skill.years === 1 ? "year" : "years"}
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </TooltipProvider>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12 gap-8"
        data-oid="r-h24_2"
      >
        <div className="flex items-center gap-2" data-oid="8nu:e71">
          <div
            className="skill-level-expert px-2 py-1 rounded-md"
            data-oid="4a0_cq0"
          >
            Expert
          </div>
          <span data-oid="9tlzk:9">4+ years</span>
        </div>
        <div className="flex items-center gap-2" data-oid="e8wp5_y">
          <div
            className="skill-level-advanced px-2 py-1 rounded-md"
            data-oid="m5sqizz"
          >
            Advanced
          </div>
          <span data-oid="g973mkg">2-4 years</span>
        </div>
        <div className="flex items-center gap-2" data-oid="x6-mtc-">
          <div
            className="skill-level-intermediate px-2 py-1 rounded-md"
            data-oid="amtmz2b"
          >
            Intermediate
          </div>
          <span data-oid="t9lin1v">1-2 years</span>
        </div>
      </motion.div>
    </section>
  );
}
