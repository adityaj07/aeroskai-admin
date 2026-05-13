import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { requestMoreInformationSchema } from '@/features/applications/schemas/applications.schema'

const getDefaultValues = (application, contactName) => ({
  subject: 'Your Aeroskai Application — Additional Information Required',

  message: `Dear ${contactName},

Thank you for applying to join Aeroskai. We have received your application and it is currently under review.

We kindly request the following additional information to complete our review:

Please specify what information you need here.

Please reply to this email with the requested details, or re-submit via the application form.

Best regards,
Aeroskai Admin Team`,
})

export const RequestMoreInformationDialog = ({ open, application, onClose, onSubmit }) => {
  const contactName = useMemo(
    () =>
      application.primaryContact?.find((item) => item.label === 'Full Name')?.value ?? 'Applicant',
    [application.primaryContact]
  )

  const form = useForm({
    resolver: zodResolver(requestMoreInformationSchema),
    defaultValues: getDefaultValues(application, contactName),
    mode: 'onSubmit',
  })

  const closeDialog = () => {
    form.reset(getDefaultValues(application, contactName))
    onClose()
  }

  const handleSubmit = (values) => {
    onSubmit(values)
  }

  return (
    <BaseDialog
      open={open}
      title="Request More Information"
      onClose={closeDialog}
      widthClassName="max-w-[620px]"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-3">
          <div>
            <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">To</p>

            <Input
              value={application.email}
              readOnly
              className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5"
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <p className="mb-1 text-xs font-semibold text-[#0C1014] dark:text-white">Subject</p>

                <FormControl>
                  <Input {...field} className="h-10 bg-[#F7F9F9] text-sm dark:bg-white/5" />
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
                    rows={7}
                    className="max-h-[220px] overflow-y-auto bg-[#F7F9F9] text-sm dark:bg-white/5 md:max-h-[260px]"
                  />
                </FormControl>

                <FormMessage>{form.formState.errors.message?.message}</FormMessage>
              </FormItem>
            )}
          />

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
              Send Email
            </Button>
          </div>
        </form>
      </Form>
    </BaseDialog>
  )
}

export default RequestMoreInformationDialog
