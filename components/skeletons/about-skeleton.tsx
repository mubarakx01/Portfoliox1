import { Skeleton } from "@/components/ui/skeleton";

export function AboutSkeleton() {
  return (
    <div className="py-16 md:py-24" data-oid="_-cr9:h">
      <div className="container mx-auto px-4" data-oid="tj.34u1">
        <div className="flex flex-col items-center mb-12" data-oid="8dyqz6a">
          <Skeleton className="h-10 w-64 mb-4" data-oid="zpqw6jg" />
          <Skeleton className="h-5 w-full max-w-2xl" data-oid="m9ny:r6" />
        </div>

        <div
          className="grid md:grid-cols-2 gap-12 items-center"
          data-oid="cyuvf5b"
        >
          <div className="relative" data-oid="ofgwthz">
            <Skeleton
              className="aspect-[3/4] w-full rounded-lg"
              data-oid="j6f0uye"
            />
          </div>

          <div data-oid="kz6:eb1">
            <Skeleton className="h-8 w-3/4 mb-4" data-oid="_i1:ot7" />
            <Skeleton
              className="h-4 w-full mb-2"
              variant="text"
              count={4}
              gap={2}
              data-oid="x32brg7"
            />

            <Skeleton
              className="h-4 w-full mb-6"
              variant="text"
              count={4}
              gap={2}
              data-oid="om5f.up"
            />

            <div className="flex flex-wrap gap-3 mb-8" data-oid="8kfm86q">
              <Skeleton className="h-8 w-32" data-oid="ji8dw95" />
              <Skeleton className="h-8 w-32" data-oid="hc41mw1" />
              <Skeleton className="h-8 w-32" data-oid="ql-85mc" />
            </div>

            <div className="flex gap-4" data-oid="wymzlkh">
              <Skeleton className="h-10 w-40" data-oid="k:qub.9" />
              <Skeleton className="h-10 w-40" data-oid="7tn3x5:" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
