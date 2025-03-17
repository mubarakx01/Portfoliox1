"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

interface SkillLevel {
  area: string;
  value: number;
  fullMark: number;
}

interface SkillGroup {
  name: string;
  skills: SkillLevel[];
  color: string;
}

const skillsData: SkillGroup[] = [
  {
    name: "Machine Learning",
    color: "#8b5cf6",
    skills: [
      { area: "Deep Learning", value: 90, fullMark: 100 },
      { area: "NLP", value: 85, fullMark: 100 },
      { area: "Computer Vision", value: 75, fullMark: 100 },
      { area: "Reinforcement Learning", value: 70, fullMark: 100 },
      { area: "MLOps", value: 60, fullMark: 100 },
      { area: "Generative AI", value: 80, fullMark: 100 },
    ],
  },
  {
    name: "Programming",
    color: "#3b82f6",
    skills: [
      { area: "Python", value: 95, fullMark: 100 },
      { area: "JavaScript/TypeScript", value: 90, fullMark: 100 },
      { area: "C++", value: 75, fullMark: 100 },
      { area: "SQL", value: 80, fullMark: 100 },
      { area: "R", value: 60, fullMark: 100 },
      { area: "MATLAB", value: 50, fullMark: 100 },
    ],
  },
  {
    name: "Frameworks",
    color: "#10b981",
    skills: [
      { area: "PyTorch", value: 90, fullMark: 100 },
      { area: "TensorFlow", value: 85, fullMark: 100 },
      { area: "React", value: 80, fullMark: 100 },
      { area: "Node.js", value: 75, fullMark: 100 },
      { area: "Scikit-learn", value: 95, fullMark: 100 },
      { area: "Hugging Face", value: 80, fullMark: 100 },
    ],
  },
  {
    name: "Infrastructure",
    color: "#f59e0b",
    skills: [
      { area: "Docker", value: 85, fullMark: 100 },
      { area: "Kubernetes", value: 75, fullMark: 100 },
      { area: "AWS", value: 80, fullMark: 100 },
      { area: "GCP", value: 70, fullMark: 100 },
      { area: "CI/CD", value: 60, fullMark: 100 },
      { area: "Microservices", value: 70, fullMark: 100 },
    ],
  },
];

export default function SkillsChart() {
  const [selectedSkillGroup, setSelectedSkillGroup] = useState<SkillGroup>(
    skillsData[0],
  );
  const [isInView, setIsInView] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-background/90 backdrop-blur-sm p-2 rounded-md border shadow-md"
          data-oid="1-9cpdf"
        >
          <p className="font-medium" data-oid="bd37cz.">
            {payload[0].payload.area}
          </p>
          <p className="text-primary" data-oid="_r75.4h">
            {`Proficiency: ${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div ref={chartRef} className="w-full" data-oid="_i4j1o5">
      <div
        className="flex flex-wrap gap-2 justify-center mb-6"
        data-oid="imz3uoy"
      >
        {skillsData.map((group) => (
          <motion.button
            key={group.name}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              selectedSkillGroup.name === group.name
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted hover:bg-muted/80",
            )}
            onClick={() => setSelectedSkillGroup(group)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-oid="b66w6hg"
          >
            {group.name}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait" data-oid="rarsdyk">
        <motion.div
          key={selectedSkillGroup.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-full aspect-square max-w-xl mx-auto"
          data-oid="a00rznx"
        >
          <Card
            className="w-full h-full bg-card/50 border-none overflow-hidden backdrop-blur-sm"
            data-oid="29u-yhl"
          >
            <CardContent className="p-1 h-full" data-oid="umj_.7t">
              <ResponsiveContainer
                width="100%"
                height="100%"
                data-oid="_:on:v1"
              >
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={selectedSkillGroup.skills}
                  data-oid="q3uvbep"
                >
                  <PolarGrid
                    stroke="rgba(255, 255, 255, 0.15)"
                    data-oid="ax_:klo"
                  />

                  <PolarAngleAxis
                    dataKey="area"
                    tick={{
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 12,
                    }}
                    stroke="rgba(255, 255, 255, 0.15)"
                    data-oid="z0mrsjh"
                  />

                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="rgba(255, 255, 255, 0.15)"
                    data-oid="bz.gxlh"
                  />

                  <Tooltip
                    content={<CustomTooltip data-oid="5fr:drz" />}
                    data-oid="ky_9b_9"
                  />

                  <Radar
                    name="Skill Level"
                    dataKey="value"
                    stroke={selectedSkillGroup.color}
                    fill={selectedSkillGroup.color}
                    fillOpacity={0.5}
                    animationDuration={isInView ? 1500 : 0}
                    animationEasing="ease-out"
                    isAnimationActive={isInView}
                    data-oid="dtvo77_"
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div
        className="max-w-xl mx-auto mt-4 text-center text-sm text-muted-foreground"
        data-oid="-d75pak"
      >
        Click on a category to view different skill groups. Hover over the chart
        for specific proficiency levels.
      </div>
    </div>
  );
}
