import { zodResolver } from '@hookform/resolvers/zod'
import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'
import { useCreateInvitedAccount } from '@/features/auth/hooks/useCreateInvitedAccount'
import { createInvitedAccountSchema } from '@/features/auth/schemas/createInvitedAccount.schema'

export const CreateInvitedAccountForm = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const inviteToken = searchParams.get('token') ?? 'demo-invite-token'

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { mutateAsync: createInvitedAccount, isPending } = useCreateInvitedAccount()

  const form = useForm({
    resolver: zodResolver(createInvitedAccountSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = async (values) => {
    try {
      await createInvitedAccount({ ...values, token: inviteToken })

      toast.success('Account created successfully')

      navigate(ROUTES.LOGIN)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to create account. Please try again.'

      form.setError('root', { message })

      toast.error(message)
    }
  }

  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-transparent dark:border-[#25292E]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
            Create your account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="email"
                  className="text-[12px] font-semibold text-[#0C1014] dark:text-white sm:text-[13px]"
                >
                  Email
                </FormLabel>

                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    autoComplete="email"
                    className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                    {...form.register('email')}
                  />
                </FormControl>

                <FormMessage className="text-xs text-[#F43F5E]">
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>

              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="password"
                  className="text-[12px] font-semibold text-[#0C1014] dark:text-white sm:text-[13px]"
                >
                  Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                      {...form.register('password')}
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      <HugeiconsIcon
                        icon={showPassword ? ViewIcon : ViewOffSlashIcon}
                        size={17}
                        className="text-[#6F7680] dark:text-[#A9B0BA]"
                      />
                    </button>
                  </div>
                </FormControl>

                <FormMessage className="text-xs text-[#F43F5E]">
                  {form.formState.errors.password?.message}
                </FormMessage>
              </FormItem>

              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="confirmPassword"
                  className="text-[12px] font-semibold text-[#0C1014] dark:text-white sm:text-[13px]"
                >
                  Confirm Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Re-enter password"
                      autoComplete="new-password"
                      className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                      {...form.register('confirmPassword')}
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                    >
                      <HugeiconsIcon
                        icon={showConfirmPassword ? ViewIcon : ViewOffSlashIcon}
                        size={17}
                        className="text-[#6F7680] dark:text-[#A9B0BA]"
                      />
                    </button>
                  </div>
                </FormControl>

                <FormMessage className="text-xs text-[#F43F5E]">
                  {form.formState.errors.confirmPassword?.message}
                </FormMessage>
              </FormItem>

              <FormMessage className="text-xs text-[#F43F5E]">
                {form.formState.errors.root?.message}
              </FormMessage>

              <Button
                type="submit"
                className="mt-[53px] h-10 w-full cursor-pointer bg-[#1565C0] text-[13px] text-white hover:bg-[#0F54A1] sm:h-11 sm:text-[14px]"
                disabled={isPending}
              >
                {isPending ? 'Joining...' : 'Join Company'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
