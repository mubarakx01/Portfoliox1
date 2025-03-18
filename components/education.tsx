import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="f368aav">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="23fuk8b">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid="p8lj:iy"
      >
        <CardHeader className="pb-2" data-oid="_h.97m5">
          <div className="flex items-center gap-2" data-oid="rt0nhid">
            <GraduationCap className="h-5 w-5" data-oid="s-2n90-" />
            <CardTitle data-oid="6xi4_a9">Bachelor of Engineering</CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="cbts-bp"
          >
            <div className="text-muted-foreground" data-oid="4pmswav">
              City College of Thirvannamalai
            </div>
            <div data-oid="xqxl76j">2020 - 2023</div>
          </div>
          <div className="text-muted-foreground" data-oid="6f.b:_c">
            Indian ,Tamil nadu
          </div>
          <div className="text-muted-foreground" data-oid="h3amm17"></div>
          <div className="text-muted-foreground mt-1" data-oid="gg22vyp">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid="knbc6ro">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="jm_1yqm">
            <div data-oid="9rikk6g">
              <h3 className="text-lg font-semibold mb-4" data-oid="_kkvjh4">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="yj8h_yy">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid="lk5.r8i"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="5ybw3ci"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid="ajwgkq8"
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="enep:3a"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="3pw86nz"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="v_ij_6i"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="6am7i75"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="fhptyd-"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="kgmndbr"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid="b_s8p9l"
                />
              </div>
            </div>

            <div data-oid="sp4mzwf">
              <h3 className="text-lg font-semibold mb-4" data-oid="e43g0dz">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="5w_owkj">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="seg91tv" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="4jebzeb"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="d.e-7p0" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="r1ptcyc"
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="fsgskd_" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid="n9r1b_z"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="qko0029">
            <h3 className="text-lg font-semibold mb-4" data-oid="c6tzuoi">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="goe6vum">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="850lzf0"
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid="0.4c_kk"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid="nx.3e8c"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid="xxwb9ws"
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
    <div className="flex justify-between items-center" data-oid="gh0orna">
      <div data-oid="8s6le58">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="li.r54i"
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
    <div className="bg-black/20 rounded-lg p-4" data-oid="0_bc._:">
      <div className="flex items-center gap-2 mb-2" data-oid="55_6bmd">
        {icon}
        <h4 className="font-medium" data-oid="hpbetq7">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid=":ha0r-p">
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
    <div data-oid="avnjusx">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="c8b3491"
      >
        <div data-oid="rcoo5g9">{name}</div>
        <div data-oid="sxpadf3">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="h8zjuxn" />
    </div>
  );
}
