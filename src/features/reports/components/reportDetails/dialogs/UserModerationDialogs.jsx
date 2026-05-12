import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ReportDialogActions, ReportDialogShell, ReportSummaryStrip } from './ReportDialogShared'

export const DeactivateUserDialog = ({
  open,
  report,
  reason,
  onReasonChange,
  onClose,
  onConfirm,
}) => {
  return (
    <ReportDialogShell open={open} title="Deactivate this user?" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <p className="text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        This user will no longer be able to log in or access the platform until reactivated.
      </p>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
          Reason for deactivation
        </p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Spam or abuse">Spam or abuse</SelectItem>
            <SelectItem value="Repeated policy violations">Repeated policy violations</SelectItem>
            <SelectItem value="Impersonation">Impersonation</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Deactivate User"
        confirmClassName="h-10 bg-[#E50914] text-sm text-white hover:bg-[#C60812]"
      />
    </ReportDialogShell>
  )
}

export const SuspendUserDialog = ({
  open,
  report,
  duration,
  reason,
  onDurationChange,
  onReasonChange,
  onClose,
  onConfirm,
}) => {
  return (
    <ReportDialogShell open={open} title="Suspend this user?" onClose={onClose}>
      <ReportSummaryStrip report={report} />

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
          Suspension Duration
        </p>
        <Select value={duration} onValueChange={onDurationChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="24 hours">24 hours</SelectItem>
            <SelectItem value="7 days">7 days</SelectItem>
            <SelectItem value="30 days">30 days</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-[#1F1E1F] dark:text-white">
          Reason for suspension
        </p>
        <Select value={reason} onValueChange={onReasonChange}>
          <SelectTrigger className="h-10 w-full justify-between rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-[13px] text-[#1F1E1F] shadow-none ring-0 placeholder:text-[#6F7680] focus:outline-none focus:ring-0 dark:border-[#25292E] dark:bg-transparent dark:text-white dark:placeholder:text-[#A9B0BA]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="Spam">Spam</SelectItem>
            <SelectItem value="Harassment">Harassment</SelectItem>
            <SelectItem value="Hate speech">Hate speech</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ReportDialogActions
        onClose={onClose}
        onConfirm={onConfirm}
        confirmLabel="Suspend User"
        confirmClassName="h-10 bg-[#E50914] text-sm text-white hover:bg-[#C60812]"
      />
    </ReportDialogShell>
  )
}
