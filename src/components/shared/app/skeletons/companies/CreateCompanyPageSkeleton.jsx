import { Skeleton } from '@/components/ui/skeleton'

export const CreateCompanyPageSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Company Details */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        {/* Header */}
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-36" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        <div className="space-y-4 p-4 md:p-5">
          {/* Logo */}
          <div>
            <Skeleton className="mb-2 h-4 w-28" />
            <Skeleton className="h-[56px] w-[56px] rounded-xl" />
          </div>

          {/* Fields */}
          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-11 w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Primary Contact */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-36" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        <div className="space-y-4 p-4 md:p-5">
          {/* Username */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-11 w-full rounded-lg" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-11 w-full rounded-lg" />
              </div>
            ))}
          </div>

          {/* Textarea */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-44" />
            <Skeleton className="h-[110px] w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* Subscription Settings */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-44" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        <div className="grid gap-4 p-4 md:grid-cols-2 md:p-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-11 w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Settings */}
      <div className="rounded-xl border border-[#F3F4F6] dark:border-[#25292E]">
        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <Skeleton className="h-5 w-40" />
        </div>

        <div className="mt-4 h-px bg-[#E5E7EB] dark:bg-[#25292E]" />

        <div className="space-y-5 p-4 md:p-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex items-start gap-3">
              <Skeleton className="mt-[2px] h-4 w-4 rounded-sm" />

              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-44" />
                <Skeleton className="h-3 w-52" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col justify-end gap-2 pb-1 sm:flex-row">
        <Skeleton className="h-10 w-full rounded-md sm:w-24" />
        <Skeleton className="h-10 w-full rounded-md sm:w-40" />
      </div>
    </div>
  )
}
