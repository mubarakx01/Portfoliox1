import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="6hxhaay">
      <div className="container mx-auto px-4" data-oid="ckg7c_h">
        <div className="flex flex-col items-center mb-12" data-oid=".0aymwc">
          <Skeleton className="h-10 w-64 mb-4" data-oid="9xb31li" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="769nyf3" />
        </div>

        <div className="mb-16" data-oid="s-rqkzw">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid="h_pih99"
          >
            <Skeleton className="h-6 w-40" data-oid="3cyt__l" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="j4hvuw5"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="jpg.yma"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="qwz:cuj"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="epewy9m"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="0ebzok5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
