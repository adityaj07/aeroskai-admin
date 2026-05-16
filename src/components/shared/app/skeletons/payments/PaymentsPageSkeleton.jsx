import { Skeleton } from '@/components/ui/skeleton'

export const PaymentsPageSkeleton = ({ showRecordPayment = false, showOverviewCards = true }) => {
  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <Skeleton className="h-11 w-full xl:max-w-[420px]" />

        <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end">
          <Skeleton className="h-11 w-full sm:w-[120px]" />
          <Skeleton className="h-11 w-full sm:w-[140px]" />

          <Skeleton className="col-span-2 h-11 w-full sm:h-9 sm:w-[120px]" />

          {showRecordPayment && <Skeleton className="col-span-2 h-11 w-full sm:h-9 sm:w-[150px]" />}
        </div>
      </div>

      {/* Overview Cards */}
      {showOverviewCards && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-[160px] rounded-2xl sm:h-[170px]" />
          ))}
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
        {/* Header */}
        <div className="border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#171A1E]">
          <div className="grid grid-cols-7 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-full" />
            ))}
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-0">
          {Array.from({ length: 6 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="border-b border-[#F3F4F6] px-4 py-4 dark:border-[#25292E]"
            >
              <div className="grid grid-cols-7 gap-4">
                {Array.from({ length: 7 }).map((_, cellIndex) => (
                  <Skeleton key={cellIndex} className="h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-2 border-t border-[#EEF1F4] px-4 py-3 dark:border-[#25292E] sm:flex-row sm:items-center sm:justify-between">
          <Skeleton className="h-4 w-[140px]" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-7 rounded-md" />
            <Skeleton className="h-7 w-7 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
