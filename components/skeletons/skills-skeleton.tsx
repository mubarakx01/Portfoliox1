import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="s0ngy_i"
    >
      <div className="container mx-auto px-4" data-oid=":w5kkck">
        <div className="flex flex-col items-center mb-12" data-oid="kiruu95">
          <Skeleton className="h-10 w-64 mb-4" data-oid="m:9ck.8" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="9innzb3" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="ulig:x."
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="0qx1z1m"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="ox39nvt">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="a3h3x3t" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="gofaerk"
        />

        <div className="mt-12 text-center" data-oid="rgzgiww">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="sbmdtq_"
          />
        </div>
      </div>
    </div>
  );
}
