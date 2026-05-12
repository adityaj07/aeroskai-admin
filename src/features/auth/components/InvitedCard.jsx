import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'
import { useAcceptInvite } from '@/features/auth/hooks/useAcceptInvite'

export const InvitedCard = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get('token') ?? 'demo-invite-token'
  const companyName = searchParams.get('company') ?? 'SkyJet Aviation'

  const { mutateAsync: acceptInvite, isPending } = useAcceptInvite()

  const onAccept = async () => {
    try {
      await acceptInvite({ token })

      toast.success('Invitation accepted')

      navigate(`${ROUTES.CREATE_INVITED_ACCOUNT}?token=${encodeURIComponent(token)}`)
    } catch (error) {
      const message =
        error?.response?.data?.message || error?.message || 'Unable to accept invitation right now.'

      toast.error(message)
    }
  }

  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-transparent dark:border-[#25292E]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
            You&apos;ve been invited
          </CardTitle>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
            {companyName} invited you to join their team on Aeroskai
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            className="my-[36px] h-10 w-full cursor-pointer bg-[#1565C0] text-[13px] text-white hover:bg-[#0F54A1] sm:my-[40px] sm:h-11 sm:text-[14px] md:my-[53px]"
            onClick={onAccept}
            disabled={isPending}
          >
            {isPending ? 'Accepting...' : 'Accept & Create Account'}
          </Button>

          <p className="mt-7 text-center text-[12px] text-[#6F7680] dark:text-[#A9B0BA] sm:text-[13px] lg:text-[14px]">
            Already have an account?{' '}
            <Link
              to={ROUTES.LOGIN}
              className="cursor-pointer font-semibold text-[#1565C0] transition-colors hover:underline dark:text-[#4DA3FF]"
            >
              Log in
            </Link>
          </p>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
