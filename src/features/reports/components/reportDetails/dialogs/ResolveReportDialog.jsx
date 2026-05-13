import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { resolveReportSchema } from '@/features/reports/schemas/reports.schema'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

export const ResolveReportDialog = ({
  open,
  report,
  resolution,
  actionTaken,
  notes,
  onClose,
  onConfirm,
}) => {
  const form = useForm({
    resolver: zodResolver(resolveReportSchema),
    defaultValues: {
      resolution,
      actionTaken,
      notes,
    },
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (!open) return

    form.reset({
      resolution,
      actionTaken,
      notes,
    })
  }, [actionTaken, form, notes, open, resolution])

  const closeDialog = () => {
    form.reset({
      resolution,
      actionTaken,
      notes,
    })
    onClose()
  }

  const handleSubmit = (values) => {
    onConfirm(values)
  }

  return (
    <ReportDialogShell open={open} title="Resolve this report?" onClose={closeDialog}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <ReportSummaryStrip report={report} />

          <FormField
            control={form.control}
            name="resolution"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Resolution</p>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent
                      className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]"
                      align="end"
                    >
                      <SelectItem value="Action taken (content/user moderated)">
                        Action taken (content/user moderated)
                      </SelectItem>
                      <SelectItem value="Warned user">Warned user</SelectItem>
                      <SelectItem value="No action required">No action required</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage>{form.formState.errors.resolution?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="actionTaken"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Action taken</p>
                <FormControl>
                  <Input
                    {...field}
                    className="h-10 rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.actionTaken?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Notes</p>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Add any details about how this report was handled"
                    className="min-h-[84px] max-h-[220px] overflow-y-auto rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent md:max-h-[260px]"
                  />
                </FormControl>
                <FormMessage>{form.formState.errors.notes?.message}</FormMessage>
              </FormItem>
            )}
          />

          <ReportDialogActions
            onClose={closeDialog}
            onConfirm={form.handleSubmit(handleSubmit)}
            confirmLabel="Resolve Report"
            confirmClassName="h-10 cursor-pointer rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1]"
          />
        </form>
      </Form>
    </ReportDialogShell>
  )
}
