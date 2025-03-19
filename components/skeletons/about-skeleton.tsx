import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="p3ffob_">
      <div className="container mx-auto px-4" data-oid="u1bw4b0">
        <div className="flex flex-col items-center mb-12" data-oid="wncw2t_">
          <Skeleton className="h-10 w-64 mb-4" data-oid="ojn355i" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="nge2l.y" />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="8fuhofk"
        >
          <div className="relative" data-oid="ad8c0c3">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="lvliclu"
            />
          </div>

          <div data-oid="sxsqd-:">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="n-1riiv" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="zbcxiak"
            />

            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="xlb52ze"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="uxelt_b">
              <Skeleton className="h-8 w-32" data-oid="bbx_ofc" />
              <Skeleton className="h-8 w-32" data-oid="dvc23bw" />
              <Skeleton className="h-8 w-32" data-oid="0g19t1e" />
            </div>

            <div className="flex gap-4" data-oid="46w3gnl">
              <Skeleton className="h-10 w-40" data-oid="rry9cip" />
              <Skeleton className="h-10 w-40" data-oid="ctuthlq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
