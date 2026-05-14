import { Skeleton } from '@/components/ui/skeleton'

export const CompanyDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#1565C00D] p-5 dark:bg-[#1565C01A]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-[52px] w-[52px] rounded-xl" />

            <div className="space-y-2">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Skeleton className="h-7 w-20 rounded-lg" />
            <Skeleton className="h-7 w-32 rounded-lg" />
          </div>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 xl:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="min-w-0 space-y-4">
          {/* Detail cards */}
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
                {/* Header */}
                <div className="px-4 pt-4 md:px-5 md:pt-5">
                  <Skeleton className="h-5 w-32" />
                </div>

                <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

                {/* Content */}
                <div className="space-y-4 p-4 md:p-5">
                  {Array.from({ length: 4 }).map((_, itemIndex) => (
                    <div key={itemIndex} className="space-y-2">
                      <Skeleton className="h-3 w-24" />
                      <Skeleton className="h-4 w-36" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Employee Accounts */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            {/* Header */}
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-44" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            {/* Employees */}
            <div className="space-y-4 p-4 md:p-5">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8 rounded-full" />

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-3 w-36" />
                    </div>
                  </div>

                  <Skeleton className="h-6 w-20 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="min-w-0 space-y-4">
          {/* Admin Actions */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-32" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-3 p-4 md:p-5">
              <Skeleton className="h-11 w-full rounded-md" />

              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg p-3">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-36" />
                    <Skeleton className="h-3 w-28" />
                  </div>

                  <Skeleton className="h-6 w-11 rounded-full" />
                </div>
              ))}

              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-md" />
                    <Skeleton className="h-4 w-40" />
                  </div>

                  <Skeleton className="h-4 w-4 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Card */}
          <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="flex items-center justify-between px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-6 w-16 rounded-lg" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            <div className="space-y-4 p-4 md:p-5">
              <Skeleton className="h-9 w-28" />

              <Skeleton className="h-4 w-40" />

              <Skeleton className="h-2 w-full rounded-full" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>

                <div className="space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </div>
          </div>

          {/* Subscription History */}
          <div className="overflow-hidden rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-40" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            {/* Table header */}
            <div className="grid grid-cols-6 gap-4 bg-[#F7F9F9] px-4 py-4 dark:bg-[#14171A]">
              {Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} className="h-4 w-full max-w-[90px]" />
              ))}
            </div>

            {/* Rows */}
            <div className="divide-y divide-[#F3F4F6] dark:divide-[#25292E]">
              {Array.from({ length: 4 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-6 items-center gap-4 px-4 py-4">
                  {Array.from({ length: 4 }).map((_, cellIndex) => (
                    <Skeleton key={cellIndex} className="h-4 w-full max-w-[80px]" />
                  ))}

                  <Skeleton className="h-6 w-20 rounded-lg" />

                  <Skeleton className="h-8 w-24 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
