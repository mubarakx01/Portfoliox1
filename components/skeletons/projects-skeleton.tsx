import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="xv1f:n9">
      <div className="container mx-auto px-4" data-oid="ptmcc3j">
        <div className="flex flex-col items-center mb-12" data-oid="lbl6qkm">
          <Skeleton className="h-10 w-64 mb-4" data-oid="f3mzs_k" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="r5erx-i" />
        </div>

        <div className="mb-16" data-oid="llbsd:2">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid="sebxymv"
          >
            <Skeleton className="h-6 w-40" data-oid="1xepnpk" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="90fym7:"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="hlr75cu"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="9_brw:x"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="4ls1sxv"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="s6fpbo2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
