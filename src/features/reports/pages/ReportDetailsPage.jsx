import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ReportDetailsHeader } from '../components/reportDetails/ReportDetailsHeader'
import { ReportInfoCard } from '../components/reportDetails/ReportInfoCard'
import { ReportedEntityCard } from '../components/reportDetails/ReportedEntityCard'
import { ReportingAccountsCard } from '../components/reportDetails/ReportingAccountsCard'
import { ReviewActionsCards } from '../components/reportDetails/ReviewActionsCards'
import { DeleteContentDialog } from '../components/reportDetails/dialogs/DeleteContentDialog'
import { EditContentDialog } from '../components/reportDetails/dialogs/EditContentDialog'
import { RejectReportDialog } from '../components/reportDetails/dialogs/RejectReportDialog'
import { ResolveReportDialog } from '../components/reportDetails/dialogs/ResolveReportDialog'
import {
  DeactivateUserDialog,
  SuspendUserDialog,
} from '../components/reportDetails/dialogs/UserModerationDialogs'
import { useReportDetails } from '../hooks/useReportDetails'

const defaultDialogState = {
  rejectReport: false,
  resolveReport: false,
  deleteContent: false,
  editContent: false,
  deactivateUser: false,
  suspendUser: false,
}

const ReportDetailsPage = () => {
  const { reportId } = useParams()
  const { data, isLoading } = useReportDetails(reportId)

  const [reportStatus, setReportStatus] = useState('Pending')
  const [dialogState, setDialogState] = useState(defaultDialogState)

  const [rejectReason, setRejectReason] = useState('No violation found')
  const [deleteReason, setDeleteReason] = useState('Spam')
  const [editReason, setEditReason] = useState('Remove spam elements')
  const [editContent, setEditContent] = useState('')
  const [editExplanation, setEditExplanation] = useState('')
  const [deactivateReason, setDeactivateReason] = useState('Spam or abuse')
  const [suspendDuration, setSuspendDuration] = useState('24 hours')
  const [suspendReason, setSuspendReason] = useState('Spam')
  const [resolution, setResolution] = useState('Action taken (content/user moderated)')
  const [resolutionActionTaken, setResolutionActionTaken] = useState('User suspended for 7 days')
  const [resolutionNotes, setResolutionNotes] = useState('')

  useEffect(() => {
    if (!data) return

    setReportStatus(data.status)
    if (data.reportedEntity?.caption) {
      setEditContent(data.reportedEntity.caption)
    } else if (data.reportedEntity?.comment) {
      setEditContent(data.reportedEntity.comment)
    }
  }, [data])

  const report = useMemo(() => {
    if (!data) return null
    return { ...data, status: reportStatus }
  }, [data, reportStatus])

  const closeDialog = (key) => {
    setDialogState((prev) => ({ ...prev, [key]: false }))
  }

  const openDialog = (key) => {
    setDialogState((prev) => ({ ...prev, [key]: true }))
  }

  if (isLoading) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]">
        Loading report details...
      </div>
    )
  }

  if (!report) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]">
        Report not found.
      </div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="w-full min-w-0 space-y-4"
      >
        <ReportDetailsHeader
          report={report}
          onOpenReject={() => openDialog('rejectReport')}
          onOpenResolve={() => openDialog('resolveReport')}
          onReviewReport={() => setReportStatus('Under Review')}
        />

        <div className="grid min-w-0 gap-4 xl:grid-cols-2">
          <div className="min-w-0 space-y-4">
            <ReportInfoCard report={report} />
            <ReportingAccountsCard accounts={report.reportingAccounts} />
          </div>

          <div className="min-w-0 space-y-4">
            {report.status === 'Under Review' && (
              <ReviewActionsCards
                report={report}
                onDeleteContent={() => openDialog('deleteContent')}
                onEditContent={() => openDialog('editContent')}
                onDeactivate={() => openDialog('deactivateUser')}
                onSuspend={() => openDialog('suspendUser')}
              />
            )}

            <ReportedEntityCard report={report} />
          </div>
        </div>
      </motion.div>

      <RejectReportDialog
        open={dialogState.rejectReport}
        report={report}
        reason={rejectReason}
        onReasonChange={setRejectReason}
        onClose={() => closeDialog('rejectReport')}
        onConfirm={() => {
          setReportStatus('Rejected')
          closeDialog('rejectReport')
        }}
      />

      <ResolveReportDialog
        open={dialogState.resolveReport}
        report={report}
        resolution={resolution}
        actionTaken={resolutionActionTaken}
        notes={resolutionNotes}
        onResolutionChange={setResolution}
        onActionTakenChange={setResolutionActionTaken}
        onNotesChange={setResolutionNotes}
        onClose={() => closeDialog('resolveReport')}
        onConfirm={() => {
          setReportStatus('Resolved')
          closeDialog('resolveReport')
        }}
      />

      <DeleteContentDialog
        open={dialogState.deleteContent}
        report={report}
        reason={deleteReason}
        onReasonChange={setDeleteReason}
        onClose={() => closeDialog('deleteContent')}
        onConfirm={() => closeDialog('deleteContent')}
      />

      <EditContentDialog
        open={dialogState.editContent}
        report={report}
        content={editContent}
        reason={editReason}
        explanation={editExplanation}
        onContentChange={setEditContent}
        onReasonChange={setEditReason}
        onExplanationChange={setEditExplanation}
        onClose={() => closeDialog('editContent')}
        onConfirm={() => closeDialog('editContent')}
      />

      <DeactivateUserDialog
        open={dialogState.deactivateUser}
        report={report}
        reason={deactivateReason}
        onReasonChange={setDeactivateReason}
        onClose={() => closeDialog('deactivateUser')}
        onConfirm={() => closeDialog('deactivateUser')}
      />

      <SuspendUserDialog
        open={dialogState.suspendUser}
        report={report}
        duration={suspendDuration}
        reason={suspendReason}
        onDurationChange={setSuspendDuration}
        onReasonChange={setSuspendReason}
        onClose={() => closeDialog('suspendUser')}
        onConfirm={() => closeDialog('suspendUser')}
      />
    </>
  )
}

export default ReportDetailsPage
