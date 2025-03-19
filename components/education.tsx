import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="lgtb-sl">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="5nag_kw">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid="euh2l3q"
      >
        <CardHeader className="pb-2" data-oid="cobqqte">
          <div className="flex items-center gap-2" data-oid="r8-6u:z">
            <GraduationCap className="h-5 w-5" data-oid="uodxzi9" />
            <CardTitle data-oid="-2mcnmc">Bachelor of Engineering</CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="ez_y3on"
          >
            <div className="text-muted-foreground" data-oid="b2f036u">
              City College of Thirvannamalai
            </div>
            <div data-oid="3bl7ok6">2020 - 2023</div>
          </div>
          <div className="text-muted-foreground" data-oid="7cat94s">
            Indian ,Tamil nadu
          </div>
          <div className="text-muted-foreground" data-oid="51jo-so"></div>
          <div className="text-muted-foreground mt-1" data-oid="moacti4">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid=":2:o1l5">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="pija3rp">
            <div data-oid="tmuilzx">
              <h3 className="text-lg font-semibold mb-4" data-oid="_k.qhj4">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="kc2eny2">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid=".aafhkx"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="-ahurof"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid="n6_ioe3"
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="uj6j.6b"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="f34m1uf"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="daq9bcs"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="3om5k5v"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="xhl5_b:"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="3k2:t7m"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid=".7ml5.g"
                />
              </div>
            </div>

            <div data-oid=":3j_sra">
              <h3 className="text-lg font-semibold mb-4" data-oid="o6l2--3">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="f9ss:4q">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="r-86v6y" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="w7mphyy"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="3rwfb-c" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="ss175vb"
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="rb35ib5" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid="dpyt9_l"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="7nru6.u">
            <h3 className="text-lg font-semibold mb-4" data-oid="lk2cn3t">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="08ddrt:">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="qvu3ts0"
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid=":.y7_-m"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid="ka3wkac"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid=":inmakn"
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
    <div className="flex justify-between items-center" data-oid="6f8boy6">
      <div data-oid="ow1zul_">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="4t8prqe"
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
    <div className="bg-black/20 rounded-lg p-4" data-oid=":ahzu-v">
      <div className="flex items-center gap-2 mb-2" data-oid="xt-b9m9">
        {icon}
        <h4 className="font-medium" data-oid="lu36ih8">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid=":sf2i4c">
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
    <div data-oid="8jitjv4">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="rdcf8qh"
      >
        <div data-oid="su22ymj">{name}</div>
        <div data-oid="m8br7t9">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="u84lwk1" />
    </div>
  );
}
