import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudiesSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="4q1ho.i">
      <div className="container mx-auto px-4" data-oid="vti1kxg">
        <div className="flex flex-col items-center mb-12" data-oid="zs3joxh">
          <Skeleton className="h-10 w-64 mb-4" data-oid="grn2rsx" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="wkdumez" />
        </div>

        <div className="space-y-8" data-oid=".2tkz-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-80 rounded-xl"
              variant="card"
              data-oid="n75.9x4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
