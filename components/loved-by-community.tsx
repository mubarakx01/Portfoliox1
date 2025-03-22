"use client";

import AnimatedBox from "./animated-box";

export default function LovedByCommunity() {
  return (
    <section className="py-16 md:py-24" data-oid="3oqm4w2">
      <div className="container mx-auto px-4" data-oid="vnj6ml:">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-oid="xae4aob"
        >
          Testimonial
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-oid="2qgdiz_"
        >
          <AnimatedBox
            className="rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm p-8"
            rotateAmount={8}
            glowColor="rgba(255, 136, 0, 0.2)"
            glowIntensity={25}
            data-oid="6cn52t6"
          >
            <p className="text-muted-foreground" data-oid="k7a4:ny">
              "Mubarak's contributions to the AI community have been invaluable.
              His expertise and dedication to helping others learn and grow is
              truly inspiring."
            </p>
            <div className="mt-4" data-oid="t_6vp--">
              <p className="font-semibold" data-oid="1rlo0wm">
                AI Community Member
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox
            className="rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm p-8"
            rotateAmount={8}
            glowColor="rgba(255, 136, 0, 0.2)"
            glowIntensity={25}
            data-oid="f-7jqbc"
          >
            <p className="text-muted-foreground" data-oid="6.0yo69">
              "Working with Mubarak on various projects has been a great
              experience. His technical skills and collaborative approach make
              him an excellent team member."
            </p>
            <div className="mt-4" data-oid="a.dnk84">
              <p className="font-semibold" data-oid="5.3jyte">
                Project Collaborator
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox
            className="rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm p-8"
            rotateAmount={8}
            glowColor="rgba(255, 136, 0, 0.2)"
            glowIntensity={25}
            data-oid="dbhll0j"
          >
            <p className="text-muted-foreground" data-oid="1hjh3fq">
              "Mubarak's innovative solutions and problem-solving abilities have
              helped us achieve remarkable results in our AI initiatives."
            </p>
            <div className="mt-4" data-oid="edmt6qy">
              <p className="font-semibold" data-oid="goj6.b4">
                Industry Professional
              </p>
            </div>
          </AnimatedBox>
        </div>
      </div>
    </section>
  );
}
