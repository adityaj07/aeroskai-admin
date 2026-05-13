import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { approveApplicationSchema } from '@/features/applications/schemas/applications.schema'

import DatePickerField from './DatePickerField'
import { formatDate } from '@/utils/formatDate'

const defaultValues = {
  price: '70.99',
  seats: '20',
  startDate: new Date('2026-01-01'),
  endDate: new Date('2026-12-31'),
  sendBillingEmail: true,
  foundingCompanyBadge: false,
}

export const ApproveApplicationDialog = ({ open, application, onClose, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(approveApplicationSchema),
    defaultValues,
    mode: 'onSubmit',
  })

  const contactName = useMemo(
    () =>
      application.primaryContact?.find((item) => item.label === 'Full Name')?.value ??
      application.company,
    [application.company, application.primaryContact]
  )

  const closeDialog = () => {
    form.reset(defaultValues)
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit({
      price: Number(values.price),
      seats: Number(values.seats),
      startDate: formatDate(values.startDate),
      endDate: formatDate(values.endDate),
      sendBillingEmail: values.sendBillingEmail,
      foundingCompanyBadge: values.foundingCompanyBadge,
      contactName,
    })
  }

  return (
    <BaseDialog
      open={open}
      title="Approve & send billing details"
      onClose={closeDialog}
      widthClassName="max-w-[620px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="rounded-xl bg-[#F7F9F9] p-3 dark:bg-white/5">
            <p className="text-sm font-bold text-[#0C1014] dark:text-[#F7F9F9]">
              {application.company}
            </p>
            <p className="mt-1 text-[12px] text-[#6F7680] dark:text-[#A2AAB4]">
              {application.email}
            </p>
          </div>

          <div className="space-y-3">
            {/* Price */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-1 flex items-center gap-1">
                    <p className="text-xs font-semibold text-[#0C1014] dark:text-[#F7F9F9]">
                      Price
                    </p>
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
                        className="h-10 bg-[#F7F9F9] pl-7 text-sm dark:bg-white/5"
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

            {/* Seats */}
            <FormField
              control={form.control}
              name="seats"
              render={({ field }) => (
                <FormItem>
                  <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                    Number of Seats
                  </p>

                  <FormControl>
                    <Input {...field} className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5" />
                  </FormControl>

                  <FormMessage>{form.formState.errors.seats?.message}</FormMessage>
                </FormItem>
              )}
            />

            {/* Dates */}
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                      Start Date
                    </p>

                    <FormControl>
                      <DatePickerField value={field.value} onChange={field.onChange} />
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
                      <DatePickerField value={field.value} onChange={field.onChange} />
                    </FormControl>

                    <FormMessage>{form.formState.errors.endDate?.message}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <FormField
              control={form.control}
              name="sendBillingEmail"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <div className="flex items-start gap-3 text-sm text-[#0C1014] dark:text-white">
                    <FormControl>
                      <Checkbox
                        id="send-billing-email"
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                        className="mt-0.5"
                      />
                    </FormControl>
                    <div>
                      <label htmlFor="send-billing-email" className="block text-xs font-medium">
                        Send billing email
                      </label>
                      <span className="block text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
                        Notify company with payment details
                      </span>
                    </div>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="foundingCompanyBadge"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <div className="flex items-start gap-3 text-sm text-[#0C1014] dark:text-white">
                    <FormControl>
                      <Checkbox
                        id="founding-company-badge"
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(Boolean(checked))}
                        className="mt-0.5"
                      />
                    </FormControl>
                    <div>
                      <label htmlFor="founding-company-badge" className="block text-xs font-medium">
                        Founding Company Badge
                      </label>
                      <span className="block text-[11px] text-[#6F7680] dark:text-[#A9B0BA]">
                        Display badge across the platform
                      </span>
                    </div>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Button
              type="button"
              variant="secondary"
              onClick={closeDialog}
              className="h-10 cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="h-10 cursor-pointer bg-[#1565C0] text-white hover:bg-[#0F54A1]"
            >
              Approve & Send Email
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}

export default ApproveApplicationDialog
