import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="vu_6fi."
    >
      <div className="container mx-auto px-4" data-oid="e.84j8-">
        <div className="flex flex-col items-center mb-12" data-oid="w1s93.r">
          <Skeleton className="h-10 w-64 mb-4" data-oid="-rm2-cq" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="v4hq2gu" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="ydt:out">
          <Skeleton className="h-10 w-32 rounded-full" data-oid=":lze1no" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="1btqatz" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="htj0tup" />
        </div>

        <div className="space-y-6" data-oid="zcp5ahy">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="c9bhx61"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
