import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="bh444jp">
      <div className="container mx-auto px-4" data-oid="errgk63">
        <div className="flex flex-col items-center mb-12" data-oid="11nft_q">
          <Skeleton className="h-10 w-64 mb-4" data-oid="ys97t0s" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="zk1b2xu" />
        </div>

        <div className="space-y-8" data-oid="xiag.rq">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="bx6zew_"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
