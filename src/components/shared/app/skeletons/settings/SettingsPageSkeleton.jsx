import { Skeleton } from '@/components/ui/skeleton'

export const SettingsPageSkeleton = () => {
  return (
    <div className="w-full space-y-4 px-4 py-4 md:space-y-6 md:px-6">
      {/* Top action */}
      <div className="flex items-center justify-end">
        <Skeleton className="h-10 w-[132px] rounded-md" />
      </div>

      {/* Account card */}
      <div className="rounded-xl border border-[#EEF1F4] dark:border-[#25292E]">
        {/* Header */}
        <div className="p-5">
          <Skeleton className="h-5 w-24 rounded-md" />
        </div>

        {/* Content */}
        <div className="border-t border-[#EEF1F4] p-5 dark:border-[#25292E]">
          <div className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-11 w-full rounded-lg" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-11 w-full rounded-lg" />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20 rounded-md" />

              <div className="flex flex-col gap-2 sm:flex-row">
                <Skeleton className="h-11 flex-1 rounded-lg" />
                <Skeleton className="h-11 w-full rounded-lg sm:w-[180px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
