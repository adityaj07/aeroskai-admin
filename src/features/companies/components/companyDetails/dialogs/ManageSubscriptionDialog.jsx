import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { manageSubscriptionSchema } from '@/features/companies/schemas/companies.schema'
import { SubscriptionDatePickerField } from '@/features/subscriptions/components/details/company/SubscriptionDatePickerField'

const defaultValues = {
  price: '',
  seats: '',
  startDate: new Date('2026-01-01'),
  endDate: new Date('2026-12-31'),
}

export const ManageSubscriptionDialog = ({ open, data, onClose, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(manageSubscriptionSchema),
    defaultValues,
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (!open) return

    form.reset({
      price: String(data.price ?? ''),
      seats: String(data.seats ?? ''),
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    })
  }, [data.endDate, data.price, data.seats, data.startDate, form, open])

  const closeDialog = () => {
    form.reset({
      price: String(data.price ?? ''),
      seats: String(data.seats ?? ''),
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
    })

    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit({
      ...values,
      price: Number(values.price),
      seats: Number(values.seats),
    })
  }

  return (
    <BaseDialog open={open} title="Manage Subscription" onClose={closeDialog}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="rounded-lg bg-[#F7F9F9] p-3 dark:bg-white/5">
            <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">Current Subscription</p>

            <p className="text-2xl font-semibold text-[#0C1014] dark:text-white">
              {data.seats} Seats
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-[#6F7680] dark:text-[#A9B0BA]">
              <div>
                Start Date
                <br />
                {data.startDate}
              </div>

              <div>
                End Date
                <br />
                {data.endDate}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-1 flex items-center gap-1">
                    <p className="text-xs font-semibold text-[#0C1014] dark:text-[#F7F9F9]">Price</p>
                    <span className="text-xs font-semibold text-[#DC2626]">*</span>
                  </div>

                  <FormControl>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6F7680] dark:text-[#A9B0BA]">
                        $
                      </span>
                      <Input
                        {...field}
                        inputMode="decimal"
                        className="h-10 bg-[#F7F9F9] pl-7 dark:bg-white/5"
                        onChange={(event) => {
                          const nextValue = event.target.value.replace(/[^\d.]/g, '')
                          const parts = nextValue.split('.')
                          const normalized =
                            parts.length > 2 ? `${parts[0]}.${parts.slice(1).join('')}` : nextValue
                          field.onChange(normalized)
                        }}
                      />
                    </div>
                  </FormControl>

                  <FormMessage>{form.formState.errors.price?.message}</FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="seats"
              render={({ field }) => (
                <FormItem>
                  <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                    Number of Seats
                  </p>

                  <FormControl>
                    <Input
                      {...field}
                      inputMode="numeric"
                      className="h-10 bg-[#F7F9F9] dark:bg-white/5"
                      onChange={(event) => field.onChange(event.target.value.replace(/[^\d]/g, ''))}
                    />
                  </FormControl>

                  <FormMessage>{form.formState.errors.seats?.message}</FormMessage>
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-2">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                      Start Date
                    </p>

                    <FormControl>
                      <SubscriptionDatePickerField value={field.value} onChange={field.onChange} />
                    </FormControl>

                    <FormMessage>{form.formState.errors.startDate?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                      End Date
                    </p>

                    <FormControl>
                      <SubscriptionDatePickerField value={field.value} onChange={field.onChange} />
                    </FormControl>

                    <FormMessage>{form.formState.errors.endDate?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="secondary"
              onClick={closeDialog}
              className="h-10 cursor-pointer border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-[#25292E] dark:bg-white/10 dark:text-white"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-10 cursor-pointer bg-[#1565C0] text-sm text-white hover:bg-[#0F54A1]"
            >
              Save Subscription
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}
