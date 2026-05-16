import { Skeleton } from '@/components/ui/skeleton'

export const ReportDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header */}
      <div className="rounded-[14px] p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-7 w-28 rounded-full" />

          <div className="flex flex-col gap-2 sm:flex-row">
            <Skeleton className="h-10 w-full rounded-md sm:w-36" />
            <Skeleton className="h-10 w-full rounded-md sm:w-36" />
            <Skeleton className="h-10 w-full rounded-md sm:w-36" />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid min-w-0 gap-4 xl:grid-cols-2">
        {/* LEFT */}
        <div className="space-y-4">
          {/* Report Info */}
          <div className="rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
            <div className="p-5">
              <Skeleton className="h-5 w-40 rounded-md" />
            </div>

            <div className="border-t border-[#EEF1F4] p-5 dark:border-[#25292E]">
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <Skeleton className="h-3 w-24 rounded-md" />
                    <Skeleton className="h-4 w-40 rounded-md" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reporting Accounts */}
          <div className="rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
            <div className="p-5">
              <Skeleton className="h-5 w-52 rounded-md" />
            </div>

            <div className="border-t border-[#EEF1F4] p-5 dark:border-[#25292E]">
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-4 w-32 rounded-md" />
                        <Skeleton className="h-3 w-48 rounded-md" />
                      </div>

                      <Skeleton className="h-4 w-4 rounded-full" />
                    </div>

                    <Skeleton className="h-px w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {/* Review Actions */}
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
                <div className="p-5">
                  <Skeleton className="h-5 w-32 rounded-md" />
                </div>

                <div className="border-t border-[#EEF1F4] p-5 dark:border-[#25292E]">
                  <div className="space-y-3">
                    <Skeleton className="h-10 w-full rounded-md" />
                    <Skeleton className="h-10 w-full rounded-md" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reported Entity */}
          <div className="rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
            <div className="p-5">
              <Skeleton className="h-5 w-40 rounded-md" />
            </div>

            <div className="border-t border-[#EEF1F4] p-5 dark:border-[#25292E]">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24 rounded-md" />
                </div>

                <Skeleton className="h-56 w-full rounded-xl" />

                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-[92%] rounded-md" />
                  <Skeleton className="h-4 w-[78%] rounded-md" />
                </div>

                <Skeleton className="h-3 w-20 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
