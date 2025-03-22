"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Loader2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsClient } from "@/hooks/use-is-client";
import * as THREE from "three";
import { Canvas, useFrame, useThree, ThreeElements } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

interface Skill {
  name: string;
  level: number;
  category?: string;
}

interface SkillsGlobeProps {
  skills: Skill[];
}

// Skills data for the globe
const skills = [
  // Machine Learning & AI
  { name: "Deep Learning", category: "AI", level: 90 },
  { name: "NLP", category: "AI", level: 85 },
  { name: "Computer Vision", category: "AI", level: 85 },
  { name: "Reinforcement Learning", category: "AI", level: 80 },
  { name: "GANs", category: "AI", level: 90 },
  { name: "Transformers", category: "AI", level: 85 },
  { name: "Object Detection", category: "AI", level: 80 },
  // More skills...
];

// Category colors
const categoryColors: Record<string, string> = {
  Programming: "#3b82f6", // blue
  AI: "#8b5cf6", // purple
  Audio: "#ec4899", // pink
  Frameworks: "#10b981", // green
  Data: "#06b6d4", // cyan
  Network: "#f59e0b", // amber
  Cloud: "#0ea5e9", // sky
  Chatbots: "#22c55e", // green
  Security: "#ef4444", // red
  Tools: "#f97316", // orange
  Mathematics: "#14b8a6", // teal
  "Soft Skills": "#8b5cf6", // purple
};

function Scene({ skills }: SkillsGlobeProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} data-oid="ikhwaf7" />
      <pointLight position={[10, 10, 10]} intensity={1} data-oid="9jtpiys" />
      <mesh data-oid="9i80k5n">
        <sphereGeometry args={[2, 32, 32]} data-oid="43m3a3p" />
        <meshPhongMaterial
          color="#000000"
          transparent
          opacity={0.1}
          wireframe
          data-oid="862f1z9"
        />
      </mesh>
      {skills.map((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const position = new THREE.Vector3().setFromSphericalCoords(
          2,
          phi,
          theta,
        );
        const color = skill.category
          ? categoryColors[skill.category] || "#ffffff"
          : "#ffffff";

        return (
          <mesh key={skill.name} position={position} data-oid="1ar217q">
            <sphereGeometry args={[0.1, 16, 16]} data-oid="t.r0dno" />
            <meshPhongMaterial
              color={color}
              emissive={new THREE.Color(color).multiplyScalar(0.2)}
              data-oid="k2um:91"
            />
          </mesh>
        );
      })}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        rotateSpeed={0.5}
        enableZoom={false}
        data-oid="v.n-kzx"
      />
    </>
  );
}

export default function SkillsGlobe({ skills }: SkillsGlobeProps) {
  const [isError, setIsError] = useState(false);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <div
        className="w-full h-[500px] flex items-center justify-center"
        data-oid="9lag7wl"
      >
        <Loader2
          className="h-8 w-8 animate-spin text-primary"
          data-oid="q_wz:wk"
        />
        <span className="ml-2" data-oid=":x7vk7.">
          Loading 3D Globe...
        </span>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className="w-full h-[500px] flex flex-col items-center justify-center text-destructive"
        data-oid="y13r06y"
      >
        <AlertTriangle className="h-8 w-8 mb-2" data-oid="j0j6z:5" />
        <p data-oid="77nzg4z">Failed to load 3D visualization</p>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] relative" data-oid="5ettn.1">
      <Canvas data-oid="if27bd1">
        <Scene skills={skills} data-oid="3tvk-qf" />
      </Canvas>
    </div>
  );
}
