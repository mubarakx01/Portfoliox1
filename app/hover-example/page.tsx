"use client";

import HoverCard from "@/components/hover-card";

export default function HoverExamplePage() {
  return (
    <div
      className="min-h-screen p-8 flex flex-col items-center justify-center"
      data-oid="j:okw_5"
    >
      <h1 className="text-3xl font-bold mb-8" data-oid="dftnnyr">
        3D Hover Effect Example
      </h1>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        data-oid="sa-.z:a"
      >
        {[
          {
            title: "Blue Glow",
            description:
              "This card uses a blue glow effect with moderate rotation intensity.",
            glowColor: "rgba(59, 130, 246, 0.5)",
            rotateIntensity: 8,
          },
          {
            title: "Orange Highlight",
            description:
              "This card uses the default orange glow with higher intensity rotation.",
            glowColor: "rgba(249, 115, 22, 0.4)",
            rotateIntensity: 12,
          },
          {
            title: "Green Accent",
            description:
              "This card has a green glow effect with a subtle rotation.",
            glowColor: "rgba(16, 185, 129, 0.4)",
            rotateIntensity: 5,
          },
        ].map((card, index) => (
          <HoverCard
            key={index}
            className="p-6 w-full"
            glowColor={card.glowColor}
            rotateIntensity={card.rotateIntensity}
            data-oid="a7zzt6."
          >
            <h2 className="text-xl font-bold mb-3" data-oid="et-re7t">
              {card.title}
            </h2>
            <p className="text-gray-600 mb-4" data-oid="..fwo:.">
              {card.description}
            </p>
            <p className="text-sm text-gray-500" data-oid="6r90r7j">
              Move your mouse across this card to see the 3D rotation and glow
              effect in action.
            </p>
          </HoverCard>
        ))}
      </div>

      <div className="mt-12 max-w-2xl" data-oid="z1kdw6x">
        <HoverCard
          className="p-8"
          rotateIntensity={5}
          glowIntensity={20}
          data-oid="0hhb4qe"
        >
          <h2 className="text-2xl font-bold mb-4" data-oid="bjun:ks">
            How It Works
          </h2>
          <p className="mb-4" data-oid="uc7n8ml">
            This card uses pure CSS and React state to create a 3D effect that
            follows your mouse movement. The rotation is calculated based on the
            mouse position relative to the card's center.
          </p>
          <p className="mb-4" data-oid="p2xeiq4">
            The glow effect is created using a radial gradient that also follows
            your mouse position, creating the impression of a light source
            moving with your cursor.
          </p>
          <p data-oid="2b8.d3j">
            This approach is more stable than Framer Motion's rotateX/rotateY
            properties, which can sometimes cause issues with unit conversion.
          </p>
        </HoverCard>
      </div>
    </div>
  );
}
