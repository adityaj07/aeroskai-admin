import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import {
  ReportDialogActions,
  ReportDialogShell,
  ReportSummaryStrip,
} from './ReportDialogShared'

export const EditContentDialog = ({
  open,
  report,
  content,
  reason,
  explanation,
  onContentChange,
  onReasonChange,
  onExplanationChange,
  onClose,
  onConfirm,
}) => {
  return (
    <ReportDialogShell open={open} title="Edit Content" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Edit Content</p>
        <Textarea
          value={content}
          onChange={(event) => onContentChange(event.target.value)}
          className="min-h-[72px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-white/10 dark:bg-transparent"
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Reason for edit</p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full rounded-md border border-[#E2E8F0] bg-white text-xs text-[#1F1E1F] dark:border-white/10 dark:bg-transparent dark:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Remove spam elements">Remove spam elements</SelectItem>
            <SelectItem value="Remove abusive language">Remove abusive language</SelectItem>
            <SelectItem value="Fix policy violation">Fix policy violation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
          Add explanation (Optional)
        </p>
        <Textarea
          value={explanation}
          onChange={(event) => onExplanationChange(event.target.value)}
          placeholder="Explain what was changed and why"
          className="min-h-[72px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-white/10 dark:bg-transparent"
        />
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Save Changes"
        confirmClassName="h-10 bg-[#2643E9] text-sm text-white hover:bg-[#1E36C0]"
      />
    </ReportDialogShell>
  )
}
