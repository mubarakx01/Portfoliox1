import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="kn0r4o4"
    >
      <div className="container mx-auto px-4" data-oid="e04v9d.">
        <div className="flex flex-col items-center mb-12" data-oid="b2d84j1">
          <Skeleton className="h-10 w-64 mb-4" data-oid="nyccq5:" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="qdhostx" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="fu6f31h"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="15_wcoy"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="yzr2kmu">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="ko5ijq:" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="9gy5ib7"
        />

        <div className="mt-12 text-center" data-oid="8.0mm9f">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="4inwjn3"
          />
        </div>
      </div>
    </div>
  );
}
