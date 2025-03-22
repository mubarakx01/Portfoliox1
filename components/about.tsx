"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12" data-oid="5uh:yn6">
      <div className="container max-w-5xl mx-auto px-4" data-oid="h-:gv0w">
        <div className="text-center space-y-6 mb-16" data-oid="afsd03y">
          <div
            className="mb-2 text-sm tracking-[0.2em] text-gray-400 uppercase"
            data-oid="79gl:ri"
          >
            Introducing
          </div>
          <div className="relative" data-oid="nrx-4v0">
            <h2
              className="font-sans text-6xl font-black tracking-tight text-gray-400/80"
              data-oid="-1w:6w1"
            >
              ABOUT
            </h2>
          </div>
          <div className="relative mt-4" data-oid=".bzdoyk">
            <h3
              className="font-sans text-5xl font-black tracking-tight text-gray-400/80"
              data-oid="g1abuw3"
            >
              ME
            </h3>
          </div>
          <p
            className="font-sans text-gray-400 max-w-[300px] mx-auto text-xl mt-8 leading-relaxed"
            data-oid="6eefdc7"
          >
            I'm a passionate developer with expertise in creating beautiful and
            functional web experiences.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          data-oid="r8ijf5z"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
            data-oid="yr:14sx"
          >
            <div
              className="relative w-full aspect-square max-w-lg mx-auto"
              data-oid="pmk4fr2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#E07A5F] to-[#F4A261] rounded-full blur-3xl opacity-20"
                data-oid="2yhreg3"
              />
              <div
                className="relative rounded-full overflow-hidden border-4 border-[#E07A5F]/20"
                data-oid="2yaifkb"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                  data-oid="c1pnbgj"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
            data-oid="ct27ox5"
          >
            <div
              className="relative p-8 rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm"
              data-oid="o6r09pa"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#E07A5F]/5 to-[#F4A261]/5 rounded-xl"
                data-oid="7b-en_9"
              />
              <div className="relative space-y-6" data-oid="1p22-5t">
                <div className="space-y-4" data-oid="-5tbf4b">
                  <div className="relative mb-1" data-oid="it32sgo">
                    <div
                      className="font-sans text-2xl font-black tracking-tight text-gray-400/80"
                      data-oid="j9dba6k"
                    >
                      SOFTWARE ENGINEER
                    </div>
                  </div>
                  <p
                    className="text-gray-300 text-lg leading-relaxed"
                    data-oid="84_i:8t"
                  >
                    I started my journey in web development with a passion for
                    creating beautiful and functional websites. Over the years,
                    I've worked on various projects ranging from small business
                    websites to complex web applications.
                  </p>
                </div>

                <div className="space-y-4" data-oid="brl7q:a">
                  <div className="relative mb-1" data-oid="sesx89j">
                    <div
                      className="font-sans text-2xl font-black tracking-tight text-gray-400/80"
                      data-oid="61gb3ga"
                    >
                      PROFESSIONAL JOURNEY
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2" data-oid="f83n66.">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "Python",
                      "UI/UX Design",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full border border-[#E07A5F]/20 bg-background/50 text-gray-300 backdrop-blur-sm"
                        data-oid="os5_6um"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4" data-oid="e9lv82f">
                  <div className="relative mb-1" data-oid="0q-lvec">
                    <div
                      className="font-sans text-2xl font-black tracking-tight text-gray-400/80"
                      data-oid="umcromc"
                    >
                      PROJECT PORTFOLIO
                    </div>
                  </div>
                  <div className="space-y-4" data-oid="e7yz3.1">
                    <div
                      className="p-4 rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm"
                      data-oid=".sm-_uh"
                    >
                      <div
                        className="font-sans text-xl font-black tracking-tight text-gray-400/80"
                        data-oid="qwrr90_"
                      >
                        FEATURED PROJECTS
                      </div>
                      <p className="text-gray-300" data-oid="ot_:ujb">
                        Tech Company • 2020 - Present
                      </p>
                    </div>
                    <div
                      className="p-4 rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm"
                      data-oid="3anl9g2"
                    >
                      <div
                        className="font-sans text-xl font-black tracking-tight text-gray-400/80"
                        data-oid="8shg2le"
                      >
                        CASE STUDIES
                      </div>
                      <p className="text-gray-300" data-oid=".r2ktqr">
                        Digital Agency • 2018 - 2020
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4" data-oid="ydateo7">
                  <div className="relative mb-1" data-oid="i:e27jb">
                    <div
                      className="font-sans text-2xl font-black tracking-tight text-gray-400/80"
                      data-oid="j3i528s"
                    >
                      EDUCATION
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm"
                    data-oid="nt6ovx3"
                  >
                    <div
                      className="font-sans text-xl font-black tracking-tight text-gray-400/80"
                      data-oid="j4-wm5r"
                    >
                      Computer Science
                    </div>
                    <p className="text-gray-300" data-oid="upl-mph">
                      University Name • 2015 - 2019
                    </p>
                  </div>
                </div>

                <div className="space-y-4" data-oid="wo3orb6">
                  <div className="relative mb-1" data-oid="k00c8ph">
                    <div
                      className="font-sans text-2xl font-black tracking-tight text-gray-400/80"
                      data-oid="bt_j926"
                    >
                      TESTIMONIALS
                    </div>
                  </div>
                  <div
                    className="p-4 rounded-xl border border-[#E07A5F]/20 bg-background/50 backdrop-blur-sm"
                    data-oid="swb:a2m"
                  >
                    <p className="text-gray-300 italic" data-oid="6vmtmmi">
                      "Outstanding work and exceptional communication throughout
                      the project."
                    </p>
                    <p className="text-gray-400 mt-2" data-oid="jj_3h_t">
                      - Client Name, Company
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
