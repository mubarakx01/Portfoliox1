"use client";

import React from "react";
import AnimatedContainer from "./AnimatedContainer";
import {
  ChevronRight,
  Mail,
  Phone,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

export default function AnimationExample() {
  return (
    <div className="py-12 container mx-auto max-w-6xl px-4" data-oid="gl4.4kd">
      <h1 className="text-4xl font-bold text-center mb-12" data-oid="68f0h89">
        Interactive Animation Examples
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="6tmlwjp">
        <div className="space-y-4" data-oid="9bo-0l8">
          <h2 className="text-2xl font-bold mb-4" data-oid="1er8nmm">
            Mouse-Tracking Boxes
          </h2>
          <p className="text-gray-600 mb-6" data-oid="i1lp2b.">
            Hover over these boxes to see 3D rotation and glow effects that
            follow your mouse.
          </p>

          <AnimatedContainer
            className="rounded-xl border border-blue-200 p-6 bg-white shadow-sm"
            rotateAmount={3}
            glowColor="rgba(59, 130, 246, 0.3)"
            enterAnimation="fade"
            data-oid="3jcj7fp"
          >
            <h3 className="text-xl font-semibold mb-2" data-oid="oj9vjz-">
              Card with Blue Glow
            </h3>
            <p className="text-gray-600" data-oid="adrsbz-">
              This card has a blue glow effect and more pronounced rotation. Try
              moving your mouse around to see how it tracks your movement.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            className="rounded-xl border border-purple-200 p-6 bg-white shadow-sm"
            rotateAmount={1.5}
            glowColor="rgba(147, 51, 234, 0.3)"
            enterAnimation="slide-up"
            delay={0.1}
            data-oid="7rrs1qq"
          >
            <h3 className="text-xl font-semibold mb-2" data-oid="pmhd-f_">
              Card with Purple Glow
            </h3>
            <p className="text-gray-600" data-oid="pejkcjp">
              This card has a subtle rotation effect with a purple glow. The
              animation is more subtle for a refined experience.
            </p>
          </AnimatedContainer>
        </div>

        <div className="space-y-4" data-oid="1i5j8b2">
          <h2 className="text-2xl font-bold mb-4" data-oid="2dznf-q">
            Interactive Elements
          </h2>
          <p className="text-gray-600 mb-6" data-oid="-wvsn49">
            These elements have different entrance animations and hover effects.
          </p>

          <div className="grid grid-cols-2 gap-4" data-oid=":u_m7.x">
            {["slide-left", "slide-right", "slide-up", "slide-down"].map(
              (animation, index) => (
                <AnimatedContainer
                  key={animation}
                  className="rounded-xl border border-gray-200 p-4 bg-white text-center"
                  enterAnimation={animation as any}
                  delay={index * 0.1}
                  rotateAmount={1}
                  hoverScale={1.05}
                  data-oid="ut-9vux"
                >
                  <p className="font-medium" data-oid="s_v64ah">
                    {animation}
                  </p>
                  <p className="text-sm text-gray-500" data-oid="axcj42f">
                    Entrance Animation
                  </p>
                </AnimatedContainer>
              ),
            )}
          </div>

          <AnimatedContainer
            className="rounded-xl border border-green-200 p-6 bg-white shadow-sm mt-4"
            rotateAmount={1}
            glowColor="rgba(16, 185, 129, 0.3)"
            enterAnimation="zoom"
            delay={0.3}
            data-oid="g0l3y3s"
          >
            <h3 className="text-xl font-semibold mb-2" data-oid="dg0cut_">
              Zoom Animation
            </h3>
            <p className="text-gray-600" data-oid="o205lu1">
              This card enters with a zoom animation and has a green glow
              effect.
            </p>
          </AnimatedContainer>
        </div>
      </div>

      <div className="mt-12" data-oid="klec14n">
        <h2 className="text-2xl font-bold mb-6" data-oid="ggr2-09">
          Contact Buttons with Animation
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          data-oid=".-rc2yr"
        >
          {[
            {
              name: "Email",
              icon: <Mail className="h-5 w-5" data-oid="4-3ix40" />,
              color: "rgba(239, 68, 68, 0.3)",
              borderColor: "border-red-200",
            },
            {
              name: "Phone",
              icon: <Phone className="h-5 w-5" data-oid="h5eoyvc" />,
              color: "rgba(16, 185, 129, 0.3)",
              borderColor: "border-green-200",
            },
            {
              name: "Social",
              icon: <Twitter className="h-5 w-5" data-oid="guwdumt" />,
              color: "rgba(59, 130, 246, 0.3)",
              borderColor: "border-blue-200",
            },
          ].map((item, index) => (
            <AnimatedContainer
              key={item.name}
              className={`rounded-xl ${item.borderColor} border p-4 bg-white shadow-sm`}
              rotateAmount={1}
              glowColor={item.color}
              enterAnimation="slide-up"
              delay={index * 0.1}
              data-oid="9:glrsl"
            >
              <div
                className="flex items-center justify-between"
                data-oid="va64be9"
              >
                <div className="flex items-center space-x-3" data-oid="juem76p">
                  <div
                    className="p-2 bg-gray-100 rounded-lg"
                    data-oid="aygvz1o"
                  >
                    {item.icon}
                  </div>
                  <span className="font-medium" data-oid="ijj4-6e">
                    {item.name}
                  </span>
                </div>
                <ChevronRight
                  className="h-5 w-5 text-gray-400"
                  data-oid="v2hsb30"
                />
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mt-12" data-oid="9u.cv8a">
        <h2 className="text-2xl font-bold mb-6" data-oid="37b581b">
          Social Media Cards
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-oid="0d4fhfr"
        >
          {[
            {
              name: "Twitter",
              icon: <Twitter className="h-6 w-6" data-oid="lgmb_k6" />,
              color: "rgba(29, 161, 242, 0.3)",
              bgColor: "bg-[#1DA1F2]/5",
              textColor: "text-[#1DA1F2]",
              borderColor: "border-[#1DA1F2]/20",
            },
            {
              name: "GitHub",
              icon: <Github className="h-6 w-6" data-oid="2h:.:4s" />,
              color: "rgba(36, 41, 46, 0.3)",
              bgColor: "bg-[#24292E]/5",
              textColor: "text-[#24292E]",
              borderColor: "border-[#24292E]/20",
            },
            {
              name: "LinkedIn",
              icon: <Linkedin className="h-6 w-6" data-oid="yypkbxl" />,
              color: "rgba(0, 119, 181, 0.3)",
              bgColor: "bg-[#0077B5]/5",
              textColor: "text-[#0077B5]",
              borderColor: "border-[#0077B5]/20",
            },
          ].map((item, index) => (
            <AnimatedContainer
              key={item.name}
              className={`rounded-xl ${item.borderColor} border p-6 ${item.bgColor} shadow-sm`}
              rotateAmount={2}
              glowColor={item.color}
              enterAnimation="slide-up"
              delay={0.2 + index * 0.1}
              data-oid="xnl3lhq"
            >
              <div
                className="flex flex-col items-center text-center"
                data-oid="nhdd8tb"
              >
                <div
                  className={`p-4 rounded-full ${item.bgColor} ${item.textColor} mb-4`}
                  data-oid="y.m6ey7"
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-xl font-semibold ${item.textColor}`}
                  data-oid="fgzqlhk"
                >
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-2" data-oid="g6plhwb">
                  Connect with us on {item.name}
                </p>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
