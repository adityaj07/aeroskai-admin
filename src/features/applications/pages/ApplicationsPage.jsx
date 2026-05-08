import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { useDebounce } from '@/hooks/useDebounce'
import { useApplications } from '../hooks/useApplications'
import { ApplicationsTable } from '../components/ApplicationsTable'
import { ApplicationsStatusSwitcher } from '../components/ApplicationsStatusSwitcher'
import { ApplicationsToolbar } from '../components/ApplicationsToolbar'

const ApplicationsPage = () => {
  const [status, setStatus] = useState('All')
  const [search, setSearch] = useState('')

  const debouncedSearch = useDebounce(search, 250)

  const { data, isLoading } = useApplications({
    status,
    search: debouncedSearch,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="space-y-5"
    >
      <ApplicationsToolbar search={search} onSearchChange={setSearch} />

      <ApplicationsStatusSwitcher selectedStatus={status} onStatusChange={setStatus} />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-white/10 dark:text-[#9AA2AD]">
          Loading applications...
        </div>
      ) : (
        <ApplicationsTable applications={data?.data} />
      )}
    </motion.div>
  )
}

export default ApplicationsPage
