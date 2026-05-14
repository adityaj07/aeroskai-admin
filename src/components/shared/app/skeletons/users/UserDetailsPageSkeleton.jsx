import { Skeleton } from '@/components/ui/skeleton'

export const UserDetailsPageSkeleton = () => {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Header */}
      <div className="flex flex-col gap-4 rounded-2xl bg-transparent px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-5">
        <div className="flex min-w-0 items-start gap-4 sm:gap-5">
          <Skeleton className="h-11.5 w-11.5 shrink-0 rounded-[12px]" />

          <div className="min-w-0 flex-1 space-y-2">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-24 rounded-lg" />
          </div>
        </div>

        <Skeleton className="h-11 w-full rounded-md sm:w-[190px]" />
      </div>

      {/* Info Cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
            {/* Header */}
            <div className="px-4 pt-4 md:px-5 md:pt-5">
              <Skeleton className="h-5 w-40" />
            </div>

            {/* Separator */}
            <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

            {/* Content */}
            <div className="space-y-4 p-4 md:p-5">
              {Array.from({ length: 4 }).map((_, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <Skeleton className="h-3 w-28" />
                  <Skeleton className="h-4 w-40" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Details */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        {/* Header */}
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-44" />
        </div>

        {/* Separator */}
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
    </div>
  )
}
