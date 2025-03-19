import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="b2l4tay">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="b-623b:"
      >
        <div className="order-2 md:order-1" data-oid="p-pi6de">
          <Skeleton className="h-8 w-32 mb-4" data-oid="v49a28." />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="lq-gxq5" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="6m4e-2n" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid="f:88439">
            <Skeleton className="h-8 w-32" data-oid="zgzkgwh" />
            <Skeleton className="h-8 w-32" data-oid="7vbc93o" />
            <Skeleton className="h-8 w-32" data-oid="d:gcj90" />
            <Skeleton className="h-8 w-32" data-oid="wng:s_z" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="543i4by"
          >
            <Skeleton className="h-12 w-40" data-oid="ws:ee0k" />
            <Skeleton className="h-12 w-40" data-oid="0b5kkkq" />
          </div>

          <div className="flex gap-4" data-oid="op3_pzp">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="f-n:j:m" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="ijtr:xe" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="hihh2dn" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="950cofk"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="ev_mn15"
          />
        </div>
      </div>
    </div>
  );
}
