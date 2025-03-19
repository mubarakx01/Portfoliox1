import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const Testimonial: Testimonial[] = [
  {
    name: "Alex Thompson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "His contributions to our project were invaluable. He has a keen eye for detail and a deep understanding of software architecture.",
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "Collaborating with him on data analysis tasks was seamless. His expertise made our results stand out.",
  },
  {
    name: "David Kim",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "He’s a talented developer with a passion for user-friendly interfaces. Our website’s engagement soared thanks to his work.",
  },
  {
    name: "Sophie Patel",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "His technical skills and design sensibility make him an amazing collaborator. He always delivers top-notch work.",
  },
  {
    name: "Michael Brown",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote:
      "He turns complex requirements into elegant solutions. A true asset to any team.",
  },
  {
    name: "Emma Wilson",
    role: "Technical Writer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      "His clear communication and thorough documentation kept our project on track. Highly recommended.",
  },
  {
    name: "James Lee",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Working with him was a breeze. His problem-solving skills are exceptional, and he always hits deadlines.",
  },
  {
    name: "Olivia Martinez",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "His insights into data trends were critical to our research. A brilliant mind in the field.",
  },
  {
    name: "William Chen",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "He built us a robust, scalable web app. His attention to detail is unmatched.",
  },
  {
    name: "Isabella Rossi",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      "His designs are beautiful and functional. He really gets what users need.",
  },
  {
    name: "Daniel Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "He consistently delivers high-quality work and goes the extra mile. A total pro.",
  },
  {
    name: "Ava Taylor",
    role: "Technical Writer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    quote:
      "His documentation is clear and comprehensive. It’s made onboarding so much easier.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number,
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  Testimonial,
  Math.ceil(Testimonial.length / 3),
);

export default function TestimonialSection() {
  return (
    <section data-oid="bbakb-w">
      <div className="py-16 md:py-32" data-oid="0szwizb">
        <div className="mx-auto max-w-6xl px-6" data-oid="j8e7-iv">
          <div className="text-center" data-oid=".ottl.:">
            <h2
              className="text-title text-3xl font-semibold"
              data-oid="t.qwjw_"
            >
              Testimonial
            </h2>
            <p className="text-body mt-6" data-oid="ba4x::1">
              What people say about working with me.
            </p>
          </div>
          <div
            className="mt-8 grid gap-3 [--color-card:var(--color-muted)] sm:grid-cols-2 md:mt-12 lg:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]"
            data-oid="e1k9px1"
          >
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className="space-y-3 *:border-none *:shadow-none"
                data-oid="fl0d6ws"
              >
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index} data-oid="s6:6bmz">
                    <CardContent
                      className="grid grid-cols-[auto_1fr] gap-3 pt-6"
                      data-oid="4j420.z"
                    >
                      <Avatar className="size-9" data-oid="oxx4idh">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                          data-oid="o0lv80."
                        />

                        <AvatarFallback data-oid="ry1yb9p">
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div data-oid="qgmbwh3">
                        <h3 className="font-medium" data-oid="9ivimo-">
                          {name}
                        </h3>
                        <span
                          className="text-muted-foreground block text-sm tracking-wide"
                          data-oid="h:e7ti9"
                        >
                          {role}
                        </span>
                        <blockquote className="mt-3" data-oid=":germmq">
                          <p
                            className="text-gray-700 dark:text-gray-300"
                            data-oid="2oiit_7"
                          >
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
