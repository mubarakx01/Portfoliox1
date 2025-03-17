import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="m7c-cq5">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="ga621il">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid=".pfvsf1"
      >
        <CardHeader className="pb-2" data-oid="ig.ayax">
          <div className="flex items-center gap-2" data-oid="e-wu0yh">
            <GraduationCap className="h-5 w-5" data-oid="a6n--.7" />
            <CardTitle data-oid="x8jg:ex">
              Bachelor of Science in Physics
            </CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="9lsgtaz"
          >
            <div className="text-muted-foreground" data-oid="nb4:a3i">
              City College of New York
            </div>
            <div data-oid="0f7l4v0">2015 - 2019</div>
          </div>
          <div className="text-muted-foreground" data-oid="94vr5yo">
            New York, New York
          </div>
          <div className="text-muted-foreground" data-oid="yx37dbk">
            GPA: 3.8
          </div>
          <div className="text-muted-foreground mt-1" data-oid="50_ibsm">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid="5ep8fwl">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="jl36dae">
            <div data-oid="t5drnyy">
              <h3 className="text-lg font-semibold mb-4" data-oid="mfkguyn">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="8472-z:">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid="_0wtyq-"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="k30f9em"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid="d7_uml0"
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="t0oyvn:"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="5l0uwj2"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="_faem.-"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="y1qpkgh"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="irvc.yq"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="t7yupr9"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid="-7crwni"
                />
              </div>
            </div>

            <div data-oid="1fxmjx:">
              <h3 className="text-lg font-semibold mb-4" data-oid="ey_5xem">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="_04pot3">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="lq4x50:" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="_r7g.n0"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="ptpwf3o" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="8vtw1:o"
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="t83wpfj" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid="blxg0s0"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="y:q_kth">
            <h3 className="text-lg font-semibold mb-4" data-oid="_7uyuty">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="mnzrqh7">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="dg7.pa5"
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid="guc35k-"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid="jje9tqr"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid="w--fhd5"
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
    <div className="flex justify-between items-center" data-oid="s-5j2-y">
      <div data-oid="kvz-71x">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="jltv21i"
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
    <div className="bg-black/20 rounded-lg p-4" data-oid="ex5u.dr">
      <div className="flex items-center gap-2 mb-2" data-oid="hyzk7xr">
        {icon}
        <h4 className="font-medium" data-oid="nz3zqjc">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid="tj0s_s9">
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
    <div data-oid="x-k6b9s">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="0d_ip3b"
      >
        <div data-oid="17nnre2">{name}</div>
        <div data-oid="3y_1ndo">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="tywm8p8" />
    </div>
  );
}
