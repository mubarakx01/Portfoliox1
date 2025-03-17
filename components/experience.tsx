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
    <section id="experience" className="py-12" data-oid="lpz1as6">
      <h2 className="text-3xl font-bold text-center mb-4" data-oid="52zkaby">
        Professional Journey
      </h2>

      <div className="space-y-8 mt-12" data-oid="ss2yelo">
        <ExperienceCard
          title="Technical Program Director"
          company="Rose from Concrete"
          period="January 2021 - Present"
          achievements={[
            "Forged strategic partnerships with 40+ community centers across Brooklyn, deploying ML models to assess and optimize program reach",
            "Developed predictive models using Python, Scikit-learn, and Geopandas on GCP to impact over 20,000 NYC residents",
            "Led implementation of community-focused programs using AWS Lambda and Docker for scalable resource management",
            "Designed decentralized energy solutions and AI-powered monitoring tools for program sustainability",
          ]}
          technologies={[
            "Python",
            "Machine Learning",
            "AWS",
            "Docker",
            "GCP",
            "Community Development",
          ]}
          impact={{
            title: "Overall Impact",
            description:
              "Positively impacted over 20,000 NYC residents through data-driven community programs",
            metrics: [
              { value: "40+", label: "Community Centers" },
              { value: "20,000+", label: "Residents impacted" },
              { value: "15", label: "Team Size" },
            ],
          }}
          bgColor="bg-gradient-to-r from-indigo-950 to-purple-950"
          data-oid="jv0k9e0"
        />

        <ExperienceCard
          title="Lead AP Physics Teacher"
          company="Success Academy High School of the Liberal Arts"
          period="July 2019 - 2022"
          achievements={[
            "Applied advanced data analysis and statistical techniques in Python, optimizing lesson plans for 150+ students",
            'Awarded the "Teacher Excellence Award" for exceptional instructional strategies',
            "Led a team of 13 teachers, fostering a collaborative academic environment",
          ]}
          technologies={[
            "Leadership",
            "Data Analysis",
            "Education",
            "Team Management",
            "Curriculum Development",
          ]}
          impact={{
            title: "",
            description: "",
            metrics: [],
          }}
          bgColor="bg-gradient-to-r from-green-950 to-emerald-950"
          data-oid="ekjkkwi"
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
    <Card className={`${bgColor} border-none`} data-oid="lts8xz3">
      <CardHeader data-oid="zhvtn-:">
        <CardTitle className="text-2xl" data-oid="ahsr26.">
          {title}
        </CardTitle>
        <CardDescription className="flex flex-col gap-1" data-oid="tzr.ii4">
          <div className="flex items-center gap-2" data-oid="cy1290r">
            <Building className="h-4 w-4" data-oid="w5tw7gd" />
            <span data-oid="qdg22ac">{company}</span>
          </div>
          <div className="flex items-center gap-2" data-oid="v61kdho">
            <Calendar className="h-4 w-4" data-oid="pl38l3j" />
            <span data-oid="yc07.2x">{period}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent data-oid="2jxdzk.">
        <div className="grid md:grid-cols-2 gap-8" data-oid="op81c:6">
          <div data-oid="malt.kx">
            <div className="flex items-center gap-2 mb-4" data-oid="9i57--o">
              <Trophy className="h-5 w-5" data-oid="-z8bky5" />
              <h3 className="text-lg font-semibold" data-oid="s.nn0_2">
                Key Achievements
              </h3>
            </div>
            <ul className="space-y-3" data-oid="pmyl52r">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                  data-oid="8d3:95n"
                >
                  <span className="text-sm mt-1" data-oid="g.c0nzw">
                    •
                  </span>
                  <span data-oid="05plnfw">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-oid="xwo-u5p">
            <div className="flex items-center gap-2 mb-4" data-oid="zqjcc6d">
              <Cpu className="h-5 w-5" data-oid="rigmc5h" />
              <h3 className="text-lg font-semibold" data-oid="7g-do_j">
                Technologies & Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-6" data-oid="e-3xyqj">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" data-oid="kyt6uni">
                  {tech}
                </Badge>
              ))}
            </div>

            {impact.title && (
              <>
                <h3 className="text-lg font-semibold mb-2" data-oid="po0mg38">
                  {impact.title}
                </h3>
                <p className="mb-4" data-oid="q0emkh3">
                  {impact.description}
                </p>

                <div className="grid grid-cols-3 gap-4" data-oid="n9xktwk">
                  {impact.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-black/20 rounded-lg p-4 text-center"
                      data-oid="2swp1vo"
                    >
                      <div className="text-2xl font-bold" data-oid="3nibmja">
                        {metric.value}
                      </div>
                      <div
                        className="text-sm text-muted-foreground"
                        data-oid="h4ft:0r"
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
