import { zodResolver } from '@hookform/resolvers/zod'
import { format, parse, isValid } from 'date-fns'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { sendRenewalReminderSchema } from '@/features/subscriptions/schemas/subscriptions.schema'

import { SubscriptionDatePickerField } from '../SubscriptionDatePickerField'

const parseDateInput = (value) => {
  const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
  return isValid(parsedDate) ? parsedDate : undefined
}

const formatExpiryForMessage = (value) => {
  if (!value) return ''
  return format(value, 'MMM d, yyyy')
}

const replaceExpiryDateInMessage = (message, formattedDate) => {
  if (!formattedDate) return message

  const pattern = /(expire on\s+)([^\n.]+)(\.?)/i

  if (!pattern.test(message)) return message

  return message.replace(pattern, `$1${formattedDate}$3`)
}

const getDefaultValues = (data) => {
  const expiryDate = parseDateInput(data.expiryDate)

  return {
    expiryDate,
    message: replaceExpiryDateInMessage(data.message, formatExpiryForMessage(expiryDate)),
  }
}

export const SendRenewalReminderDialog = ({ open, onClose, data, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(sendRenewalReminderSchema),
    defaultValues: getDefaultValues(data),
    mode: 'onSubmit',
  })

  const expiryDate = form.watch('expiryDate')

  useEffect(() => {
    if (!open) return

    form.reset(getDefaultValues(data))
  }, [data, form, open])

  useEffect(() => {
    if (!open || !expiryDate) return

    const currentMessage = form.getValues('message')

    form.setValue(
      'message',
      replaceExpiryDateInMessage(currentMessage, formatExpiryForMessage(expiryDate))
    )
  }, [expiryDate, form, open])

  const closeDialog = () => {
    form.reset(getDefaultValues(data))
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit({
      ...values,
      expiryDate: format(values.expiryDate, 'dd/MM/yyyy'),
    })
  }

  return (
    <BaseDialog
      open={open}
      title="Send Renewal Reminder"
      onClose={closeDialog}
      widthClassName="max-w-[640px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>

            <Input
              value={data.to}
              readOnly
              className="h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
            />
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>

            <Input
              value={data.subject}
              readOnly
              className="h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
            />
          </div>

          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Expiry Date (for message body)
                </p>

                <FormControl>
                  <SubscriptionDatePickerField value={field.value} onChange={field.onChange} />
                </FormControl>

                <FormMessage>{form.formState.errors.expiryDate?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>

                <FormControl>
                  <Textarea
                    {...field}
                    rows={12}
                    className="max-h-65 overflow-y-auto rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-xs text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:text-[14px] sm:placeholder:text-[13px]"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.message?.message}</FormMessage>
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="secondary"
              className="h-10 cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
              onClick={closeDialog}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-10 cursor-pointer bg-[#1565C0] text-white hover:bg-[#0F54A1]"
            >
              Send Reminder
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}
