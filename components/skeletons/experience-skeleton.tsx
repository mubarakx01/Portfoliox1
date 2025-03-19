import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="920khy-"
    >
      <div className="container mx-auto px-4" data-oid="2yzdvoe">
        <div className="flex flex-col items-center mb-12" data-oid="rby3ene">
          <Skeleton className="h-10 w-64 mb-4" data-oid="4ej7hnn" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="e016ydl" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="h9agl86">
          <Skeleton className="h-10 w-32 rounded-full" data-oid="zunq0v-" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="jp5d32t" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="pk87toi" />
        </div>

        <div className="space-y-6" data-oid="f56-or3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="5juu47o"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
