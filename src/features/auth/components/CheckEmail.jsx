import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'

export const CheckEmail = () => {
  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-2xl text-[#1F1E1F] md:text-3xl">Check your email</CardTitle>
          <CardDescription className="text-[12px] text-[#6F7680]">
            If an account exists, a password reset link has been sent to your email
          </CardDescription>
          <CardDescription className="text-[12px] text-[#6F7680]">
            Please check your inbox and follow the instructions to reset your password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button type="button" className="mt-[53px] h-10 w-full bg-[#1565C0] text-sm">
            Open Email App
          </Button>

          <Link to={ROUTES.LOGIN}>
            <Button
              type="button"
              variant="ghost"
              className="mt-[53px] h-10 w-full text-sm text-[#6F7680]"
            >
              Back to login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
