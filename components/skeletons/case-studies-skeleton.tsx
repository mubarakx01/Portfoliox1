import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="v-tu:gl">
      <div className="container mx-auto px-4" data-oid="3q4cmuo">
        <div className="flex flex-col items-center mb-12" data-oid="qu.u0pz">
          <Skeleton className="h-10 w-64 mb-4" data-oid="..-jamf" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="4a8ukx7" />
        </div>

        <div className="space-y-8" data-oid="3q0rkz-">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="-byhmzu"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
