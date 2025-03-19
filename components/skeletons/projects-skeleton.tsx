import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="yp4-3jp">
      <div className="container mx-auto px-4" data-oid="he6kona">
        <div className="flex flex-col items-center mb-12" data-oid="_61444n">
          <Skeleton className="h-10 w-64 mb-4" data-oid="llhvjfj" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="62u1va6" />
        </div>

        <div className="mb-16" data-oid="g4nqj:o">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid="at.th12"
          >
            <Skeleton className="h-6 w-40" data-oid="pi:ikz9" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="6pqnyuw"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="6vcew_7"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="1pq_ih5"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="ztur8iu"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="6ffnbyk"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
