import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="73sbre3">
      <div className="container mx-auto px-4" data-oid="5cg8boe">
        <div className="flex flex-col items-center mb-12" data-oid="etkyjyy">
          <Skeleton className="h-10 w-64 mb-4" data-oid="8ruy4ux" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="06pwq3h" />
        </div>

        <div className="space-y-8" data-oid="mnzut.-">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="k3xxd4x"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
