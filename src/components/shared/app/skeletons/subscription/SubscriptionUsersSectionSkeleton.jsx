import { Skeleton } from '@/components/ui/skeleton'

export const SubscriptionUsersSectionSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-[#ECEFF3] p-5 dark:border-[#25292E]"
          >
            <div className="flex h-[170px] flex-col justify-between">
              <Skeleton className="h-4 w-24 rounded-md" />

              <div className="space-y-4">
                <Skeleton className="h-10 w-24 rounded-md" />
                <Skeleton className="h-20 w-full rounded-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Status Switcher */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-4 border-b border-[#EEF1F4] pt-3 dark:border-[#25292E]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="mb-2 h-5 w-20 rounded-md" />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
        {/* Header */}
        <div className="grid grid-cols-6 gap-4 border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#171A1E]">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-24 rounded-md" />
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-0">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-6 gap-4 border-b border-[#F3F4F6] px-4 py-4 dark:border-[#25292E]"
            >
              <Skeleton className="h-4 w-28 rounded-md" />
              <Skeleton className="h-4 w-40 rounded-md" />
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-4 w-24 rounded-md" />
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
