import { zodResolver } from '@hookform/resolvers/zod'
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

import { forgotPasswordSchema } from '../schemas/forgotPassword.schema'

export const ForgotPasswordForm = () => {
  const navigate = useNavigate()
  const [isPending, setIsPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onSubmit',
  })

  const onSubmit = async (values) => {
    try {
      setIsPending(true)

      // Simulate API call to send reset email
      await new Promise((resolve) => setTimeout(resolve, 1500))

      sessionStorage.setItem('resetEmail', values.email)

      toast.success('Reset link sent to your email')

      navigate(ROUTES.CHECK_EMAIL)
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        'Failed to send reset link. Please try again.'

      toast.error(message)
      form.setError('root', { message })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-transparent dark:border-[#25292E]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
            Forgot your password?
          </CardTitle>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
            Enter your email to receive a reset link.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <FormItem className="mt-[29px]">
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
                    className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                    {...form.register('email')}
                  />
                </FormControl>

                <FormMessage className="text-xs text-[#F43F5E]">
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>

              <FormMessage className="text-xs text-[#F43F5E]">
                {form.formState.errors.root?.message}
              </FormMessage>

              <Button
                type="submit"
                className="mt-[36px] h-10 w-full cursor-pointer bg-[#1565C0] text-[13px] sm:mt-[40px] sm:h-11 sm:text-[14px] md:mt-[53px]"
                disabled={isPending}
              >
                {isPending ? 'Sending...' : 'Send Reset Link'}
              </Button>

              <Link
                to={ROUTES.LOGIN}
                className="mt-8 flex cursor-pointer justify-center text-[12px] font-medium text-[#6F7680] transition-colors hover:text-[#1565C0] dark:text-[#A9B0BA] dark:hover:text-white sm:text-[13px] lg:text-[14px]"
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
