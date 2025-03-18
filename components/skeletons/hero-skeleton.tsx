import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="m.c681q">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="nnhg4ah"
      >
        <div className="order-2 md:order-1" data-oid="7v0p7u8">
          <Skeleton className="h-8 w-32 mb-4" data-oid="31fjcmf" />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="hybzoj7" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="u_d_gx0" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid="vecy9kj">
            <Skeleton className="h-8 w-32" data-oid="ahuoraz" />
            <Skeleton className="h-8 w-32" data-oid="h8o_u48" />
            <Skeleton className="h-8 w-32" data-oid="jj.8mz_" />
            <Skeleton className="h-8 w-32" data-oid="79nb4rn" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="qztc_.9"
          >
            <Skeleton className="h-12 w-40" data-oid="0dwt_ps" />
            <Skeleton className="h-12 w-40" data-oid="v0jlyeu" />
          </div>

          <div className="flex gap-4" data-oid="x-v2osx">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="a3kae:w" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="hmdxycq" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="6-4arb3" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="isupc1h"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="k2gms8h"
          />
        </div>
      </div>
    </div>
  );
}
