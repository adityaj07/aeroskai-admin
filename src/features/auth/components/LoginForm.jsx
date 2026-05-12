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
import { loginSchema } from '@/features/auth/schemas/login.schema'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  // dummy stuff
  const onSubmit = async () => {
    try {
      setIsPending(true)

      await new Promise((resolve) => setTimeout(resolve, 700))

      localStorage.setItem('token', 'dummy-token')

      toast.success('Logged in successfully')

      navigate(ROUTES.DASHBOARD)
    } catch {
      toast.error('Something went wrong')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <AuthFormMotion>
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-transparent dark:border-[#25292E]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-[24px] font-semibold tracking-[-0.02em] text-[#1F1E1F] dark:text-[#F7F9F9] sm:text-[28px] lg:text-[32px]">
            Welcome back
          </CardTitle>

          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A2AAB4] sm:text-[13px] lg:text-[14px]">
            Login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="email"
                  className="text-[12px] font-semibold text-[#0C1014] dark:text-[#F7F9F9] sm:text-[13px]"
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
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                      {...form.register('password')}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      className="text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                    >
                      <HugeiconsIcon
                        icon={showPassword ? ViewIcon : ViewOffSlashIcon}
                        size={18}
                        strokeWidth={1.8}
                        className="text-[#6F7680] dark:text-[#A9B0BA]"
                      />
                    </button>
                  </div>
                </FormControl>

                <div className="flex justify-end">
                  <Link
                    to={ROUTES.FORGOT_PASSWORD}
                    className="text-[11px] font-medium text-[#F43F5E] transition-colors hover:opacity-80 dark:text-[#FB7185] sm:text-[12px]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <FormMessage className="text-xs text-[#F43F5E]">
                  {form.formState.errors.password?.message}
                </FormMessage>
              </FormItem>

              <FormMessage>{form.formState.errors.root?.message}</FormMessage>

              <Button
                type="submit"
                className="mt-[48px] h-10 w-full cursor-pointer bg-[#1565C0] text-[13px] sm:mt-[53px] sm:h-11 sm:text-[14px]"
                disabled={isPending}
              >
                {isPending ? 'Logging in...' : 'Log In'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </AuthFormMotion>
  )
}
