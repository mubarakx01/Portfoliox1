import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="2b-h:1f">
      <div className="container mx-auto px-4" data-oid="h-veio1">
        <div className="flex flex-col items-center mb-12" data-oid="p-4rj_2">
          <Skeleton className="h-10 w-64 mb-4" data-oid="u1obw57" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="bk-2r1n" />
        </div>

        <div className="space-y-8" data-oid="bl50jz_">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="fka-fyd"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
