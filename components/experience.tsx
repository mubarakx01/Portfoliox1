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
    <section id="experience" className="py-12" data-oid="n0tub1s">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="xrs9tap">
        Professional Journey
      </h2>

      <div className="space-y-8 mt-12" data-oid="p983lb6">
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
          data-oid=":-bjust"
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
          data-oid="t2yksj5"
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
    <Card className={`${bgColor} border-none`} data-oid="f9.hlzw">
      <CardHeader data-oid="bz8csxl">
        <CardTitle className="text-2xl" data-oid="3c90pph">
          {title}
        </CardTitle>
        <CardDescription className="flex flex-col gap-1" data-oid="rxv6ur2">
          <div className="flex items-center gap-2" data-oid="r988qq7">
            <Building className="h-4 w-4" data-oid="ktngb_2" />
            <span data-oid="zontazr">{company}</span>
          </div>
          <div className="flex items-center gap-2" data-oid="8zaodnn">
            <Calendar className="h-4 w-4" data-oid="g25r1fr" />
            <span data-oid="bylzecd">{period}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="_.q5yyz">
        <div className="grid md:grid-cols-2 gap-8" data-oid="estm9ue">
          <div data-oid="f58fq4a">
            <div className="flex items-center gap-2 mb-4" data-oid="p1.dewb">
              <Trophy className="h-5 w-5" data-oid="gyj0-wn" />
              <h3 className="text-lg font-semibold" data-oid="1:3xt3q">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-3" data-oid="2sbz169">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-oid="7-em.vg"
                >
                  <span className="text-sm mt-1" data-oid="0gt1p1l">
                    •
                  </span>
                  <span data-oid="f-39cwa">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-oid="cuqcg39">
            <div className="flex items-center gap-2 mb-4" data-oid="gf5_9rb">
              <Cpu className="h-5 w-5" data-oid="h3lvpye" />
              <h3 className="text-lg font-semibold" data-oid="j62:_ek">
                Technologies & Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6" data-oid=".f61bx.">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" data-oid="gofpl6-">
                  {tech}
                </Badge>
              ))}
            </div>

            {impact.title && (
              <>
                <h3 className="text-lg font-semibold mb-2" data-oid="hnj_9xv">
                  {impact.title}
                </h3>
                <p className="mb-4" data-oid="2oc2_kj">
                  {impact.description}
                </p>

                <div className="grid grid-cols-3 gap-4" data-oid="kqr65ox">
                  {impact.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg p-4 text-center"
                      data-oid="vqmz.pk"
                    >
                      <div className="text-2xl font-bold" data-oid="_t7q5bf">
                        {metric.value}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="v_5o369"
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
