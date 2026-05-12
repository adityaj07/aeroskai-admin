import { Link } from 'react-router-dom'

import ActivatedTick from '@/assets/images/activated-tick.svg'
import AppStoreBadge from '@/assets/images/app-store-badge.svg'
import GooglePlayBadge from '@/assets/images/google-play-badge.svg'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'

export const AccountActivatedSection = () => {
  const onOpenApp = () => {
    // TODO:
    // Add deep link / app redirect here
    // Example:
    // window.location.href = 'aeroskai://'
  }

  return (
    <AuthFormMotion>
      <div className="flex w-full justify-center">
        <Card className="w-full rounded-[20px] border border-[#F0F0F0] bg-transparent dark:border-[#25292E]">
          <CardContent className="px-5 py-7 sm:px-7 sm:py-9 lg:px-8 lg:py-10">
            <div className="flex flex-col items-center text-center">
              {/* Success Icon */}
              <div className="mb-5 flex items-center justify-center sm:mb-6">
                <img
                  src={ActivatedTick}
                  alt="Account Activated"
                  className="h-[54px] w-[54px] sm:h-[60px] sm:w-[60px] lg:h-[64px] lg:w-[64px]"
                />
              </div>

              {/* Title */}
              <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
                Account Activated
              </h1>

              {/* Subtitle */}
              <p className="mt-2 text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
                You&apos;re all set!
              </p>

              {/* Dashed Divider */}
              <div className="my-6 w-full border-t border-dashed border-[#D1D5DB] dark:border-[#25292E] sm:my-7" />

              {/* Store Buttons */}
              <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  to="#"
                  className="cursor-pointer transition-opacity duration-200 hover:opacity-90"
                  aria-label="Download on Google Play"
                >
                  <img
                    src={GooglePlayBadge}
                    alt="Get it on Google Play"
                    className="h-[52px] w-auto sm:h-[56px] lg:h-[60px]"
                  />
                </Link>

                <Link
                  to="#"
                  className="cursor-pointer transition-opacity duration-200 hover:opacity-90"
                  aria-label="Download on App Store"
                >
                  <img
                    src={AppStoreBadge}
                    alt="Download on the App Store"
                    className="h-[52px] w-auto sm:h-[56px] lg:h-[60px]"
                  />
                </Link>
              </div>

              {/* Open App */}
              <div className="mt-6 flex flex-col items-center sm:mt-7">
                <p className="text-[10px] text-[#9CA3AF] dark:text-[#7D8590] sm:text-[11px] lg:text-[12px]">
                  Already installed?
                </p>

                <Button
                  variant="link"
                  onClick={onOpenApp}
                  className="mt-1 h-auto cursor-pointer cursor-pointer p-0 text-[13px] font-semibold text-[#1F1E1F] transition-colors hover:text-[#0F54A1] dark:text-[#4DA3FF] dark:hover:text-[#7AB8FF] sm:text-[14px] lg:text-[15px]"
                >
                  Open App
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthFormMotion>
  )
}
