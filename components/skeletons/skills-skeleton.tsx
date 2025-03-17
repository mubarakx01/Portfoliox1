import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="51o4383"
    >
      <div className="container mx-auto px-4" data-oid="l95-eo-">
        <div className="flex flex-col items-center mb-12" data-oid="moeu4bz">
          <Skeleton className="h-10 w-64 mb-4" data-oid="www0u2w" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="x6w_a-6" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="b:svx7j"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="3sh_:wf"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="dvmwmsy">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="8_6d3l1" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="j2bpbag"
        />

        <div className="mt-12 text-center" data-oid="8:gzd4f">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="3.-sc5q"
          />
        </div>
      </div>
    </div>
  );
}
