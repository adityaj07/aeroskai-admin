import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

import { sendSubscriptionEmailSchema } from '@/features/companies/schemas/companies.schema'

const emailTypes = [
  { value: 'pricing', label: 'Pricing & Plan Details' },
  { value: 'invoice', label: 'Invoice / Purchase Order' },
  { value: 'renewal', label: 'Renewal Reminder' },
  { value: 'update', label: 'Subscription Update' },
]

const getDefaultValues = (toEmail) => ({
  type: 'pricing',

  subject: 'Your Aeroskai Subscription Details',

  message: `Dear ${toEmail},

Your current subscription details are as follows:

Plan: Pro
Duration: Jan 1, 2025 - Dec 31, 2025

Best regards,
Aeroskai Team`,
})

export const SendSubscriptionEmailDialog = ({ open, toEmail, onClose, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(sendSubscriptionEmailSchema),
    defaultValues: getDefaultValues(toEmail),
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset(getDefaultValues(toEmail))
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit(values)
  }

  return (
    <BaseDialog open={open} title="Send Subscription Email" onClose={closeDialog}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>

            <Input
              value={toEmail}
              readOnly
              className="mt-2 h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
            />
          </div>

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">
                  Email type
                </p>

                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="space-y-1"
                  >
                    {emailTypes.map((emailType) => (
                      <label key={emailType.value} className="flex items-center gap-2 text-xs">
                        <RadioGroupItem
                          value={emailType.value}
                          className="border-[#D6DAE0] text-[#1565C0] data-[state=checked]:border-[#1565C0] data-[state=checked]:bg-[#1565C0]"
                        />

                        {emailType.label}
                      </label>
                    ))}
                  </RadioGroup>
                </FormControl>

                <FormMessage>{form.formState.errors.type?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>

                <FormControl>
                  <Input
                    {...field}
                    className="h-10 rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:h-11 sm:text-[14px] sm:placeholder:text-[13px]"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.subject?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>

                <FormControl>
                  <Textarea
                    {...field}
                    rows={6}
                    className="max-h-45 overflow-y-auto rounded-lg border border-[#F3F4F6] bg-[#F7F9F9] pr-10 text-[13px] text-xs text-[#1F1E1F] ring-0 placeholder:text-[12px] placeholder:text-[#6F7680] dark:border-[#25292E] dark:bg-[#14171A] dark:text-white dark:placeholder:text-[#A2AAB4] sm:text-[14px] sm:placeholder:text-[13px] md:max-h-60"
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
              onClick={closeDialog}
              className="h-10 cursor-pointer bg-[#EAEEF3] dark:bg-white/10"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-10 cursor-pointer bg-[#1565C0] text-white hover:bg-[#0F54A1]"
            >
              Send Email
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}
