import { useMutation, useQueryClient } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ApplicationDetailHeader from '../components/applicationDetails/ApplicationDetailHeader'
import ApplicationDetailInfoCard from '../components/applicationDetails/ApplicationDetailInfoCard'
import ApplicationStatusHistoryCard from '../components/applicationDetails/ApplicationStatusHistoryCard'
import ApproveApplicationDialog from '../components/applicationDetails/dialogs/ApproveApplicationDialog'
import ConfirmApplicationActionDialog from '../components/applicationDetails/dialogs/ConfirmApplicationActionDialog'
import RequestMoreInformationDialog from '../components/applicationDetails/dialogs/RequestMoreInformationDialog'
import { APPLICATIONS_QUERY_KEYS } from '../constants/applications.constants'
import { useApplicationDetails } from '../hooks/useApplicationDetails'
import { applicationsService } from '../services/applications.service'

const ApplicationDetailsPage = () => {
  const { applicationId } = useParams()
  const { data, isLoading } = useApplicationDetails(applicationId)
  const queryClient = useQueryClient()

  const [rejectOpen, setRejectOpen] = useState(false)
  const [requestInfoOpen, setRequestInfoOpen] = useState(false)
  const [approveOpen, setApproveOpen] = useState(false)

  const mutation = useMutation({
    mutationFn: async ({ action, payload }) => {
      if (action === 'approve') {
        return applicationsService.approve(applicationId, payload)
      }

      if (action === 'reject') {
        return applicationsService.reject(applicationId, payload)
      }

      return applicationsService.requestMoreInformation(applicationId, payload)
    },
    onSuccess: (updatedApplication) => {
      queryClient.setQueryData(APPLICATIONS_QUERY_KEYS.details(applicationId), updatedApplication)
      queryClient.invalidateQueries({ queryKey: APPLICATIONS_QUERY_KEYS.list })
      queryClient.invalidateQueries({ queryKey: APPLICATIONS_QUERY_KEYS.details(applicationId) })
    },
  })

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]">
        Loading application details...
      </div>
    )
  }

  const companyDetails = [
    { label: 'Business Name', value: data?.companyDetails?.[0]?.value ?? data?.company ?? '' },
    { label: 'Business Website', value: data?.companyDetails?.[1]?.value ?? '' },
    { label: 'Industry / Sector', value: data?.companyDetails?.[2]?.value ?? '' },
    { label: 'Website', value: data?.companyDetails?.[3]?.value ?? '' },
  ]

  const primaryContact = [
    { label: 'Username', value: data?.primaryContact?.[0]?.value ?? '' },
    { label: 'Full Name', value: data?.primaryContact?.[1]?.value ?? '' },
    { label: 'Role in Company', value: data?.primaryContact?.[2]?.value ?? '' },
    { label: 'Work Email', value: data?.primaryContact?.[3]?.value ?? '' },
    { label: 'Phone Number', value: data?.primaryContact?.[4]?.value ?? '' },
  ]

  const additionalDetails = [
    { label: 'Team Size', value: data?.additionalDetails?.[0]?.value ?? '' },
    { label: 'Seats Needed', value: data?.additionalDetails?.[1]?.value ?? '' },
    { label: 'Referral Source', value: data?.additionalDetails?.[2]?.value ?? '' },
    { label: 'Date Submitted', value: data?.additionalDetails?.[3]?.value ?? '' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full min-w-0 space-y-4"
    >
      <ApplicationDetailHeader
        details={{
          companyName: data.company,
          status: data.status,
          email: data.email,
          logoAlt: `${data.company} logo`,
        }}
        onReject={() => setRejectOpen(true)}
        onRequestInfo={() => setRequestInfoOpen(true)}
        onApprove={() => setApproveOpen(true)}
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <ApplicationDetailInfoCard title="Company Details" items={companyDetails} />
        <ApplicationDetailInfoCard title="Primary Contact" items={primaryContact} />
      </div>

      <div className="mt-4">
        <ApplicationDetailInfoCard title="Additional Details" items={additionalDetails} />
      </div>

      <div className="mt-4">
        <ApplicationStatusHistoryCard title="Status History" items={data?.statusHistory ?? []} />
      </div>

      <ConfirmApplicationActionDialog
        open={rejectOpen}
        title="Reject application?"
        description="This action cannot be undone. The application will be marked as rejected."
        label="Reason (optional)"
        placeholder="Add a reason for rejection"
        confirmLabel="Yes, Reject"
        confirmClassName="h-10 bg-[#EF4444] text-sm text-white hover:bg-[#DC2626]"
        onClose={() => setRejectOpen(false)}
        onConfirm={() => {
          mutation.mutate({ action: 'reject', payload: { reason: '' } })
          setRejectOpen(false)
        }}
      />

      <RequestMoreInformationDialog
        open={requestInfoOpen}
        application={data}
        onClose={() => setRequestInfoOpen(false)}
        onSubmit={() => {
          mutation.mutate({ action: 'requestMoreInformation', payload: {} })
          setRequestInfoOpen(false)
        }}
      />

      <ApproveApplicationDialog
        open={approveOpen}
        application={data}
        onClose={() => setApproveOpen(false)}
        onSubmit={(payload) => {
          mutation.mutate({ action: 'approve', payload })
          setApproveOpen(false)
        }}
      />
    </motion.div>
  )
}

export default ApplicationDetailsPage
