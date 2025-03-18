import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="ur0-v0v"
    >
      <div className="container mx-auto px-4" data-oid="johx56-">
        <div className="flex flex-col items-center mb-12" data-oid="kefb-jb">
          <Skeleton className="h-10 w-64 mb-4" data-oid=".uz7fs:" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="0min6s2" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="uptg7u7"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="s2vzd3l"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="_hgqhbz">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="_40nw4f" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="4p9y3r7"
        />

        <div className="mt-12 text-center" data-oid="8psse_f">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="9szn-kd"
          />
        </div>
      </div>
    </div>
  );
}
