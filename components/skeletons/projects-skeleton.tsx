import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="osk3erl">
      <div className="container mx-auto px-4" data-oid="f7ed3p_">
        <div className="flex flex-col items-center mb-12" data-oid="r1f9wk5">
          <Skeleton className="h-10 w-64 mb-4" data-oid=".vxdksq" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="z-g-j.1" />
        </div>

        <div className="mb-16" data-oid="rjy5q4g">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid="yrwov0c"
          >
            <Skeleton className="h-6 w-40" data-oid="73.r.g4" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="luzwmjd"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="j1iikfl"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="kd94x34"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="-8zabyv"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="8jt-:mb"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
