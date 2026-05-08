import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'

export const CheckEmail = () => {
  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-white dark:border-white/10 dark:bg-[#121417]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-2xl text-[#1F1E1F] dark:text-white md:text-3xl">
            Check your email
          </CardTitle>
          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A9B0BA]">
            If an account exists, a password reset link has been sent to your email
          </CardDescription>
          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A9B0BA]">
            Please check your inbox and follow the instructions to reset your password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button type="button" className="mt-[53px] h-10 w-full bg-[#1565C0] text-sm">
            Open Email App
          </Button>

          <Link
            to={ROUTES.LOGIN}
            className="mt-8 flex justify-center text-[14px] font-medium text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A9B0BA] dark:hover:text-white"
          >
            Back to login
          </Link>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
