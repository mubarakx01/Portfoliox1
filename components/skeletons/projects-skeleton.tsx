import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSkeleton() {
  return (
    <div className="py-16 md:py-24 relative" data-oid="rtlsy0e">
      <div className="container mx-auto px-4" data-oid=":iw7u37">
        <div className="flex flex-col items-center mb-12" data-oid="za:y-yh">
          <Skeleton className="h-10 w-64 mb-4" data-oid="6w165zl" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="a8dpnjx" />
        </div>

        <div className="mb-16" data-oid="caze9gu">
          <div
            className="flex items-center gap-2 justify-center mb-6"
            data-oid="5caz11f"
          >
            <Skeleton className="h-6 w-40" data-oid="mgoy9pg" />
          </div>

          <Skeleton
            className="w-full aspect-[16/9] rounded-xl mb-4"
            variant="card"
            data-oid="2rof4td"
          />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="2p:dd2i"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid=":fscm94"
            />
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="vqdvnqz"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="aspect-[3/4] rounded-xl"
              variant="card"
              data-oid="c37kmga"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
