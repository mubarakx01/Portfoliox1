import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="dqn0e4d"
    >
      <div className="container mx-auto px-4" data-oid="45qrgkv">
        <div className="flex flex-col items-center mb-12" data-oid="j7-1dit">
          <Skeleton className="h-10 w-64 mb-4" data-oid="e.vi:au" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="253fyc5" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="o1uctcq">
          <Skeleton className="h-10 w-32 rounded-full" data-oid="t8g0th8" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="u4fg_ud" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="w_zvkpw" />
        </div>

        <div className="space-y-6" data-oid="e8:9z5.">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="y4id2lf"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
