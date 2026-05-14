import { Skeleton } from '@/components/ui/skeleton'

export const UsersPageSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-11 w-full max-w-[420px] rounded-md" />
      </div>

      {/* Status Switcher */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-4 border-b border-[#EEF1F4] pt-3 dark:border-[#25292E]">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="mb-2 h-5 w-20 rounded-md" />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] pt-4 dark:border-[#25292E]">
        {/* Header */}
        <div className="grid min-w-[980px] grid-cols-6 gap-4 bg-[#F7F9F9] px-4 py-3 dark:bg-[#171A1E]">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-24" />
          ))}
        </div>

        {/* Rows */}
        <div className="space-y-0">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid min-w-[980px] grid-cols-6 items-center gap-4 border-t border-[#F3F4F6] px-4 py-4 dark:border-[#25292E]"
            >
              {/* Username */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
              </div>

              {/* Email */}
              <Skeleton className="h-4 w-44" />

              {/* Subscription */}
              <Skeleton className="h-4 w-24" />

              {/* Date Joined */}
              <Skeleton className="h-4 w-28" />

              {/* Status */}
              <Skeleton className="h-7 w-20 rounded-lg" />

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-28 rounded-md" />
                <Skeleton className="h-8 w-28 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#EEF1F4] px-4 py-3 dark:border-[#25292E]">
          <Skeleton className="h-4 w-36" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
