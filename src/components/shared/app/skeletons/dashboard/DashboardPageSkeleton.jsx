import { Skeleton } from '@/components/ui/skeleton'

export const DashboardPageSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-36 rounded-[20px]" />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Skeleton className="h-[360px] rounded-[20px]" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} className="h-[172px] rounded-[20px]" />
          ))}
        </div>
      </div>
    </div>
  )
}
