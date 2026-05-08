import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { useUserDetails } from '../hooks/useUserDetails'
import { UserDetailHeader } from '../components/userDetails/UserDetailHeader'

// import { CompanyDetailInfoCard } from '../components/companyDetails/CompanyDetailInfoCard'
// import { CompanyHeaderBanner } from '../components/companyDetails/CompanyHeaderBanner'
// import { AdminActionsCard } from '../components/companyDetails/AdminActionsCard'
// import { EmployeeAccountsCard } from '../components/companyDetails/EmployeeAccountsCard'
// import { SubscriptionCard } from '../components/companyDetails/SubscriptionCard'
// import { SubscriptionHistoryCard } from '../components/companyDetails/SubscriptionHistoryCard'

const UserDetailsPage = () => {
  const { userId } = useParams()
  const { data, isLoading } = useUserDetails(userId)

  if (isLoading || !data) {
    return (
      <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#A9B0BA]">
        Loading user details...
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
      <UserDetailHeader details={data} />

      {/* <div className="grid min-w-0 gap-4 xl:grid-cols-2">
        <div className="min-w-0 space-y-4">
          <div className="grid min-w-0 gap-4 md:grid-cols-2">
            <CompanyDetailInfoCard title="Company Details" items={data.companyDetails} />
            <CompanyDetailInfoCard title="Primary Contact" items={data.primaryContact} />
            <CompanyDetailInfoCard title="Activity" items={data.activity} />
            <CompanyDetailInfoCard title="Account" items={data.account} />
          </div>
          <EmployeeAccountsCard employees={data.employees} />
        </div>

        <div className="min-w-0 space-y-4">
          <AdminActionsCard details={data} />
          <SubscriptionCard subscription={data.subscription} />
          <SubscriptionHistoryCard rows={data.subscriptionHistory} />
        </div>
      </div> */}
    </motion.div>
  )
}

export default UserDetailsPage
