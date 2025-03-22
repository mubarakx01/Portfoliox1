"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "./animated-button";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1625]"
      data-oid="uegqdbc"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0" data-oid="j:aoj5_">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#1a1625] to-[#2a2438]"
          data-oid="_v-1kf:"
        />
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          data-oid="syii4j1"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" data-oid="fzclixj">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-oid="vi0ihkr"
        >
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
            data-oid="ll8_vrg"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2"
              data-oid="tvw56cx"
            >
              <div
                className="mb-2 text-sm tracking-[0.2em] text-gray-400 uppercase"
                data-oid="x4hw.rf"
              >
                Welcome to
              </div>
              <div className="relative" data-oid="jtr:ihk">
                <h1
                  className="font-sans text-6xl font-black tracking-tight text-gray-400/80"
                  data-oid="fi1bdag"
                >
                  PORTFOLIO
                </h1>
              </div>
              <div className="relative" data-oid="7i9oyy-">
                <h2
                  className="font-sans text-5xl font-black tracking-tight text-gray-400/80"
                  data-oid="7xkqwt5"
                >
                  OF MINE
                </h2>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mt-8 mb-8"
              data-oid="jhz5joi"
            >
              Full Stack Developer specializing in modern web technologies
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              data-oid="fzx0a-a"
            >
              <AnimatedButton variant="primary" data-oid="jcz4ulf">
                View Projects
              </AnimatedButton>
              <AnimatedButton variant="secondary" data-oid="qbego-t">
                Contact Me
              </AnimatedButton>
              <AnimatedButton variant="outline" data-oid="06e7nk8">
                Download Resume
              </AnimatedButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
            data-oid="nuoliz4"
          >
            <div
              className="relative w-full aspect-square max-w-lg mx-auto"
              data-oid="1ha1lli"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#E07A5F] to-[#F4A261] rounded-full blur-3xl opacity-20"
                data-oid="pdsub-5"
              />
              <div
                className="relative rounded-full overflow-hidden border-4 border-white/10"
                data-oid="0w2rh_7"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                  data-oid="ravh:fq"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
