import { Suspense } from 'react'

export const RouteSuspense = ({ children, fallback }) => {
  return (
    <Suspense
      fallback={
        fallback ?? (
          <div className="flex h-[300px] items-center justify-center text-sm text-[#6F7680] dark:text-[#9AA2AD]">
            Loading...
          </div>
        )
      }
    >
      {children}
    </Suspense>
  )
}
