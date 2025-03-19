import { Calendar, Building, Trophy, Cpu } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="py-12" data-oid="vj:4m_i">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="b2ky7.2">
        Professional Journey
      </h2>

      <div className="space-y-8 mt-12" data-oid="d1uowai">
        <ExperienceCard
          title="Web Designer Internship"
          company="Kshitiksha Foundation"
          period="04/2024" // From your CV
          achievements={[
            "Designed responsive, user-friendly website layouts tailored for Gen Z audiences, enhancing engagement",
            "Integrated interactive elements like scrolling animations and 3D effects using modern web tools",
            "Optimized website performance and accessibility, improving load times and user experience",
            "Collaborated with a small team to deliver visually appealing designs aligned with organizational goals",
          ]}
          technologies={[
            "Figma",
            "Webflow",
            "HTML/CSS",
            "JavaScript",
            "Graphic Design (Photoshop, Illustrator)",
            "SEO",
          ]}
          impact={{
            title: "Overall Impact",
            description:
              "Elevated the foundation’s online presence through innovative web design, reaching a wider audience",
            metrics: [
              { value: "5+", label: "Website Features Implemented" },
              { value: "10%", label: "Performance Improvement" },
              { value: "3", label: "Team Size" },
            ],
          }}
          bgColor="bg-gradient-to-r from-indigo-950 to-purple-950"
          data-oid="_pt43at"
        />

        <ExperienceCard
          title="Data Science Internship"
          company="Shiash Info Solutions Private Limited"
          period="11/2023"
          achievements={[
            "Analyzed datasets using Python and SQL to extract actionable insights for business optimization",
            "Developed machine learning models to support data-driven decision-making processes",
            "Collaborated with a team to deliver data visualizations and reports for stakeholder review",
          ]}
          technologies={[
            "Python",
            "SQL",
            "Machine Learning",
            "Data Analysis",
            "Visualization Tools (e.g., Canva, Figma)",
          ]}
          impact={{
            title: "",
            description: "",
            metrics: [],
          }}
          bgColor="bg-gradient-to-r from-green-950 to-emerald-950"
          data-oid="fmzo6in"
        />
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  technologies: string[];
  impact: {
    title: string;
    description: string;
    metrics: {
      value: string;
      label: string;
    }[];
  };
  bgColor: string;
}

function ExperienceCard({
  title,
  company,
  period,
  achievements,
  technologies,
  impact,
  bgColor,
}: ExperienceCardProps) {
  return (
    <Card className={`${bgColor} border-none`} data-oid="z0ebfuz">
      <CardHeader data-oid="4cazx5_">
        <CardTitle className="text-2xl" data-oid="3:ax0a2">
          {title}
        </CardTitle>
        <CardDescription className="flex flex-col gap-1" data-oid="6lg2abf">
          <div className="flex items-center gap-2" data-oid=":t0:l74">
            <Building className="h-4 w-4" data-oid="j9b_6uu" />
            <span data-oid="gaz59wh">{company}</span>
          </div>
          <div className="flex items-center gap-2" data-oid="-2v4:2o">
            <Calendar className="h-4 w-4" data-oid="e1q3g0f" />
            <span data-oid="9u:fovb">{period}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="kc_l-7g">
        <div className="grid md:grid-cols-2 gap-8" data-oid="qnmx3j8">
          <div data-oid="jtf6qgx">
            <div className="flex items-center gap-2 mb-4" data-oid="qdlyl:.">
              <Trophy className="h-5 w-5" data-oid="v1osxp9" />
              <h3 className="text-lg font-semibold" data-oid="be.uv:q">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-3" data-oid="mdkqnp9">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-oid=".ko76o9"
                >
                  <span className="text-sm mt-1" data-oid="934y1:u">
                    •
                  </span>
                  <span data-oid="kootqrf">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-oid="xxr.1bx">
            <div className="flex items-center gap-2 mb-4" data-oid="etc-26f">
              <Cpu className="h-5 w-5" data-oid="3q6-e0k" />
              <h3 className="text-lg font-semibold" data-oid="s_plbi9">
                Technologies & Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6" data-oid="4mkooju">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" data-oid="txkfvdf">
                  {tech}
                </Badge>
              ))}
            </div>

            {impact.title && (
              <>
                <h3 className="text-lg font-semibold mb-2" data-oid="otzo57l">
                  {impact.title}
                </h3>
                <p className="mb-4" data-oid=".hr5lug">
                  {impact.description}
                </p>

                <div className="grid grid-cols-3 gap-4" data-oid="rmkreqg">
                  {impact.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg p-4 text-center"
                      data-oid="xq6nax5"
                    >
                      <div className="text-2xl font-bold" data-oid="8-oig_0">
                        {metric.value}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="63pojoh"
                      >
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
