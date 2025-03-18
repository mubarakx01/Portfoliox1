import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="bqdvp37">
      <div className="container mx-auto px-4" data-oid="-.o93w3">
        <div className="flex flex-col items-center mb-12" data-oid="v894dxn">
          <Skeleton className="h-10 w-64 mb-4" data-oid="t_.rjf9" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="qwe_-31" />
        </div>

        <div className="space-y-8" data-oid="u13rr64">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="wz6cl5l"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
