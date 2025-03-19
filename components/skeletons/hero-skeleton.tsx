import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="qylf1vt">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="_fdy7la"
      >
        <div className="order-2 md:order-1" data-oid="_03qgll">
          <Skeleton className="h-8 w-32 mb-4" data-oid="c60b.fa" />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="lfyw9xr" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="oex_j9_" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid="_ylo5ip">
            <Skeleton className="h-8 w-32" data-oid="asd:wkx" />
            <Skeleton className="h-8 w-32" data-oid="so1o:qv" />
            <Skeleton className="h-8 w-32" data-oid="u4c0dju" />
            <Skeleton className="h-8 w-32" data-oid="7r1u9f4" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="gomsh:_"
          >
            <Skeleton className="h-12 w-40" data-oid="xrp0.02" />
            <Skeleton className="h-12 w-40" data-oid="ir6ka6z" />
          </div>

          <div className="flex gap-4" data-oid="l-d..32">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="7iwkwvp" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="jq_o-cw" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="85lm--b" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="3..9ym_"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="5hj0ea6"
          />
        </div>
      </div>
    </div>
  );
}
