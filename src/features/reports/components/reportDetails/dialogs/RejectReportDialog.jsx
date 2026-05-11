import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import {
  ReportDialogActions,
  ReportDialogShell,
  ReportSummaryStrip,
} from './ReportDialogShared'

export const RejectReportDialog = ({ open, report, reason, onReasonChange, onClose, onConfirm }) => {
  return (
    <ReportDialogShell open={open} title="Reject this report?" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Reason for rejection</p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full rounded-md border border-[#E2E8F0] bg-white text-xs text-[#1F1E1F] dark:border-white/10 dark:bg-transparent dark:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
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
        confirmClassName="h-10 bg-[#E50914] text-sm text-white hover:bg-[#C60812]"
      />
    </ReportDialogShell>
  )
}
