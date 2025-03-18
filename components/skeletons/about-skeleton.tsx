import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="pk6jv-h">
      <div className="container mx-auto px-4" data-oid="0i_c186">
        <div className="flex flex-col items-center mb-12" data-oid="7m:aqp2">
          <Skeleton className="h-10 w-64 mb-4" data-oid="-f3478y" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="lvs7sk." />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="fuf-ql2"
        >
          <div className="relative" data-oid="514xvpn">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="-ai0y2l"
            />
          </div>

          <div data-oid="btbics7">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="3:w8:m5" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="mmcotr7"
            />

            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="kv52u_i"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="mbtt8eb">
              <Skeleton className="h-8 w-32" data-oid="w8gg4x6" />
              <Skeleton className="h-8 w-32" data-oid="j847d1q" />
              <Skeleton className="h-8 w-32" data-oid="sxwufrq" />
            </div>

            <div className="flex gap-4" data-oid="3u7hfom">
              <Skeleton className="h-10 w-40" data-oid="_6raj:4" />
              <Skeleton className="h-10 w-40" data-oid="j:wpjqh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
