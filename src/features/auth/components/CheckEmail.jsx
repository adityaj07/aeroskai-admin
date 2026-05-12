import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'

export const CheckEmail = () => {
  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-transparent dark:border-[#25292E]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
            Check your email
          </CardTitle>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
            If an account exists, a password reset link has been sent to your email
          </CardDescription>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
            Please check your inbox and follow the instructions to reset your password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            className="mt-[48px] h-10 w-full cursor-pointer bg-[#1565C0] text-[13px] sm:mt-[53px] sm:h-11 sm:text-[14px]"
          >
            Open Email App
          </Button>

          <Link
            to={ROUTES.LOGIN}
            className="mt-[48px] flex cursor-pointer justify-center text-[12px] font-medium text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A9B0BA] dark:hover:text-white sm:mt-[53px] sm:text-[13px] lg:text-[14px]"
          >
            Back to login
          </Link>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
