import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="30eu3ws">
      <div className="container mx-auto px-4" data-oid="czjcx.a">
        <div className="flex flex-col items-center mb-12" data-oid="qkxr_w2">
          <Skeleton className="h-10 w-64 mb-4" data-oid="fawy4m3" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="edlt88b" />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="xmbhvpw"
        >
          <div className="relative" data-oid="_ugz5th">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="9lz2.31"
            />
          </div>

          <div data-oid="8f281.5">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="arnk1ha" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="jo9uk_t"
            />

            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="5b5f0bb"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="v4t-qsg">
              <Skeleton className="h-8 w-32" data-oid="5wjwc3i" />
              <Skeleton className="h-8 w-32" data-oid="nnoqoao" />
              <Skeleton className="h-8 w-32" data-oid=":g3vsfp" />
            </div>

            <div className="flex gap-4" data-oid="vrwehyj">
              <Skeleton className="h-10 w-40" data-oid="rt97dfe" />
              <Skeleton className="h-10 w-40" data-oid="s74-.92" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
