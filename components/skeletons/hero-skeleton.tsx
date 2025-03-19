import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <div className="min-h-screen flex items-center" data-oid="hz:ki8p">
      <div
        className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        data-oid="utmtwuw"
      >
        <div className="order-2 md:order-1" data-oid="heid2_s">
          <Skeleton className="h-8 w-32 mb-4" data-oid="b-pm-jh" />
          <Skeleton className="h-16 w-full max-w-md mb-6" data-oid="nmhp-6t" />
          <Skeleton className="h-12 w-full max-w-lg mb-8" data-oid="rhqd:rc" />

          <div className="flex flex-wrap gap-3 mb-8" data-oid="0:49h8f">
            <Skeleton className="h-8 w-32" data-oid="p:wagq1" />
            <Skeleton className="h-8 w-32" data-oid="b4efpbl" />
            <Skeleton className="h-8 w-32" data-oid="frnocy7" />
            <Skeleton className="h-8 w-32" data-oid="vrujbqf" />
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-8"
            data-oid="w96rtxz"
          >
            <Skeleton className="h-12 w-40" data-oid=".-s:t:0" />
            <Skeleton className="h-12 w-40" data-oid="dsdt4yq" />
          </div>

          <div className="flex gap-4" data-oid="lnxvwyo">
            <Skeleton className="h-10 w-10 rounded-full" data-oid="9e2cnj2" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="4wn-sqk" />
            <Skeleton className="h-10 w-10 rounded-full" data-oid="w55.7fg" />
          </div>
        </div>

        <div
          className="order-1 md:order-2 flex justify-center"
          data-oid="03.tkgf"
        >
          <Skeleton
            className="w-64 h-64 md:w-80 md:h-80 rounded-full"
            data-oid="bhrwarr"
          />
        </div>
      </div>
    </div>
  );
}
