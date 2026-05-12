import { Button } from '@/components/ui/button'

import { ReportsStatusBadge } from '../ReportsStatusBadge'

export const ReportDetailsHeader = ({ report, onOpenReject, onOpenResolve, onReviewReport }) => {
  const isPending = report.status === 'Pending'
  const isUnderReview = report.status === 'Under Review'

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-4 rounded-[14px] bg-transparent p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <ReportsStatusBadge status={report.status} />
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end">
          {isPending && (report.reportedType === 'User' || report.reportedType === 'Comment') && (
            <Button
              type="button"
              variant="outline"
              className="h-10 w-full cursor-pointer rounded-md border-[#E2E8F0] bg-[#F8FAFC] px-4 text-xs font-semibold text-[#1F2937] hover:bg-[#EEF2F7] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Mark as Duplicate
            </Button>
          )}

          {(isPending || isUnderReview) && (
            <Button
              type="button"
              variant="outline"
              onClick={onOpenReject}
              className="h-10 w-full cursor-pointer rounded-md border-[#E2E8F0] bg-[#F8FAFC] px-4 text-xs font-semibold text-[#1F2937] hover:bg-[#EEF2F7] dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Reject Report
            </Button>
          )}

          {isPending && (
            <Button
              type="button"
              onClick={onReviewReport}
              className="h-10 cursor-pointer rounded-md bg-[#1565C0] px-4 text-sm font-semibold text-white hover:bg-[#0F54A1] sm:w-auto"
            >
              Review Report
            </Button>
          )}

          {isUnderReview && (
            <Button
              type="button"
              onClick={onOpenResolve}
              className="h-10 cursor-pointer rounded-md bg-[#1565C0] px-4 text-sm font-semibold text-white hover:bg-[#0F54A1] sm:w-auto"
            >
              Resolve Report
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
