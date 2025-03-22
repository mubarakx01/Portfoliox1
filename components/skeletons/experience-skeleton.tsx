import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="ijadzz0"
    >
      <div className="container mx-auto px-4" data-oid="272r.v.">
        <div className="flex flex-col items-center mb-12" data-oid="0e-w4q7">
          <Skeleton className="h-10 w-64 mb-4" data-oid="-xbut7r" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="kqs80fx" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="0zqdjg-">
          <Skeleton className="h-10 w-32 rounded-full" data-oid="kfq5t:m" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="8uw6q7a" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="3.ara84" />
        </div>

        <div className="space-y-6" data-oid="n_nsbx:">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="du-l7a5"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
