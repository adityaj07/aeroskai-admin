import { BaseDialog } from '@/components/shared/app/BaseDialog'
import { Button } from '@/components/ui/button'

export const ReportDialogActions = ({ onClose, onConfirm, confirmLabel, confirmClassName }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        type="button"
        variant="secondary"
        onClick={onClose}
        className="h-10 border border-[#F3F4F6] bg-[#EAEEF3] text-sm text-[#1F1E1F] hover:bg-[#DEE5EC] dark:border-white/10 dark:bg-white/10 dark:text-white"
      >
        Cancel
      </Button>
      <Button type="button" onClick={onConfirm} className={confirmClassName}>
        {confirmLabel}
      </Button>
    </div>
  )
}

export const ReportSummaryStrip = ({ report }) => {
  return (
    <div className="mb-4 rounded-lg border border-[#EEF1F4] bg-[#F8FAFC] p-3 dark:border-white/10 dark:bg-white/5">
      <p className="text-sm font-semibold text-[#0C1014] dark:text-white">{report.id}</p>
      <p className="mt-0.5 text-xs text-[#6F7680] dark:text-[#A9B0BA]">
        Reported {report.reportedType} • {report.reportingAccounts?.[0]?.reason ?? 'Spam'}
      </p>
      <p className="mt-0.5 text-xs text-[#9AA2AD]">Submitted {report.dateSubmitted}</p>
    </div>
  )
}

export const ReportDialogShell = ({ open, title, onClose, children }) => {
  return (
    <BaseDialog open={open} title={title} onClose={onClose} widthClassName="max-w-[640px]">
      <div className="space-y-4">{children}</div>
    </BaseDialog>
  )
}
