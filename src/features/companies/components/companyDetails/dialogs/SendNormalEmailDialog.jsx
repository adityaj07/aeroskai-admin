import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { sendNormalEmailSchema } from '@/features/companies/schemas/companies.schema'

const defaultValues = {
  subject: '',
  message: '',
}

export const SendNormalEmailDialog = ({ open, toEmail, onClose, onSubmit }) => {
  const form = useForm({
    resolver: zodResolver(sendNormalEmailSchema),
    defaultValues,
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset(defaultValues)
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit(values)
  }

  return (
    <BaseDialog open={open} title="Send Email" onClose={closeDialog}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>

            <Input value={toEmail} readOnly className="h-10 bg-[#F7F9F9] dark:bg-white/5" />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>

                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter email subject"
                    className="h-10 bg-[#F7F9F9] dark:bg-white/5"
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
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Message</p>

                <FormControl>
                  <Textarea
                    {...field}
                    rows={6}
                    placeholder="Write your message here..."
                    className="max-h-[180px] overflow-y-auto bg-[#F7F9F9] dark:bg-white/5 md:max-h-[240px]"
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
