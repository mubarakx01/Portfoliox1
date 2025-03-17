import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="v_x6afg">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="z8ac21e"
      >
        <div className="order-2 md:order-1" data-oid="yuegiwy">
          <Skeleton className="h-8 w-32 mb-4" data-oid="fihftoe" />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="td82dkt" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="2-nzsxk" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid=".lo0d3_">
            <Skeleton className="h-8 w-32" data-oid="jz-xfva" />
            <Skeleton className="h-8 w-32" data-oid="9pklg8p" />
            <Skeleton className="h-8 w-32" data-oid="1s2s:nu" />
            <Skeleton className="h-8 w-32" data-oid="_2m0yex" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="uekfwsh"
          >
            <Skeleton className="h-12 w-40" data-oid="t6z-d.m" />
            <Skeleton className="h-12 w-40" data-oid="bdy4kwp" />
          </div>

          <div className="flex gap-4" data-oid="xzq.a0f">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="aaloe64" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="xmi7rsj" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="rxirg9-" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="yvfdu:t"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="mg8y8m-"
          />
        </div>
      </div>
    </div>
  );
}
