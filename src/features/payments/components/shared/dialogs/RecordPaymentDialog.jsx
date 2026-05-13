import { zodResolver } from '@hookform/resolvers/zod'
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

import { recordPaymentSchema } from '@/features/payments/schemas/payments.schema'

const paymentMethods = ['Bank Transfer', 'Stripe', 'Cash']

const defaultValues = {
  company: '',
  amount: '',
  paymentMethod: 'Bank Transfer',
  referenceId: '',
}

export const RecordPaymentDialog = ({ open, onClose, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(recordPaymentSchema),
    defaultValues,
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset(defaultValues)
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit?.(values)
    closeDialog()
  }

  return (
    <BaseDialog
      open={open}
      title="Record Payment"
      onClose={closeDialog}
      widthClassName="max-w-[640px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Company</p>

                <FormControl>
                  <Input
                    {...field}
                    placeholder="Search by name or email"
                    className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.company?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Amount</p>

                <FormControl>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#6F7680] dark:text-[#A9B0BA]">
                      $
                    </span>
                    <Input
                      {...field}
                      inputMode="decimal"
                      placeholder="Enter amount"
                      className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pl-7 pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
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

                <FormMessage>{form.formState.errors.amount?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Payment Method
                </p>

                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>

                    <SelectContent className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]">
                      {paymentMethods.map((method) => (
                        <SelectItem key={method} value={method}>
                          {method}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage>{form.formState.errors.paymentMethod?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referenceId"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Transaction ID / Reference
                </p>

                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter reference number"
                    className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-white/5 dark:text-white dark:placeholder:text-[#9AA2AD] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.referenceId?.message}</FormMessage>
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
              className="h-10 cursor-pointer rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1]"
            >
              Record Payment
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}
