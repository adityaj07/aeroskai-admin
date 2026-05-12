import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'

import { UserBillingHistoryCard } from '../components/details/user/UserBillingHistoryCard'
import { UserBillingSummaryCard } from '../components/details/user/UserBillingSummaryCard'
import { UserCurrentSubscriptionCard } from '../components/details/user/UserCurrentSubscriptionCard'
import { UserSubscriptionHeaderBanner } from '../components/details/user/UserSubscriptionHeaderBanner'
import { useIndividualSubscriptionDetails } from '../hooks/useIndividualSubscriptionDetails'

const UserSubscriptionDetailsPage = () => {
  const { subscriptionId } = useParams()
  const { data, isLoading } = useIndividualSubscriptionDetails(subscriptionId)

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#A9B0BA]">
        Loading individual subscription details...
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
      <UserSubscriptionHeaderBanner details={data} />

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <UserCurrentSubscriptionCard currentSubscription={data.currentSubscription} />
        <UserBillingSummaryCard billingSummary={data.billingSummary} />
      </div>

      <UserBillingHistoryCard rows={data.billingHistory} />
    </motion.div>
  )
}

export default UserSubscriptionDetailsPage
