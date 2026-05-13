import { Suspense } from 'react'
import { TextShimmer } from './TextShimmer'

export const RouteSuspense = ({ children, fallback }) => {
  return (
    <Suspense
      fallback={
        fallback ?? (
          <div className="text-md flex h-dvh items-center justify-center text-[#6F7680] dark:text-[#9AA2AD]">
            <TextShimmer duration={1}>Loading...</TextShimmer>
          </div>
        )
      }
    >
      {children}
    </Suspense>
  )
}
