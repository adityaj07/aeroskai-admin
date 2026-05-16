import { Skeleton } from '@/components/ui/skeleton'

export const SupportPageSkeleton = () => {
  return (
    <div className="h-[calc(100vh-160px)] min-h-[620px] rounded-xl border border-[#EEF1F4] p-3 dark:border-[#25292E]">
      <div className="grid h-full min-w-0 gap-0 lg:grid-cols-[minmax(0,40%)_24px_minmax(0,60%)]">
        {/* LEFT PANEL */}
        <div className="flex min-h-0 flex-col pr-1">
          {/* Tabs */}
          <div className="mb-3 flex gap-2">
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-36 rounded-lg" />
          </div>

          {/* Search */}
          <Skeleton className="h-11 w-full rounded-lg" />

          {/* Status Switcher */}
          <div className="mt-4 flex gap-4 border-b border-[#EEF1F4] pb-2 dark:border-[#25292E]">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-4 w-16 rounded-md" />
            ))}
          </div>

          {/* Conversations */}
          <div className="mt-4 flex-1 space-y-4 overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index}>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />

                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <Skeleton className="h-4 w-28 rounded-md" />
                      <Skeleton className="h-5 w-16 rounded-full" />
                    </div>

                    <Skeleton className="h-3 w-[90%] rounded-md" />
                  </div>
                </div>

                {index !== 6 && <div className="mt-4 h-px bg-[#EEF1F4] dark:bg-[#25292E]" />}
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="hidden lg:flex lg:items-stretch lg:justify-center">
          <div className="h-full w-px bg-[#F3F4F6] dark:bg-white/15" />
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden min-w-0 flex-col lg:flex">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EEF1F4] px-4 py-3 dark:border-[#25292E]">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-4 w-28 rounded-md" />
                <Skeleton className="h-3 w-20 rounded-md" />
              </div>
            </div>

            <Skeleton className="h-8 w-32 rounded-md" />
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-hidden px-4 py-4">
            {Array.from({ length: 6 }).map((_, index) => {
              const isAdmin = index % 2 === 0

              return (
                <div key={index} className={`flex ${isAdmin ? 'justify-end' : 'justify-start'}`}>
                  <Skeleton className={`h-14 rounded-xl ${isAdmin ? 'w-[180px]' : 'w-[240px]'}`} />
                </div>
              )
            })}
          </div>

          {/* Input */}
          <div className="p-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 flex-1 rounded-full" />
              <Skeleton className="h-10 w-20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
