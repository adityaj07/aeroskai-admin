import { Skeleton } from '@/components/ui/skeleton'

export const CompanySubscriptionDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#1565C00D] p-5 dark:bg-[#1565C01A]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-[46px] w-[46px] rounded-xl" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-4 w-28 rounded-md" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-20 rounded-lg" />
            <Skeleton className="h-6 w-32 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid min-w-0 gap-4 xl:grid-cols-2">
        {/* Left */}
        <div className="min-w-0 space-y-4">
          {/* Subscription Card */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="flex items-center justify-between px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-28 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-lg" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-4 p-4 md:p-5">
              <Skeleton className="h-10 w-40 rounded-md" />
              <Skeleton className="h-4 w-52 rounded-md" />
              <Skeleton className="h-2 w-full rounded-full" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-20 rounded-md" />
                  <Skeleton className="h-4 w-28 rounded-md" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-3 w-20 rounded-md" />
                  <Skeleton className="h-4 w-28 rounded-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Update Subscription Card */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-52 rounded-md" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-4 p-4 md:p-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton className="h-3 w-40 rounded-md" />
                  <Skeleton className="h-11 w-full rounded-lg" />
                </div>
              ))}

              <Skeleton className="h-5 w-64 rounded-md" />

              <div className="max-sm:flex-col flex justify-end gap-2">
                <Skeleton className="max-sm:max-w-none h-10 w-full max-w-[140px] rounded-md" />
                <Skeleton className="max-sm:max-w-none h-10 w-full max-w-[140px] rounded-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="min-w-0 space-y-4">
          {/* Admin Actions */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-32 rounded-md" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-3 p-4 md:p-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-10 w-full rounded-md" />
              ))}
            </div>
          </div>

          {/* Renewal Workflow */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-44 rounded-md" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-5 p-4 md:p-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-3">
                  <Skeleton className="mt-1 h-4 w-4 rounded-full" />

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <Skeleton className="h-4 w-40 rounded-md" />
                      <Skeleton className="h-7 w-20 rounded-md" />
                    </div>

                    <Skeleton className="h-3 w-full rounded-md" />
                    <Skeleton className="h-3 w-32 rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
