"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 bg-background text-foreground"
      data-oid="ffazap5"
    >
      <div className="absolute top-4 right-4" data-oid="jrecqc5">
        <ModeToggle data-oid="z6epyg." />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        data-oid="k1s9pcc"
      >
        <Badge
          variant="secondary"
          className="w-fit mb-8 bg-secondary text-secondary-foreground"
          data-oid="pqqkv6."
        >
          Senior Software Engineer
        </Badge>

        <h1
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-happy-hearts to-golden-nugget bg-clip-text text-transparent"
          data-oid="2ayv03d"
        >
          Shaquille Williams
        </h1>

        <p
          className="text-xl text-muted-foreground mb-8 max-w-2xl"
          data-oid="8vkhnyy"
        >
          Senior Software Engineer, AI Specialist, and Community Organizer
          specializing in machine learning, generative AI, cybersecurity, and
          STEM education.
        </p>

        <div className="flex flex-wrap gap-4 mb-8" data-oid="-aa4lvp">
          {["Machine Learning", "Generative AI", "Computer Vision", "NLP"].map(
            (skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-accent/10 text-accent-foreground border-accent/20"
                data-oid=".5.ul1a"
              >
                {skill}
              </Badge>
            ),
          )}
        </div>

        <div className="flex flex-wrap gap-4 mb-12" data-oid="j:gse7y">
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-oid="hmyejk-"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="border-primary/20 hover:bg-primary/10"
            data-oid="3-10ff5"
          >
            Contact Me
          </Button>
        </div>

        <div className="flex gap-4" data-oid="mz5a79c">
          {[
            { icon: Github, href: "https://github.com/swilliams9772" },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/shaquille-williams-957970129",
            },
            { icon: Mail, href: "mailto:contact@example.com" },
          ].map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10"
              asChild
              data-oid="ts:7nhk"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-oid="6tt.-g0"
              >
                <social.icon className="h-5 w-5" data-oid="mbcqx29" />
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
