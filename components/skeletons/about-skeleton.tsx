import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="72q:.9r">
      <div className="container mx-auto px-4" data-oid="lpkgu2u">
        <div className="flex flex-col items-center mb-12" data-oid="7cjxkm5">
          <Skeleton className="h-10 w-64 mb-4" data-oid="7y5mjer" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="ipyeoi9" />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="d0af_ym"
        >
          <div className="relative" data-oid="1pti90e">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="zl0kgmk"
            />
          </div>

          <div data-oid="s4l_2:c">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="doqeg:o" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="pb.-7x0"
            />
            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="n9:0ke0"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="c5k6t35">
              <Skeleton className="h-8 w-32" data-oid="7h30u77" />
              <Skeleton className="h-8 w-32" data-oid="lu2o.ek" />
              <Skeleton className="h-8 w-32" data-oid="l4u_v9o" />
            </div>

            <div className="flex gap-4" data-oid="nyliq05">
              <Skeleton className="h-10 w-40" data-oid="o90u.eg" />
              <Skeleton className="h-10 w-40" data-oid="7cdamzn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
