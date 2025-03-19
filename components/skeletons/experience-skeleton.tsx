import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="_pnr89y"
    >
      <div className="container mx-auto px-4" data-oid="_m2_vt6">
        <div className="flex flex-col items-center mb-12" data-oid="-9h4:cu">
          <Skeleton className="h-10 w-64 mb-4" data-oid="6s4_d2a" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="49eoq4x" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="4b5lc6j">
          <Skeleton className="h-10 w-32 rounded-full" data-oid="d34sxwz" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="2bn9pfe" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="74fxplf" />
        </div>

        <div className="space-y-6" data-oid="yuc2j0d">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="awly7x_"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
