import { Skeleton } from '@/components/ui/skeleton'

export const CompaniesPageSkeleton = () => {
  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-11 w-full max-w-[420px] rounded-md" />

        <Skeleton className="h-11 w-full rounded-md sm:w-[220px]" />
      </div>

      {/* Status tabs */}
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-4 border-b border-[#EEF1F4] pt-3 dark:border-[#25292E]">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="mb-2 h-6 w-20 rounded-md" />
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EEF1F4] pt-4 dark:border-[#25292E]">
        {/* Header */}
        <div className="grid grid-cols-8 gap-4 border-b border-[#EEF1F4] bg-[#F7F9F9] px-4 py-4 dark:border-[#25292E] dark:bg-[#14171A]">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-4 w-full max-w-[90px]" />
          ))}
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#F3F4F6] dark:divide-[#25292E]">
          {Array.from({ length: 7 }).map((_, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-8 items-center gap-4 px-4 py-4">
              {/* Company column */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-4 w-28" />
              </div>

              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#EEF1F4] px-4 py-3 dark:border-[#25292E]">
          <Skeleton className="h-4 w-36" />

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-7 rounded-md" />
            <Skeleton className="h-7 w-7 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}
