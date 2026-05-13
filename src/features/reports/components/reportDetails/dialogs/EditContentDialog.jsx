import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { editContentSchema } from '@/features/reports/schemas/reports.schema'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

export const EditContentDialog = ({
  open,
  report,
  content,
  reason,
  explanation,
  onClose,
  onConfirm,
}) => {
  const form = useForm({
    resolver: zodResolver(editContentSchema),
    defaultValues: {
      content,
      reason,
      explanation,
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (!open) return

    form.reset({
      content,
      reason,
      explanation,
    })
  }, [content, explanation, form, open, reason])

  const closeDialog = () => {
    form.reset({
      content,
      reason,
      explanation,
    })
    onClose()
  }

  const handleSubmit = (values) => {
    onConfirm(values)
  }

  return (
    <ReportDialogShell open={open} title="Edit Content" onClose={closeDialog}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <ReportSummaryStrip report={report} />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
                  Edit Content
                </p>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[72px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.content?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
                  Reason for edit
                </p>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]"
                      align="end"
                    >
                      <SelectItem value="Remove spam elements">Remove spam elements</SelectItem>
                      <SelectItem value="Remove abusive language">Remove abusive language</SelectItem>
                      <SelectItem value="Fix policy violation">Fix policy violation</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{form.formState.errors.reason?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
                  Add explanation (Optional)
                </p>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Explain what was changed and why"
                    className="min-h-[72px] max-h-[220px] overflow-y-auto rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent md:max-h-[260px]"
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.explanation?.message}</FormMessage>
              </FormItem>
            )}
          />

          <ReportDialogActions
            onClose={closeDialog}
            onConfirm={form.handleSubmit(handleSubmit)}
            confirmLabel="Save Changes"
            confirmClassName="h-10 cursor-pointer rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1]"
          />
        </form>
      </Form>
    </ReportDialogShell>
  )
}
