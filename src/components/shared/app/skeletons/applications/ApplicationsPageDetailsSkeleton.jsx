import { Skeleton } from '@/components/ui/skeleton'

export const ApplicationDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-5 rounded-2xl bg-transparent px-4 py-4 sm:px-5 sm:py-5 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <Skeleton className="h-12 w-12 shrink-0 rounded-[14px] sm:h-14 sm:w-14" />

          <div className="min-w-0 space-y-2">
            <Skeleton className="h-7 w-52" />
            <Skeleton className="h-6 w-24 rounded-lg" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex w-full flex-wrap gap-2 xl:w-auto xl:justify-end">
          <Skeleton className="h-10 w-full rounded-md sm:h-11 sm:flex-1 xl:w-[170px] xl:flex-none" />

          <Skeleton className="h-10 w-full rounded-md sm:h-11 sm:flex-1 xl:w-[220px] xl:flex-none" />

          <Skeleton className="h-10 w-full rounded-md sm:h-11 sm:flex-1 xl:w-[180px] xl:flex-none" />
        </div>
      </div>

      {/* Top cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            {/* Header */}
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-40" />
            </div>

            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            {/* Content */}
            <div className="space-y-4 p-4 md:p-5">
              {Array.from({ length: 5 }).map((_, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-4 w-40" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Details */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        {/* Header */}
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-40" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        {/* Content */}
        <div className="space-y-4 p-4 md:p-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-4 w-44" />
            </div>
          ))}
        </div>
      </div>

      {/* Status History */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        {/* Header */}
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-36" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        {/* Timeline */}
        <div className="space-y-5 p-4 md:p-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-start gap-3">
              <Skeleton className="mt-1.5 h-2.5 w-2.5 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-28" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
