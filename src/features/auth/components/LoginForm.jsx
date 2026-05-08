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
import { useLogin } from '@/features/auth/hooks/useLogin'
import { loginSchema } from '@/features/auth/schemas/login.schema'

export const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  // const { mutateAsync: login, isPending } = useLogin()
  const [isPending, setIsPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  })

  // const onSubmit = async (values) => {
  //   try {
  //     const response = await login(values)
  //     const token = response?.data?.token || response?.data?.accessToken

  //     if (token) {
  //       localStorage.setItem('token', token)
  //     }

  //     toast.success('Logged in successfully')
  //     navigate(ROUTES.DASHBOARD)
  //   } catch (error) {
  //     const message =
  //       error?.response?.data?.message ||
  //       error?.message ||
  //       'Login failed. Please check your credentials and try again.'

  //     toast.error(message)
  //     form.setError('root', { message })
  //   }
  // }

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
      <Card className="w-full rounded-[20px] border-[#F3F4F6] bg-white dark:border-white/10 dark:bg-[#121417]">
        <CardHeader className="space-y-2 pb-4 text-center">
          <CardTitle className="text-2xl text-[#1F1E1F] dark:text-white md:text-3xl">
            Welcome back
          </CardTitle>
          <CardDescription className="text-[12px] text-[#6F7680] dark:text-[#A9B0BA]">
            Login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
              <FormItem className="mt-3">
                <FormLabel
                  htmlFor="email"
                  className="text-[13px] font-semibold text-[#0C1014] dark:text-white"
                >
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    autoComplete="email"
                    className="rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[#1F1E1F] ring-0 placeholder:text-[#6F7680] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD]"
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
                  className="text-[13px] font-semibold text-[#0C1014] dark:text-white"
                >
                  Password
                </FormLabel>

                <FormControl>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      autoComplete="current-password"
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
                    className="text-xs font-medium text-[#F43F5E] transition-colors hover:opacity-80 dark:text-[#FB7185]"
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
                className="mt-[53px] h-10 w-full bg-[#1565C0] text-sm"
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
