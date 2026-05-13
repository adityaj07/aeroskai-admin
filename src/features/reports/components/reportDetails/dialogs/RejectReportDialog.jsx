import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

export const RejectReportDialog = ({
  open,
  report,
  reason,
  onReasonChange,
  onClose,
  onConfirm,
}) => {
  return (
    <ReportDialogShell open={open} title="Reject this report?" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <div>
        <p className="mb-2 text-[12px] font-semibold text-[#1F1E1F] dark:text-white sm:text-[13px]">
          Reason for rejection
        </p>

        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue placeholder="Select rejection reason" />
          </SelectTrigger>

          <SelectContent
            align="end"
            className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]"
          >
            <SelectItem value="No violation found">No violation found</SelectItem>

            <SelectItem value="Insufficient evidence">Insufficient evidence</SelectItem>

            <SelectItem value="Duplicate report">Duplicate report</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Reject Report"
        confirmClassName="h-10 bg-[#E50914] text-[13px] text-white hover:bg-[#C60812] sm:text-sm cursor-pointer"
      />
    </ReportDialogShell>
  )
}
