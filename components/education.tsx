import type React from "react";
import { BookOpen, GraduationCap, Trophy, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Education() {
  return (
    <section id="education" className="py-12" data-oid="a0j-7-o">
      <h2 className="text-3xl font-bold text-center mb-12" data-oid="3qfvefd">
        Education
      </h2>

      <Card
        className="bg-gradient-to-r from-indigo-950 to-purple-950 border-none"
        data-oid="zh:d9:z"
      >
        <CardHeader className="pb-2" data-oid="eyr6o2o">
          <div className="flex items-center gap-2" data-oid="l7xc86_">
            <GraduationCap className="h-5 w-5" data-oid="vf30ye1" />
            <CardTitle data-oid=":w4fj75">Bachelor of Engineering</CardTitle>
          </div>
          <div
            className="flex justify-between items-center mt-2"
            data-oid="v:_uji9"
          >
            <div className="text-muted-foreground" data-oid="3gmif53">
              City College of Thirvannamalai
            </div>
            <div data-oid="6v6znip">2020 - 2023</div>
          </div>
          <div className="text-muted-foreground" data-oid="_:etlw4">
            Indian ,Tamil nadu
          </div>
          <div className="text-muted-foreground" data-oid="vespqh1"></div>
          <div className="text-muted-foreground mt-1" data-oid="m_7.x9v">
            Relevant Coursework: Machine Learning, Data Structures,
            Computational Physics, Network Science, Data Visualization
          </div>
        </CardHeader>
        <CardContent data-oid="rbct0h:">
          <div className="grid md:grid-cols-2 gap-8 mt-4" data-oid="j_r0fpk">
            <div data-oid="b031w3m">
              <h3 className="text-lg font-semibold mb-4" data-oid="s37_mgm">
                Key Coursework
              </h3>
              <div className="grid grid-cols-2 gap-4" data-oid="n_wl3h:">
                <CourseItem
                  name="Machine Learning"
                  grade="A"
                  data-oid="hu0qi6j"
                />

                <CourseItem
                  name="Data Structures"
                  grade="A"
                  data-oid="d8ddzpj"
                />

                <CourseItem
                  name="Computational Physics"
                  grade="A"
                  data-oid="hpsogib"
                />

                <CourseItem
                  name="Network Science"
                  grade="A"
                  data-oid="y0gzmwx"
                />

                <CourseItem
                  name="Data Visualization"
                  grade="A"
                  data-oid="__39l6g"
                />

                <CourseItem
                  name="Quantum Mechanics"
                  grade="A"
                  data-oid="qi8efm2"
                />

                <CourseItem
                  name="Statistical Mechanics"
                  grade="A"
                  data-oid="a64zecy"
                />

                <CourseItem
                  name="Mathematical Physics"
                  grade="A"
                  data-oid="1wfs3e8"
                />

                <CourseItem
                  name="Differential Equations"
                  grade="A"
                  data-oid="n8kto__"
                />

                <CourseItem
                  name="Linear Algebra"
                  grade="A"
                  data-oid="ck3kyis"
                />
              </div>
            </div>

            <div data-oid="4fq:dsc">
              <h3 className="text-lg font-semibold mb-4" data-oid="4ytcm13">
                Key Achievements
              </h3>
              <div className="space-y-6" data-oid="vroj4yo">
                <AchievementItem
                  icon={<Trophy className="h-5 w-5" data-oid="jm21a4y" />}
                  title="Research Excellence"
                  description="Applied advanced data analysis techniques to physics research projects"
                  data-oid="92lzq22"
                />

                <AchievementItem
                  icon={<CheckCircle className="h-5 w-5" data-oid="blk15s-" />}
                  title="Technical Innovation"
                  description="Developed computational models for complex physical systems"
                  data-oid="z_473lb"
                />

                <AchievementItem
                  icon={<BookOpen className="h-5 w-5" data-oid="_om5d5z" />}
                  title="Academic Leadership"
                  description="Led physics study groups and mentored junior students"
                  data-oid="jx4qy0k"
                />
              </div>
            </div>
          </div>

          <div className="mt-8" data-oid="6mf0rbh">
            <h3 className="text-lg font-semibold mb-4" data-oid="4uqfk_5">
              Skills Developed
            </h3>
            <div className="space-y-4" data-oid="66v1ku4">
              <SkillProgressItem
                name="Scientific Computing"
                value={90}
                data-oid="rtl6r:b"
              />

              <SkillProgressItem
                name="Data Analysis"
                value={85}
                data-oid="5jentmh"
              />

              <SkillProgressItem
                name="Mathematical Modeling"
                value={80}
                data-oid=":72bazc"
              />

              <SkillProgressItem
                name="Research Methods"
                value={95}
                data-oid="mxt-mib"
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
    <div className="flex justify-between items-center" data-oid="a4-1e._">
      <div data-oid="vf1k4fj">{name}</div>
      <div
        className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
        data-oid="v6iexb_"
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
    <div className="bg-black/20 rounded-lg p-4" data-oid=".scf:f_">
      <div className="flex items-center gap-2 mb-2" data-oid="sobgbr:">
        {icon}
        <h4 className="font-medium" data-oid="b5y:rz6">
          {title}
        </h4>
      </div>
      <p className="text-sm text-muted-foreground" data-oid="n3s2y0o">
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
    <div data-oid="9:d:gln">
      <div
        className="flex justify-between items-center mb-1"
        data-oid="qu2x81x"
      >
        <div data-oid="nyqkres">{name}</div>
        <div data-oid="steeqjm">{value}%</div>
      </div>
      <Progress value={value} className="h-2" data-oid="zq-yngl" />
    </div>
  );
}
