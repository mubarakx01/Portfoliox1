import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="3sl9kwf">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="76bar46"
      >
        <div className="order-2 md:order-1" data-oid="ne.ra_x">
          <Skeleton className="h-8 w-32 mb-4" data-oid="1fb.al0" />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="a6uagy1" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="9o6:w8c" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid="_ss6k5m">
            <Skeleton className="h-8 w-32" data-oid="rtjv26c" />
            <Skeleton className="h-8 w-32" data-oid="med85jb" />
            <Skeleton className="h-8 w-32" data-oid="arprg3." />
            <Skeleton className="h-8 w-32" data-oid="xf_a2jj" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="slisjgn"
          >
            <Skeleton className="h-12 w-40" data-oid="yvs.ig0" />
            <Skeleton className="h-12 w-40" data-oid="2o0y_-q" />
          </div>

          <div className="flex gap-4" data-oid=".uhu859">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="j4j7pbr" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="m7jo8-f" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="z:wjgkt" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="tciyhp1"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="2_-uhze"
          />
        </div>
      </div>
    </div>
  );
}
