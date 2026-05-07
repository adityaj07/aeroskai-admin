import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ROUTES } from '@/constants/routes.constants'
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
    <Card className="w-full rounded-[20px] border-[#F3F4F6]">
      <CardHeader className="space-y-2 pb-4 text-center">
        <CardTitle className="text-2xl text-[#1F1E1F] md:text-3xl">Forgot your password?</CardTitle>
        <CardDescription className="text-[12px] text-[#6F7680]">
          Enter your email to receive a reset link.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            <FormItem className="mt-3">
              <FormLabel htmlFor="email" className="text-[13px] font-semibold text-[#0C1014]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  autoComplete="email"
                  className="rounded-lg border-[1px] border-[#F3F4F6] bg-[#F7F9F9] pr-10 ring-0 placeholder:text-[#6F7680]"
                  {...form.register('email')}
                />
              </FormControl>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </FormItem>

            <FormMessage>{form.formState.errors.root?.message}</FormMessage>

            <Button
              type="submit"
              className="mt-[53px] h-10 w-full bg-[#1565C0] text-sm"
              disabled={isPending}
            >
              {isPending ? 'Sending...' : 'Send Reset Link'}
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
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
