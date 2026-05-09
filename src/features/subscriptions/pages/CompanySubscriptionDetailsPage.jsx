import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { CompanyRenewalWorkflowCard } from '../components/details/company/CompanyRenewalWorkflowCard'
import { CompanySubscriptionAdminActionsCard } from '../components/details/company/CompanySubscriptionAdminActionsCard'
import { CompanySubscriptionCard } from '../components/details/company/CompanySubscriptionCard'
import { CompanySubscriptionHeaderBanner } from '../components/details/company/CompanySubscriptionHeaderBanner'
import { UpdateCompanySubscriptionCard } from '../components/details/company/UpdateCompanySubscriptionCard'
import { useCompanySubscriptionDetails } from '../hooks/useCompanySubscriptionDetails'

const CompanySubscriptionDetailsPage = () => {
  const { subscriptionId } = useParams()
  const { data, isLoading } = useCompanySubscriptionDetails(subscriptionId)

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#A9B0BA]">
        Loading company subscription details...
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="w-full min-w-0 space-y-4"
    >
      <CompanySubscriptionHeaderBanner details={data} />

      <div className="grid min-w-0 gap-4 xl:grid-cols-2">
        <div className="min-w-0 space-y-4">
          <CompanySubscriptionCard subscription={data.subscription} />
          <UpdateCompanySubscriptionCard subscription={data.subscription} />
        </div>

        <div className="min-w-0 space-y-4">
          <CompanySubscriptionAdminActionsCard details={data} />
          <CompanyRenewalWorkflowCard workflow={data.renewalWorkflow} />
        </div>
      </div>
    </motion.div>
  )
}

export default CompanySubscriptionDetailsPage
