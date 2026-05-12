import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

export const ResolveReportDialog = ({
  open,
  report,
  resolution,
  actionTaken,
  notes,
  onResolutionChange,
  onActionTakenChange,
  onNotesChange,
  onClose,
  onConfirm,
}) => {
  return (
    <ReportDialogShell open={open} title="Resolve this report?" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Resolution</p>
        <Select value={resolution} onValueChange={onResolutionChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Action taken (content/user moderated)">
              Action taken (content/user moderated)
            </SelectItem>
            <SelectItem value="Warned user">Warned user</SelectItem>
            <SelectItem value="No action required">No action required</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Action taken</p>
        <Input
          value={actionTaken}
          onChange={(event) => onActionTakenChange(event.target.value)}
          className="h-10 rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">Notes</p>
        <Textarea
          value={notes}
          onChange={(event) => onNotesChange(event.target.value)}
          placeholder="Add any details about how this report was handled"
          className="min-h-[84px] rounded-md border border-[#E2E8F0] bg-white text-xs dark:border-[#25292E] dark:bg-transparent"
        />
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Resolve Report"
        confirmClassName="h-10 cursor-pointer rounded-md bg-[#1565C0] text-sm font-semibold text-white hover:bg-[#0F54A1]"
      />
    </ReportDialogShell>
  )
}
