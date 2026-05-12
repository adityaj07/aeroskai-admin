import { useState } from 'react'
import { motion } from 'framer-motion'

import { useDebounce } from '@/hooks/useDebounce'
import { useApplications } from '../hooks/useApplications'
import { ApplicationsTable } from '../components/ApplicationsTable'
import { ApplicationsToolbar } from '../components/ApplicationsToolbar'
import { StatusSwitcher } from '@/components/shared/app/StatusSwitcher'
import { APPLICATION_STATUS_FILTERS } from '../constants/applications.constants'

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

      <StatusSwitcher
        statuses={APPLICATION_STATUS_FILTERS}
        selectedStatus={status}
        onStatusChange={setStatus}
      />

      {isLoading ? (
        <div className="rounded-xl border border-[#EEF1F4] p-10 text-center text-sm text-[#6F7680] dark:border-[#25292E] dark:text-[#9AA2AD]">
          Loading applications...
        </div>
      ) : (
        <ApplicationsTable applications={data?.data} />
      )}
    </motion.div>
  )
}

export default ApplicationsPage
