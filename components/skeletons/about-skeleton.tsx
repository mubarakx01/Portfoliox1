import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="14rrajg">
      <div className="container mx-auto px-4" data-oid="y.lxho3">
        <div className="flex flex-col items-center mb-12" data-oid="hv27i7e">
          <Skeleton className="h-10 w-64 mb-4" data-oid="0-aj96h" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="rbjxq_f" />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="e3vo4ly"
        >
          <div className="relative" data-oid="ycp3v68">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="_a28o67"
            />
          </div>

          <div data-oid="kwtqo53">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="p8od.-d" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="94n5hxj"
            />

            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="9-wj-gq"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="rd6ghg4">
              <Skeleton className="h-8 w-32" data-oid="i_ld7jl" />
              <Skeleton className="h-8 w-32" data-oid="nmo3efx" />
              <Skeleton className="h-8 w-32" data-oid=":2hxsor" />
            </div>

            <div className="flex gap-4" data-oid="--b80j3">
              <Skeleton className="h-10 w-40" data-oid="wvkxdl3" />
              <Skeleton className="h-10 w-40" data-oid="7jexph0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
