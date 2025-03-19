import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="ey2vizk"
    >
      <div className="container mx-auto px-4" data-oid="ogp:3-q">
        <div className="flex flex-col items-center mb-12" data-oid="g.4ddkc">
          <Skeleton className="h-10 w-64 mb-4" data-oid="dk8r3ue" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="9wjg:.g" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="hlgif6o"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="y196azx"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="l8czivr">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="7x.zu9y" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="9_x8pdt"
        />

        <div className="mt-12 text-center" data-oid="91jm4q1">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="v-t5_7_"
          />
        </div>
      </div>
    </div>
  );
}
