import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="oerjfbu">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="ljh2x8b">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid="ocx53uw"
      >
        <CardHeader className="pb-2" data-oid="et19bhg">
          <div className="flex items-center gap-2" data-oid="71.4gfj">
            <GraduationCap className="h-5 w-5" data-oid="lwiks27" />
            <CardTitle data-oid="_a3.7:-">Bachelor of Engineering</CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="llyb729"
          >
            <div className="text-muted-foreground" data-oid="r1l.i79">
              City College of Thirvannamalai
            </div>
            <div data-oid="0f-q5by">2020 - 2023</div>
          </div>
          <div className="text-muted-foreground" data-oid="1z3xhw3">
            Indian ,Tamil nadu
          </div>
          <div className="text-muted-foreground" data-oid="vec-6dp"></div>
          <div className="text-muted-foreground mt-1" data-oid="gwzm6cf">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid="hay6k_o">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="wgq30_8">
            <div data-oid="-bolsek">
              <h3 className="text-lg font-semibold mb-4" data-oid="121:rz1">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="66xoc-4">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid="cn4_eak"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="8ioha0m"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid=":-:ccx."
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="zjrlw-x"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="zhtoelh"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="t9xurig"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="0zpfkic"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="p7qh:39"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="16b5mar"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid="8tt0p36"
                />
              </div>
            </div>

            <div data-oid="i38.0p1">
              <h3 className="text-lg font-semibold mb-4" data-oid="b68x1t7">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="enjn9lz">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="ix084yc" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="7sor65c"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="naaia9v" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="k75ncj6"
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="q9:87z9" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid=".1k60r3"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="gq6l9-x">
            <h3 className="text-lg font-semibold mb-4" data-oid="s9vjpo0">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="4_-2rux">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="pkwqki."
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid=".q-2n0y"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid="40.iv2z"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid="n4kig64"
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
    <div className="flex justify-between items-center" data-oid="mf-2uzr">
      <div data-oid="_yvx_iy">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="pswec08"
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
    <div className="bg-black/20 rounded-lg p-4" data-oid="m_3xvry">
      <div className="flex items-center gap-2 mb-2" data-oid="1glmef5">
        {icon}
        <h4 className="font-medium" data-oid="4c0ec36">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid="t_y0o.6">
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
    <div data-oid="5hgufse">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="grxa:ea"
      >
        <div data-oid="9l4wvom">{name}</div>
        <div data-oid="txf_ltf">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="qosvpbg" />
    </div>
  );
}
