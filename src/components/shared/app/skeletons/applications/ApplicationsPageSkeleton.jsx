import { Skeleton } from '@/components/ui/skeleton'

export const ApplicationsPageSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-11 w-full max-w-[420px] rounded-md" />
      </div>

      {/* Status Tabs */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-4 border-b border-[#EEF1F4] pt-3 dark:border-[#25292E]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="mb-2 h-6 w-24 rounded-md" />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] pt-4 dark:border-[#25292E]">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#14171A]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full max-w-[110px]" />
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#F3F4F6] dark:divide-[#25292E]">
          {Array.from({ length: 7 }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-5 items-center gap-4 px-4 py-4">
              {/* Company column */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />

                <Skeleton className="h-4 w-32" />
              </div>

              {/* Email */}
              <Skeleton className="h-4 w-44" />

              {/* Date */}
              <Skeleton className="h-4 w-24" />

              {/* Status */}
              <Skeleton className="h-6 w-24 rounded-full" />

              {/* Action */}
              <Skeleton className="h-8 w-28 rounded-md" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#EEF1F4] px-4 py-3 dark:border-[#25292E]">
          <Skeleton className="h-4 w-40" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
