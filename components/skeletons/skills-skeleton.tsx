import { Skeleton } from "@/components/ui/skeleton";

export function SkillsSkeleton() {
  return (
    <div
      className="py-16 md:py-24 bg-gradient-to-b from-background to-background/95"
      data-oid="ondorbd"
    >
      <div className="container mx-auto px-4" data-oid="e8w-vx5">
        <div className="flex flex-col items-center mb-12" data-oid="sqmq:4u">
          <Skeleton className="h-10 w-64 mb-4" data-oid="5ix2z:g" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="frgzs7c" />
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          data-oid="7ry_lta"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-10 w-32 rounded-full"
              data-oid="eq6iwhr"
            />
          ))}
        </div>

        <div className="flex justify-center mb-8" data-oid="2wqb08h">
          <Skeleton className="h-10 w-64 rounded-full" data-oid="1bvtks:" />
        </div>

        <Skeleton
          className="w-full h-[500px] rounded-xl"
          variant="card"
          data-oid="sew-z3-"
        />

        <div className="mt-12 text-center" data-oid="e55ov-e">
          <Skeleton
            className="h-4 w-full max-w-2xl mx-auto"
            variant="text"
            count={2}
            gap={2}
            data-oid="syy.ud2"
          />
        </div>
      </div>
    </div>
  );
}
