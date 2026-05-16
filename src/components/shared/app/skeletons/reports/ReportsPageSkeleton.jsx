import { Skeleton } from '@/components/ui/skeleton'

export const ReportsPageSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <Skeleton className="h-11 w-full rounded-lg xl:max-w-[420px]" />

        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end">
          <Skeleton className="h-11 w-full rounded-lg sm:w-[140px]" />
          <Skeleton className="h-11 w-full rounded-lg sm:w-[140px]" />
        </div>
      </div>

      {/* Status Switcher */}
      <div className="flex gap-4 overflow-hidden border-b border-[#EEF1F4] pb-2 dark:border-[#25292E]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-16 rounded-md" />
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
        {/* Header */}
        <div className="border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#171A1E]">
          <div className="flex min-w-[1200px] gap-6">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-24 rounded-md" />
            ))}
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-0">
          {Array.from({ length: 7 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="border-b border-[#F3F4F6] px-4 py-4 dark:border-[#25292E]"
            >
              <div className="flex min-w-[1200px] items-center gap-6">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-4 w-16 rounded-md" />
                <Skeleton className="h-4 w-40 rounded-md" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-4 w-24 rounded-md" />
                <Skeleton className="h-8 w-28 rounded-md" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3">
          <Skeleton className="h-4 w-36 rounded-md" />

          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
