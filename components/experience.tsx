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
    <section id="experience" className="py-12" data-oid="gu94hqf">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="ma_bpxi">
        Professional Journey
      </h2>

      <div className="space-y-8 mt-12" data-oid="jts6gmk">
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
          data-oid="ffwur7d"
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
          data-oid="l9cdfca"
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
    <Card className={`${bgColor} border-none`} data-oid="h-sc913">
      <CardHeader data-oid="39nyqgf">
        <CardTitle className="text-2xl" data-oid="csuk:6p">
          {title}
        </CardTitle>
        <CardDescription className="flex flex-col gap-1" data-oid="jwl9ubb">
          <div className="flex items-center gap-2" data-oid="c5u67at">
            <Building className="h-4 w-4" data-oid="1e28din" />
            <span data-oid="0uzdfl6">{company}</span>
          </div>
          <div className="flex items-center gap-2" data-oid="or2kmjt">
            <Calendar className="h-4 w-4" data-oid="n4t2hay" />
            <span data-oid=".s4e2i3">{period}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="ovu:-ie">
        <div className="grid md:grid-cols-2 gap-8" data-oid="3h0_dxj">
          <div data-oid="17.ox10">
            <div className="flex items-center gap-2 mb-4" data-oid="uhpsqdw">
              <Trophy className="h-5 w-5" data-oid="in68a3g" />
              <h3 className="text-lg font-semibold" data-oid="29_lgcj">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-3" data-oid="kyo0z4t">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-oid="f6pf1_7"
                >
                  <span className="text-sm mt-1" data-oid="tlq2m1-">
                    •
                  </span>
                  <span data-oid="m1m71fd">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-oid="90oi78j">
            <div className="flex items-center gap-2 mb-4" data-oid="4bgyckm">
              <Cpu className="h-5 w-5" data-oid="p.0g_qd" />
              <h3 className="text-lg font-semibold" data-oid="tt8oxaf">
                Technologies & Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6" data-oid="opj9r-0">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" data-oid="1fbce25">
                  {tech}
                </Badge>
              ))}
            </div>

            {impact.title && (
              <>
                <h3 className="text-lg font-semibold mb-2" data-oid="j04rzs0">
                  {impact.title}
                </h3>
                <p className="mb-4" data-oid="ipkg2:w">
                  {impact.description}
                </p>

                <div className="grid grid-cols-3 gap-4" data-oid="96a80xp">
                  {impact.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg p-4 text-center"
                      data-oid="ddj_0v8"
                    >
                      <div className="text-2xl font-bold" data-oid="qorouxz">
                        {metric.value}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="mwdbida"
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
