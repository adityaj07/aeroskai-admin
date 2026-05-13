import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { issueRefundSchema } from '@/features/payments/schemas/payments.schema'

const refundTypes = ['Full Refund', 'Partial Refund']

const refundReasons = ['Requested by customer', 'Duplicate charge', 'Billing error']

export const IssueRefundDialog = ({ open, payment, onClose, onSubmit }) => {
  const maxRefundable = useMemo(
    () => Number(String(payment?.amount ?? '0').replace(/[^0-9.-]+/g, '')) || 0,
    [payment]
  )

  const form = useForm({
    resolver: zodResolver(issueRefundSchema),
    defaultValues: {
      refundType: 'Full Refund',
      refundAmount: '',
      reason: 'Requested by customer',
    },
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset({
      refundType: 'Full Refund',
      refundAmount: '',
      reason: 'Requested by customer',
    })

    onClose()
  }

  const handleSubmit = (values) => {
    const amount = Number(values.refundAmount)

    if (amount > maxRefundable) {
      form.setError('refundAmount', {
        type: 'manual',
        message: `Refund amount cannot exceed $${maxRefundable.toFixed(2)}`,
      })

      return
    }

    onSubmit?.({
      paymentId: payment?.id,
      ...values,
    })

    closeDialog()
  }

  return (
    <BaseDialog
      open={open}
      title="Issue refund"
      onClose={closeDialog}
      widthClassName="max-w-[640px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div className="rounded-lg bg-[#EEF1FA] p-3 text-[14px] font-bold text-[#1565C0] dark:bg-[#1565C00D]">
            <p>{payment?.referenceId ?? 'TXN-000000'}</p>
            <p>{payment?.company ?? payment?.user ?? 'N/A'}</p>
            <p>{payment?.amount ?? '$0.00'}</p>

            <p>
              Paid on {payment?.date ?? 'N/A'} via {payment?.paymentMethod ?? 'N/A'}
            </p>

            <p>Status: {payment?.status ?? 'N/A'}</p>
          </div>

          <FormField
            control={form.control}
            name="refundType"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Refund Type
                </p>

                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
                      <SelectValue placeholder="Refund type" />
                    </SelectTrigger>

                    <SelectContent className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]">
                      {refundTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{form.formState.errors.refundType?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="refundAmount"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Refund Amount
                </p>

                <FormControl>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6F7680] dark:text-[#A9B0BA]">
                      $
                    </span>
                    <Input
                      {...field}
                      inputMode="decimal"
                      placeholder="Enter amount"
                      className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-transparent pl-7 pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
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

                <p className="mt-1 text-[11px] text-[#6F7680] dark:text-[#9AA2AD]">
                  Maximum refundable: ${maxRefundable.toFixed(2)}
                </p>

                <FormMessage>{form.formState.errors.refundAmount?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Reason</p>

                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
                      <SelectValue placeholder="Reason" />
                    </SelectTrigger>

                    <SelectContent className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]">
                      {refundReasons.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{form.formState.errors.reason?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Button
              type="button"
              onClick={closeDialog}
              className="h-10 cursor-pointer rounded-md bg-[#EAEEF3] text-sm font-semibold text-[#0C1014] hover:bg-[#DEE5EC] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-10 cursor-pointer rounded-md bg-[#DC2626] text-sm font-semibold text-white hover:bg-[#B91C1C]"
            >
              Issue Refund
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}
