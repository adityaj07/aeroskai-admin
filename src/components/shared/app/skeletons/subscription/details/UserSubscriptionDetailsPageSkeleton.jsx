import { Skeleton } from '@/components/ui/skeleton'

export const UserSubscriptionDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header */}
      <div className="rounded-2xl bg-[#1565C00D] p-4 dark:bg-[#1565C01A]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-11 w-11 rounded-xl" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-4 w-52 rounded-md" />
            </div>
          </div>

          <Skeleton className="h-6 w-20 rounded-lg" />
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="flex items-center justify-between px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-40 rounded-md" />

              {index === 0 && <Skeleton className="h-6 w-16 rounded-lg" />}
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-4 p-4 md:p-5">
              {Array.from({ length: 4 }).map((_, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <Skeleton className="h-3 w-24 rounded-md" />
                  <Skeleton className="h-4 w-40 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Billing History */}
      <div className="overflow-hidden rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-36 rounded-md" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        {/* Table Header */}
        <div className="grid min-w-[1000px] grid-cols-7 gap-4 border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#171A1E]">
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-24 rounded-md" />
          ))}
        </div>

        {/* Rows */}
        <div className="min-w-[1000px]">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-4 border-b border-[#F3F4F6] px-4 py-4 dark:border-[#25292E]"
            >
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-6 w-20 rounded-lg" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="h-4 w-36 rounded-md" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-7 rounded-md" />
            <Skeleton className="h-7 w-7 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
