import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="mihv5kr">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="p85x7j6">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid="qsmuob_"
      >
        <CardHeader className="pb-2" data-oid="-ucvllh">
          <div className="flex items-center gap-2" data-oid=".tlc2n5">
            <GraduationCap className="h-5 w-5" data-oid="9tbfx76" />
            <CardTitle data-oid="a6sdjat">Bachelor of Engineering</CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="5w68dd1"
          >
            <div className="text-muted-foreground" data-oid="sxw_sih">
              City College of Thirvannamalai
            </div>
            <div data-oid="my83.sx">2020 - 2023</div>
          </div>
          <div className="text-muted-foreground" data-oid=":41b2nd">
            Indian ,Tamil nadu
          </div>
          <div className="text-muted-foreground" data-oid=".6mzuny"></div>
          <div className="text-muted-foreground mt-1" data-oid="pbo-04_">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid="b:gwwmb">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="5n97g-t">
            <div data-oid="cgl21jm">
              <h3 className="text-lg font-semibold mb-4" data-oid=".gh5b65">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="tu.qh6v">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid=":f:uooh"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="to2qa1f"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid="5i0_rcp"
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="g_pepdv"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="yq17q62"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="vc4isy-"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="rtr:d3k"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="afpj5hk"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="-s7xsfa"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid="fq18e0w"
                />
              </div>
            </div>

            <div data-oid=":33z-hf">
              <h3 className="text-lg font-semibold mb-4" data-oid="xacwf31">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="-hqomlc">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="15ytt8b" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="hee-9hd"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="igspdc0" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="n:zm3q."
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="9d12.jw" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid="feqbl1k"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="c5-u1h_">
            <h3 className="text-lg font-semibold mb-4" data-oid="5f6znty">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="vzhjfj_">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="q1_0k:r"
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid="7z:z17n"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid="5he3uw5"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid="p1_vtcp"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

interface CourseItemProps {
  name: string;
  grade: string;
}

function CourseItem({ name, grade }: CourseItemProps) {
  return (
    <div className="flex justify-between items-center" data-oid="l_jxio6">
      <div data-oid="vjqt7sl">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="4sgfa8q"
      >
        {grade}
      </div>
    </div>
  );
}

interface AchievementItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function AchievementItem({ icon, title, description }: AchievementItemProps) {
  return (
    <div className="bg-black/20 rounded-lg p-4" data-oid="g-xq:hw">
      <div className="flex items-center gap-2 mb-2" data-oid="q_qqztl">
        {icon}
        <h4 className="font-medium" data-oid="m5ezk6k">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid="xsyjp97">
        {description}
      </p>
    </div>
  );
}

interface SkillProgressItemProps {
  name: string;
  value: number;
}

function SkillProgressItem({ name, value }: SkillProgressItemProps) {
  return (
    <div data-oid="r-.6zqh">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="xez0iu8"
      >
        <div data-oid="z8326_n">{name}</div>
        <div data-oid="fcyvig-">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="0688.-2" />
    </div>
  );
}
