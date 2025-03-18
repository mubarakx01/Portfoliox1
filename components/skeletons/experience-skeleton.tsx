import { Skeleton } from "@/components/ui/skeleton";

export function ExperienceSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background/95 to-background"
      data-oid="o_-5nwh"
    >
      <div className="container mx-auto px-4" data-oid="f2ualrn">
        <div className="flex flex-col items-center mb-12" data-oid="2cjqunu">
          <Skeleton className="h-10 w-64 mb-4" data-oid="710vi5." />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="s5xlm9v" />
        </div>

        <div className="flex justify-center gap-2 mb-8" data-oid="ovieabj">
          <Skeleton className="h-10 w-32 rounded-full" data-oid="_-a8rtn" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid=":vxj7qv" />
          <Skeleton className="h-10 w-40 rounded-full" data-oid="nyowjgs" />
        </div>

        <div className="space-y-6" data-oid="66i7_lm">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton
              key={i}
              className="w-full h-64 rounded-xl"
              variant="card"
              data-oid="3591bas"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
