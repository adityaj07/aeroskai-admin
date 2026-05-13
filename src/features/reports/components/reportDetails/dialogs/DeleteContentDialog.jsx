import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

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
    <ReportDialogShell
      open={open}
      title={`Remove this ${contentLabel} from platform?`}
      onClose={onClose}
    >
      <ReportSummaryStrip report={report} />

      <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        This {contentLabel} will no longer be visible or accessible to anyone. This action cannot be
        reversed.
      </p>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
          Reason for deletion
        </p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            className="z-1000 border border-[#E2E8F0] bg-white dark:border-[#25292E] dark:bg-[#121417]"
            align="end"
          >
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
