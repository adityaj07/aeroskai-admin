import { zodResolver } from '@hookform/resolvers/zod'
import { ViewIcon, ViewOffSlashIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/constants/routes.constants'
import { AuthFormMotion } from '@/features/auth/components/AuthFormMotion'

import { resetPasswordSchema } from '../schemas/resetPassword.schema'

export const ResetPasswordForm = () => {
  const navigate = useNavigate()
  const [isPending, setIsPending] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = async () => {
    try {
      setIsPending(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success('Password reset successfully')
      navigate(ROUTES.LOGIN)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to reset password. Please try again.'

      toast.error(message)
      form.setError('root', { message })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-white dark:border-white/10 dark:bg-[#121417]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-2xl text-[#1F1E1F] dark:text-white md:text-3xl">
            Reset password
          </CardTitle>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A9B0BA]">
            Create a new password for your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="password"
                  className="text-[13px] font-semibold text-[#0C1014] dark:text-white"
                >
                  New Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                      autoComplete="new-password"
                      className="rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[#1F1E1F] ring-0 placeholder:text-[#6F7680] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD]"
                      {...form.register('password')}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    >
                      <HugeiconsIcon
                        icon={showPassword ? ViewOffSlashIcon : ViewIcon}
                        size={18}
                        strokeWidth={1.8}
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
                  className="text-[13px] font-semibold text-[#0C1014] dark:text-white"
                >
                  Confirm Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm new password"
                      autoComplete="new-password"
                      className="rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[#1F1E1F] ring-0 placeholder:text-[#6F7680] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD]"
                      {...form.register('confirmPassword')}
                    />

                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    >
                      <HugeiconsIcon
                        icon={showConfirmPassword ? ViewOffSlashIcon : ViewIcon}
                        size={18}
                        strokeWidth={1.8}
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
                className="mt-10 h-10 w-full bg-[#1565C0] text-sm"
                disabled={isPending}
              >
                {isPending ? 'Resetting...' : 'Reset Password'}
              </Button>

              <Link
                to={ROUTES.LOGIN}
                className="mt-8 flex justify-center text-[14px] font-medium text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A9B0BA] dark:hover:text-white"
              >
                Back to login
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
