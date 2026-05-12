import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

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
          className="min-h-[72px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Reason for edit</p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
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
          className="min-h-[72px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
        />
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Save Changes"
        confirmClassName="h-10 rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1] cursor-pointer"
      />
    </ReportDialogShell>
  )
}
