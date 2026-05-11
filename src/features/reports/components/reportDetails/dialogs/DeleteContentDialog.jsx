import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import {
  ReportDialogActions,
  ReportDialogShell,
  ReportSummaryStrip,
} from './ReportDialogShared'

export const DeleteContentDialog = ({
  open,
  report,
  reason,
  onReasonChange,
  onClose,
  onConfirm,
}) => {
  const contentLabel = report.entityType === 'comment' ? 'comment' : 'post'

  return (
    <ReportDialogShell open={open} title={`Remove this ${contentLabel} from platform?`} onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        This {contentLabel} will no longer be visible or accessible to anyone. This action cannot
        be reversed.
      </p>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Reason for deletion</p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full rounded-md border border-[#E2E8F0] bg-white text-xs text-[#1F1E1F] dark:border-white/10 dark:bg-transparent dark:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Spam">Spam</SelectItem>
            <SelectItem value="Hate speech">Hate speech</SelectItem>
            <SelectItem value="Harassment">Harassment</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel={`Remove ${report.entityType === 'comment' ? 'Comment' : 'Post'}`}
        confirmClassName="h-10 bg-[#E50914] text-sm text-white hover:bg-[#C60812]"
      />
    </ReportDialogShell>
  )
}
