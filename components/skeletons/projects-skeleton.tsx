import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="l0850hp">
      <div className="container mx-auto px-4" data-oid="9o4h.z0">
        <div className="flex flex-col items-center mb-12" data-oid=".c3iquf">
          <Skeleton className="h-10 w-64 mb-4" data-oid="rpwh55w" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="v113a8q" />
        </div>

        <div className="mb-16" data-oid="0hg98rz">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid=":wvzxni"
          >
            <Skeleton className="h-6 w-40" data-oid="rd9kjg_" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="-_s:3b5"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="25kxggy"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="_j1uyll"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="jp:9uo3"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="iuu.036"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
